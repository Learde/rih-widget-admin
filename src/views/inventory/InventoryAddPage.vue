<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import {
    BaseButton,
    BaseFormGroup,
    BaseImageSelect,
    BaseInput,
    BaseTextarea,
    BaseLoadingModal,
    BaseNotification,
    SelectInventoryState,
    SelectCategory,
    SelectInventoryPrice,
    SelectPoint,
} from "@/components";
import { useOnboardingStore, useTrans } from "@/stores";

import { useInventoryFormStore } from "./model/useInventoryFormStore.js";

const props = defineProps({
    id: { type: [String, Number], default: null },
});

const trans = useTrans();
const inventoryForm = useInventoryFormStore();
const route = useRoute();
const onboardingStore = useOnboardingStore();

const handlePriceOpened = function () {
    onboardingStore.moveToSeventhStep();
    onboardingStore.moveToThirteenthStep();
};

onMounted(() => {
    if (!route.query.noReset) {
        inventoryForm.$reset();

        if (props.id) {
            inventoryForm.fillFormData(props.id);
        }
    }

    onboardingStore.moveNext();
});
</script>

<template>
    <div class="wrapper">
        <div class="wrapper main-fields">
            <BaseFormGroup :is-error="!inventoryForm.isTitleValid">
                <template #label> Название инвентаря * </template>
                <template #content>
                    <BaseInput
                        placeholder="Введите название"
                        :is-error="!inventoryForm.isTitleValid"
                        v-model="inventoryForm.formData.title"
                        @input="inventoryForm.handleTitleInput"
                    />
                </template>
                <template #error-text>
                    {{ trans.validationMessages[inventoryForm.titleErrors?.at(0)?.$validator] }}
                </template>
            </BaseFormGroup>
            <BaseFormGroup>
                <template #label> Артикул </template>
                <template #content>
                    <BaseInput
                        placeholder="Введите артикул"
                        v-model="inventoryForm.formData.article"
                    />
                </template>
            </BaseFormGroup>
            <BaseFormGroup>
                <template #label> Инвентарный номер </template>
                <template #content>
                    <BaseInput
                        placeholder="Введите номер"
                        v-model="inventoryForm.formData.inventoryNumber"
                    />
                </template>
            </BaseFormGroup>
            <BaseFormGroup>
                <template #label> Описание </template>
                <template #content>
                    <BaseTextarea
                        placeholder="Введите описание"
                        v-model="inventoryForm.formData.description"
                    />
                </template>
            </BaseFormGroup>
        </div>
        <SelectInventoryState
            class="inventory-state-select"
            v-model="inventoryForm.formData.state"
            @opened="onboardingStore.moveToFifthStep"
            @fetched="onboardingStore.refresh"
            @selected="onboardingStore.moveToSixthStep"
            :is-error="!inventoryForm.isStateValid"
        >
            <template #error-text>
                {{ trans.validationMessages[inventoryForm.stateErrors?.at(0)?.$validator] }}
            </template>
        </SelectInventoryState>
        <SelectCategory v-model="inventoryForm.formData.category" />
        <SelectInventoryPrice
            class="inventory-price-select"
            v-model="inventoryForm.formData.price"
            @opened="handlePriceOpened"
            @fetched="onboardingStore.refresh"
            @selected="onboardingStore.moveToFourteenthStep"
            :is-error="!inventoryForm.isPriceValid"
        >
            <template #error-text>
                {{ trans.validationMessages[inventoryForm.priceErrors?.at(0)?.$validator] }}
            </template>
        </SelectInventoryPrice>
        <SelectPoint v-model="inventoryForm.formData.point" />
        <BaseImageSelect id="inventory-image-select" v-model="inventoryForm.formData.media" />
        <BaseButton id="save-inventory" @click="inventoryForm.save">Сохранить</BaseButton>
    </div>
    <BaseLoadingModal :state="inventoryForm.state" />
    <BaseNotification v-model="inventoryForm.isNotificationShown" type="error" />
</template>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
</style>
