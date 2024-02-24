<script setup>
import { refDebounced } from "@vueuse/core";
import { computed, ref, watchEffect, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { BaseDeleteModal, BasePaginate, BaseSearchInput, InventoryCard } from "@/components";
import { IconInventory, IconSearch } from "@/icones";
import { useInventoriesStore, useOnboardingStore } from "@/stores";

const perPage = ref(12);
const currentPage = ref(1);
const searchValue = ref("");
const debouncedSearchValue = refDebounced(searchValue, 400);

const inventoriesStore = useInventoriesStore();
const router = useRouter();

const totalPages = computed(() => {
    return Math.ceil(inventoriesStore.meta.total / perPage.value);
});

const hasInventories = computed(() => {
    return inventoriesStore.isManyLoading || inventoriesStore.listData.length > 0;
});

const isEmptySearchValue = computed(() => {
    return !debouncedSearchValue.value || debouncedSearchValue.value.trim().length === 0;
});

const changePage = function (page) {
    currentPage.value = page;
};

let prevSearch = "";
const reload = function () {
    if (prevSearch !== debouncedSearchValue.value) {
        currentPage.value = 1;
    }

    prevSearch = debouncedSearchValue.value;

    inventoriesStore.fetchMany({
        search: debouncedSearchValue.value,
        perPage: perPage.value,
        page: currentPage.value,
    });
};

watchEffect(reload);

const showModal = ref(false);
const deletingId = ref(null);

const handleDeleting = function (id) {
    showModal.value = true;
    deletingId.value = id;
};

const deleteInventory = async function () {
    await inventoriesStore.deleteOne(deletingId.value);
    reload();
};

const onboardingStore = useOnboardingStore();

onMounted(() => {
    onboardingStore.moveNext();
});
</script>

<template>
    <div class="inventories-page">
        <template v-if="hasInventories || !isEmptySearchValue">
            <BaseSearchInput v-model="searchValue" class="search-input" />
            <div class="inventories-list">
                <template v-if="!inventoriesStore.isManyLoading">
                    <InventoryCard
                        v-for="inventory in inventoriesStore.listData"
                        :inventory="inventory"
                        :key="inventory.id"
                        @delete="handleDeleting(inventory.id)"
                        @edit="router.push({ name: 'EditInventory', params: { id: inventory.id } })"
                    />
                </template>
                <template v-else>
                    <InventoryCard v-for="id in 12" :inventory="{}" :key="id" is-loading />
                </template>
            </div>
            <div
                v-if="inventoriesStore.listData.length === 0 && !isEmptySearchValue"
                class="no-inventories mt-small"
            >
                <IconSearch class="no-inventories-icon" />
                <span class="no-inventories-text"> Ничего не найдено </span>
            </div>
            <BasePaginate
                class="paginate"
                :page-count="totalPages"
                :click-handler="changePage"
                :model-value="currentPage"
                prev-text="<"
                next-text=">"
            />
        </template>
        <div v-else class="no-inventories">
            <IconInventory class="no-inventories-icon" />
            <span class="no-inventories-text"> Нет добавленного инвентаря на складе </span>
            <RouterLink class="add-inventory" :to="{ name: 'AddInventory' }">
                Добавить инвентарь
            </RouterLink>
        </div>
    </div>

    <BaseDeleteModal v-model="showModal" @accept="deleteInventory" @close="deletingId = null">
        <template #title> Удаление инвентаря </template>
        <template #description> Вы уверены, что хотите удалить этот инвентарь? </template>
    </BaseDeleteModal>
</template>

<style lang="scss" scoped>
.inventories-page {
    display: flex;
    flex-direction: column;
}

.search-input {
    width: 100%;
    margin-bottom: 20px;
}

.inventories-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}

.paginate {
    align-self: center;
}

.no-inventories {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 130px;

    &.mt-small {
        margin-top: 50px;
    }
}

.no-inventories-icon {
    width: 45px;
    height: auto;
    margin-bottom: 12px;
    color: var(--c-gray-7);
}

.no-inventories-text {
    display: inline-block;
    width: 250px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    color: var(--c-gray-7);
    text-align: center;
}

.add-inventory {
    font-size: 15px;
    line-height: 20px;
    color: var(--c-primary);
}
</style>
