<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRouter, onBeforeRouteLeave } from "vue-router";

import { BaseTree, BaseDeleteModal, BaseButton } from "@/components";
import { IconCategory, IconBars, IconEdit, IconDelete } from "@/icones";
import { useCategoriesStore } from "@/stores";

import { mapCategoriesToTree } from "./lib/mapCategoriesToTree.js";
import { mapTreeToCategories } from "./lib/mapTreeToCategories.js";
import { PLACEHOLDER_DATA } from "./model/placeholderData.js";

const categoriesStore = useCategoriesStore();
const router = useRouter();

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
const wasChanged = ref(false);
const treeRef = ref(null);

const handleSaving = function () {
    const data = treeRef.value.getData();

    wasChanged.value = false;
    categoriesStore.editMany(mapTreeToCategories(data));
};

const handleEditing = function (id) {
    router.push({ name: "EditCategory", params: { id } });
};

const handleDeleting = function (id) {
    showModal.value = true;
    deletingId.value = id;
};

const deleteCategory = async function () {
    await categoriesStore.deleteOne(deletingId.value);
    reload();
};

const showAlert = ref(false);
const toRoute = ref(null);

onBeforeRouteLeave((to) => {
    if (!toRoute.value && wasChanged.value) {
        showAlert.value = true;
        toRoute.value = to;

        return false;
    }
});

const continueRouting = function () {
    router.push({ name: toRoute.value.name });
};
</script>

<template>
    <div>
        <div v-if="categoriesStore.isManyLoading || categoriesStore.listData.length > 0">
            <BaseTree
                :options="mappedCategories"
                @change="wasChanged = true"
                v-model:tree-ref="treeRef"
            >
                <template #default="{ node }">
                    <div class="node-wrapper" :class="{ loading: categoriesStore.isManyLoading }">
                        <IconBars class="icon-bars" />
                        <span class="node-text"> {{ node.text }} </span>
                        <div class="node-actions">
                            <IconEdit class="node-edit" @click="handleEditing(node.id)" />
                            <IconDelete class="node-delete" @click="handleDeleting(node.id)" />
                        </div>
                    </div>
                </template>
            </BaseTree>
            <BaseButton v-if="wasChanged" class="save-button" @click="handleSaving">
                Сохранить изменения
            </BaseButton>
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

    <BaseDeleteModal
        v-model="showAlert"
        :should-emit-close-after-accept="false"
        @accept="continueRouting"
        @close="toRoute = null"
    >
        <template #title> Есть несохраненные изменения </template>
        <template #description>
            Вы уверены, что хотите покинуть эту страницу? Изменения будут утеряны
        </template>
        <template #accept> Перейти </template>
    </BaseDeleteModal>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.save-button {
    width: 100%;
}

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
