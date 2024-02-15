<script setup>
import { BaseSelectMenu } from "@/components";
import { useCategoriesStore } from "@/stores";

import SelectCategoryItem from "./SelectCategoryItem.vue";

defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Object,
        default: null,
    },
});
defineEmits(["update:modelValue"]);

const categoriesStore = useCategoriesStore();

const reload = function () {
    if (categoriesStore.hasUnloadedOptions) {
        categoriesStore.fetchMany({ perPage: 999, page: 1, search: "" });
    }
};
</script>

<template>
    <BaseSelectMenu modal-title="Категория инвентаря" :is-error="isError" @open="reload">
        <template #label> Категория </template>
        <template #modal-content>
            <div class="select-category-content">
                <template v-if="!categoriesStore.isManyLoading">
                    <SelectCategoryItem
                        v-for="(category, index) in categoriesStore.listData"
                        :key="category.id"
                        :category="category"
                        :has-border="index !== categoriesStore.listData.length - 1"
                        :active-id="modelValue?.id"
                        @click="$emit('update:modelValue', $event)"
                    />
                </template>
                <template v-else>
                    <SelectCategoryItem
                        v-for="index in 8"
                        :key="index"
                        :category="{}"
                        :has-border="index !== 8"
                        is-loading
                    />
                </template>
            </div>
        </template>
        <template #error-text>
            <slot name="error-text"></slot>
        </template>
    </BaseSelectMenu>
</template>

<style lang="scss" scoped>
.select-category-content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;
    align-items: center;

    &:deep(hr:last-child) {
        display: none;
    }
}
</style>
