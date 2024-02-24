<script setup>
import { nextTick } from "vue";

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
    backRouteName: {
        type: String,
        default: "AddInventory",
    },
});
const emit = defineEmits(["update:modelValue", "fetched"]);

const categoriesStore = useCategoriesStore();

const reload = async function () {
    if (categoriesStore.hasUnloadedOptions) {
        await categoriesStore.fetchMany({ perPage: 999, page: 1, search: "" });

        await nextTick();
        emit("fetched");
    }
};

const handleClick = function (e, close) {
    emit("update:modelValue", e);
    close();
};
</script>

<template>
    <BaseSelectMenu
        modal-title="Категория инвентаря"
        placeholder="Не выбрана"
        :is-error="isError"
        :value="modelValue?.title"
        add-route-name="AddCategory"
        :back-route-name="backRouteName"
        @open="reload"
    >
        <template #label> Категория </template>
        <template #modal-content="{ closeModal }">
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
                        @click="handleClick($event, closeModal)"
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
                        <RouterLink class="add-category" :to="{ name: 'AddCategory' }">
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
