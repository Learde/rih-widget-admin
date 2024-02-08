<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";

import { BaseFormGroup, BaseInput } from "@/components";
import { useTrans, useEventBus, useCategoriesStore } from "@/stores";

const trans = useTrans();
const eventBus = useEventBus();
const categoriesStore = useCategoriesStore();

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

onMounted(() => {
    eventBus.addEventListener("ready", async () => {
        const isValid = await v$.value.$validate();

        if (isValid) {
            categoriesStore.addOne({
                title: formData.title,
                children: [],
                discounts: [],
                prices: [],
            });
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
</template>
