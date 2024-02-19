<script setup>
import { BaseSelectMenu } from "@/components";
import { IconCategory } from "@/icones";
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
    <BaseSelectMenu
        modal-title="Категория инвентаря"
        placeholder="Не выбрана"
        :is-error="isError"
        :value="modelValue?.title"
        @open="reload"
    >
        <template #label> Категория </template>
        <template #modal-content>
            <div class="select-category-content">
                <template
                    v-if="!categoriesStore.isManyLoading && categoriesStore.listData.length > 0"
                >
                    <SelectCategoryItem
                        v-for="(category, index) in categoriesStore.listData"
                        :key="category.id"
                        :category="category"
                        :has-border="index !== categoriesStore.listData.length - 1"
                        :active-id="modelValue?.id"
                        @click="$emit('update:modelValue', $event)"
                    />
                </template>
                <template
                    v-else-if="
                        !categoriesStore.isManyLoading && categoriesStore.listData.length === 0
                    "
                >
                    <div class="no-categories">
                        <IconCategory class="no-categories-icon" />
                        <span class="no-categories-text"> Нет добавленных категорий </span>
                        <RouterLink
                            class="add-category"
                            :to="{ name: 'AddCategory', query: { backRouteName: 'AddInventory' } }"
                        >
                            Добавить категорию
                        </RouterLink>
                    </div>
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

    .no-categories {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 130px;

        &.mt-small {
            margin-top: 50px;
        }
    }

    .no-categories-icon {
        width: 45px;
        height: auto;
        margin-bottom: 12px;
        color: var(--c-gray-7);
    }

    .no-categories-text {
        display: inline-block;
        width: 250px;
        margin-bottom: 24px;
        font-size: 18px;
        line-height: 24px;
        color: var(--c-gray-7);
        text-align: center;
    }

    .add-category {
        font-size: 15px;
        line-height: 20px;
        color: var(--c-primary);
    }
}
</style>
