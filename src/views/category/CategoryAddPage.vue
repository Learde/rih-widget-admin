<script setup>
import { BaseFormGroup, BaseInput } from "@/components";
</script>

<template>
    <div>
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
    </div>
</template>
