<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed, onMounted, ref } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";

import { BaseFormGroup, BaseInput, BaseLoadingModal } from "@/components";
import { useTrans, useEventBus, useCategoriesStore } from "@/stores";

const trans = useTrans();
const eventBus = useEventBus();
const categoriesStore = useCategoriesStore();
const router = useRouter();
const route = useRoute();

const formData = reactive({
    title: "",
});

const rules = {
    formData: {
        title: { required },
    },
};

const v$ = useVuelidate(rules, { formData });

const isTitleValid = computed(() => {
    return !v$.value.formData.title.$error;
});
const titleErrors = computed(() => {
    return v$.value.formData.title.$errors;
});
const handleTitleInput = function () {
    v$.value.formData.title.$touch();
};

const loadingState = ref("pending");

onMounted(() => {
    eventBus.addEventListener("ready", async () => {
        const isValid = await v$.value.$validate();

        if (isValid) {
            loadingState.value = "loading";

            await categoriesStore.addOne({
                title: formData.title,
                children: [],
                discounts: [],
                prices: [],
            });

            loadingState.value = "success";

            setTimeout(() => {
                const query = {};

                if (route.query.backRouteName) {
                    query.noReset = true;
                }

                router.push({ name: route.query.backRouteName || "Categories", query });
            }, 1500);
        }
    });
});

onBeforeRouteLeave(() => {
    eventBus.clearEventListeners("ready");
});
</script>

<template>
    <div>
        <BaseFormGroup :is-error="!isTitleValid">
            <template #label> Название категории * </template>
            <template #content>
                <BaseInput
                    placeholder="Введите название"
                    :is-error="!isTitleValid"
                    v-model="formData.title"
                    @input="handleTitleInput"
                />
            </template>
            <template #error-text>
                {{ trans.validationMessages[titleErrors?.at(0)?.$validator] }}
            </template>
        </BaseFormGroup>
    </div>

    <BaseLoadingModal :state="loadingState" />
</template>
