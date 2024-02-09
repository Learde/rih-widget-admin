<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed, onMounted, ref } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";

import { BaseFormGroup, BaseInput, BaseLoadingModal } from "@/components";
import { useTrans, useEventBus, usePointsStore } from "@/stores";

const props = defineProps({
    id: {
        type: [String, Number],
        default: null,
    },
});

const trans = useTrans();
const eventBus = useEventBus();
const pointsStore = usePointsStore();
const router = useRouter();

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

onMounted(async () => {
    if (props.id) {
        loadingState.value = "loading";
        const point = await pointsStore.getOne(props.id);

        loadingState.value = "pending";

        formData.title = point.title;
    }

    eventBus.addEventListener("ready", async () => {
        const isValid = await v$.value.$validate();

        if (isValid) {
            loadingState.value = "loading";

            if (props.id) {
                await pointsStore.editOne(props.id, {
                    id: props.id,
                    title: formData.title,
                });
            } else {
                await pointsStore.addOne({
                    title: formData.title,
                });
            }

            loadingState.value = "success";

            setTimeout(() => {
                router.push({ name: "Points" });
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
            <template #label> Название пункта проката * </template>
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
