<script setup>
import { BaseDeleteModal, BasePaginate, BaseSearchInput, InventoryCard } from "@/components";
import { computed, ref, watchEffect } from "vue";
import { refDebounced } from "@vueuse/core";
import { useInventoriesStore } from "@/stores";

const perPage = ref(12);
const currentPage = ref(1);
const searchValue = ref("");
const debouncedSearchValue = refDebounced(searchValue, 400);

const inventoriesStore = useInventoriesStore();

const totalPages = computed(() => {
    return Math.ceil(inventoriesStore.meta.total / perPage.value);
});

const changePage = function (page) {
    currentPage.value = page;
};

let prevSearch = "";

watchEffect(() => {
    if (prevSearch !== debouncedSearchValue.value) {
        currentPage.value = 1;
    }

    prevSearch = debouncedSearchValue.value;

    inventoriesStore.fetchMany({
        search: debouncedSearchValue.value,
        perPage: perPage.value,
        page: currentPage.value,
    });
});

const showModal = ref(false);

const handleDeleting = function () {
    showModal.value = true;
};
</script>

<template>
    <div class="inventories-page">
        <BaseSearchInput v-model="searchValue" class="search-input" />
        <div class="inventories-list">
            <template v-if="!inventoriesStore.isManyLoading">
                <InventoryCard
                    v-for="inventory in inventoriesStore.listData"
                    :inventory="inventory"
                    :key="inventory.id"
                    @delete="handleDeleting"
                />
            </template>
            <template v-else>
                <InventoryCard v-for="id in 12" :inventory="{}" :key="id" is-loading />
            </template>
        </div>
        <BasePaginate
            class="paginate"
            :page-count="totalPages"
            :click-handler="changePage"
            :model-value="currentPage"
            prev-text="<"
            next-text=">"
        />
    </div>

    <BaseDeleteModal v-model="showModal">
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
</style>
