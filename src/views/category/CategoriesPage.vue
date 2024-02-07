<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

import { BaseTree } from "@/components";
import { IconCategory, IconBars, IconEdit, IconDelete } from "@/icones";
import { useCategoriesStore } from "@/stores";

import { mapCategoriesToTree } from "./lib/mapCategoriesToTree.js";
import { PLACEHOLDER_DATA } from "./model/placeholderData.js";

const categoriesStore = useCategoriesStore();

const reload = async function () {
    categoriesStore.fetchMany({ page: 1, perPage: 999 });
};

const mappedCategories = computed(() => {
    if (categoriesStore.isManyLoading) {
        return PLACEHOLDER_DATA;
    }

    return mapCategoriesToTree(categoriesStore.listData);
});

reload();
</script>

<template>
    <div>
        <div v-if="true">
            <BaseTree :options="mappedCategories">
                <template #default="{ node }">
                    <div class="node-wrapper" :class="{ loading: categoriesStore.isManyLoading }">
                        <IconBars class="icon-bars" />
                        <span class="node-text"> {{ node.text }} </span>
                        <div class="node-actions">
                            <IconEdit class="node-edit" />
                            <IconDelete class="node-delete" />
                        </div>
                    </div>
                </template>
            </BaseTree>
        </div>
        <div v-else class="no-categories">
            <IconCategory class="no-categories-icon" />
            <span class="no-categories-text"> Нет добавленных категорий </span>
            <RouterLink class="add-category" :to="{ name: 'AddInventory' }">
                Добавить категорию
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.node-wrapper {
    display: flex;
    align-items: center;
    width: 100%;

    .node-actions {
        display: flex;
        gap: 12px;
        margin-left: auto;
    }

    .node-edit {
        width: auto;
        height: 18px;
        color: var(--c-primary);
    }

    .node-delete {
        width: auto;
        height: 16px;
        color: var(--c-red);
    }

    .node-text {
        font-size: 15px;
        line-height: 20px;
    }

    .icon-bars {
        width: 20px;
        height: auto;
        margin-right: 14px;
    }

    &.loading {
        .node-actions {
            width: 45px;
            height: 20px;

            @include skeleton;
        }

        .node-text {
            width: 120px;
            height: 20px;

            @include skeleton;
        }
    }
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
</style>
