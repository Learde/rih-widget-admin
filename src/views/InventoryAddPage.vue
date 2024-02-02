<script setup>
import { BaseFormGroup, BaseInput, BaseTextarea } from "@/components";
</script>

<template>
    <div class="wrapper">
        <BaseFormGroup>
            <template #label> Название инвентаря </template>
            <template #content>
                <BaseInput placeholder="Введите название" />
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Артикул </template>
            <template #content>
                <BaseInput placeholder="Введите артикул" />
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Инвентарный номер </template>
            <template #content>
                <BaseInput placeholder="Введите номер" />
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Описание </template>
            <template #content>
                <BaseTextarea placeholder="Введите описание" />
            </template>
        </BaseFormGroup>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
</style>
