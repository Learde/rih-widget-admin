<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

import { BaseTree, BaseDeleteModal } from "@/components";
import { IconCategory, IconBars, IconEdit, IconDelete } from "@/icones";
import { useCategoriesStore } from "@/stores";

import { mapCategoriesToTree } from "./lib/mapCategoriesToTree.js";
import { PLACEHOLDER_DATA } from "./model/placeholderData.js";

const categoriesStore = useCategoriesStore();

const reload = async function () {
    categoriesStore.fetchMany({ page: 1, perPage: 999 });
};

reload();

const mappedCategories = computed(() => {
    if (categoriesStore.isManyLoading) {
        return PLACEHOLDER_DATA;
    }

    return mapCategoriesToTree(categoriesStore.listData);
});

const showModal = ref(false);
const deletingId = ref(null);

const handleDeleting = function (id) {
    showModal.value = true;
    deletingId.value = id;
};

const deleteCategory = async function () {
    await categoriesStore.deleteOne(deletingId.value);
    reload();
};
</script>

<template>
    <div>
        <div v-if="categoriesStore.isManyLoading || categoriesStore.listData.length > 0">
            <BaseTree :options="mappedCategories">
                <template #default="{ node }">
                    <div class="node-wrapper" :class="{ loading: categoriesStore.isManyLoading }">
                        <IconBars class="icon-bars" />
                        <span class="node-text"> {{ node.text }} </span>
                        <div class="node-actions">
                            <IconEdit class="node-edit" />
                            <IconDelete class="node-delete" @click="handleDeleting(node.id)" />
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

    <BaseDeleteModal v-model="showModal" @accept="deleteCategory" @close="deletingId = null">
        <template #title> Удаление категории </template>
        <template #description> Вы уверены, что хотите удалить эту категорию? </template>
    </BaseDeleteModal>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.node-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;

    .node-actions {
        position: absolute;
        top: 50%;
        right: -10px;
        display: flex;
        margin-left: auto;
        transform: translateY(-50%);
    }

    .node-edit {
        box-sizing: content-box;
        width: auto;
        height: 18px;
        padding: 10px;
        color: var(--c-primary);
        cursor: pointer;
    }

    .node-delete {
        box-sizing: content-box;
        width: auto;
        height: 16px;
        padding: 10px;
        color: var(--c-red);
        cursor: pointer;
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
            right: 0;
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
