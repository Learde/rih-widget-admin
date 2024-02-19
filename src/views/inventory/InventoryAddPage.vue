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
} from "@/components";
import { useTrans } from "@/stores";

import { useInventoryFormStore } from "./model/useInventoryFormStore.js";

const props = defineProps({
    id: { type: [String, Number], default: null },
});

const trans = useTrans();
const inventoryForm = useInventoryFormStore();
const route = useRoute();

onMounted(() => {
    if (!route.query.noReset) {
        inventoryForm.$reset();

        if (props.id) {
            inventoryForm.fillFormData(props.id);
        }
    }
});
</script>

<template>
    <div class="wrapper">
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
                <BaseInput placeholder="Введите артикул" v-model="inventoryForm.formData.article" />
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
        <SelectInventoryState
            v-model="inventoryForm.formData.state"
            :is-error="!inventoryForm.isStateValid"
        >
            <template #error-text>
                {{ trans.validationMessages[inventoryForm.stateErrors?.at(0)?.$validator] }}
            </template>
        </SelectInventoryState>
        <SelectCategory v-model="inventoryForm.formData.category" />
        <SelectInventoryPrice
            v-model="inventoryForm.formData.price"
            :is-error="!inventoryForm.isPriceValid"
        >
            <template #error-text>
                {{ trans.validationMessages[inventoryForm.priceErrors?.at(0)?.$validator] }}
            </template>
        </SelectInventoryPrice>
        <BaseImageSelect v-model="inventoryForm.formData.media" />
        <BaseButton @click="inventoryForm.save">Сохранить</BaseButton>
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
