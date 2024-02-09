<script setup>
import { refDebounced } from "@vueuse/core";
import { ref, computed, watchEffect } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { BaseSearchInput, BaseDeleteModal, BasePaginate, InventoryPriceCard } from "@/components";
import { IconPrice, IconSearch } from "@/icones";
import { useInventoryPricesStore } from "@/stores";

const inventoryPricesStore = useInventoryPricesStore();
const router = useRouter();

const perPage = ref(12);
const currentPage = ref(1);
const searchValue = ref("");
const debouncedSearchValue = refDebounced(searchValue, 400);

const totalPages = computed(() => {
    return Math.ceil(inventoryPricesStore.meta.total / perPage.value);
});

const hasInventoryPrices = computed(() => {
    return inventoryPricesStore.isManyLoading || inventoryPricesStore.listData.length > 0;
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

    inventoryPricesStore.fetchMany({
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

const deleteInventoryPrice = async function () {
    await inventoryPricesStore.deleteOne(deletingId.value);
    reload();
};

const handleEditing = function (id) {
    router.push({ name: "EditInventoryPrice", params: { id } });
};
</script>

<template>
    <div class="inventory-prices-page">
        <template v-if="hasInventoryPrices || !isEmptySearchValue">
            <BaseSearchInput v-model="searchValue" class="search-input" />
            <div class="inventory-prices-list">
                <template v-if="!inventoryPricesStore.isManyLoading">
                    <InventoryPriceCard
                        v-for="inventoryPrice in inventoryPricesStore.listData"
                        :inventory-price="inventoryPrice"
                        :key="inventoryPrice.id"
                        @delete="handleDeleting(inventoryPrice.id)"
                        @edit="handleEditing(inventoryPrice.id)"
                    />
                </template>
                <template v-else>
                    <InventoryPriceCard
                        v-for="id in 12"
                        :inventory-price="{}"
                        :key="id"
                        is-loading
                    />
                </template>
            </div>
            <div
                v-if="inventoryPricesStore.listData.length === 0 && !isEmptySearchValue"
                class="no-inventory-prices mt-small"
            >
                <IconSearch class="no-inventory-prices-icon" />
                <span class="no-inventory-prices-text"> Ничего не найдено </span>
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
        <div v-else class="no-inventory-prices">
            <IconPrice class="no-inventory-prices-icon" />
            <span class="no-inventory-prices-text"> Нет добавленных тарифов </span>
            <RouterLink class="add-inventory-price" :to="{ name: 'AddInventoryPrice' }">
                Добавить тариф
            </RouterLink>
        </div>
    </div>

    <BaseDeleteModal v-model="showModal" @accept="deleteInventoryPrice" @close="deletingId = null">
        <template #title> Удаление тарифа </template>
        <template #description> Вы уверены, что хотите удалить этот тариф? </template>
    </BaseDeleteModal>
</template>

<style lang="scss" scoped>
.inventory-prices-page {
    display: flex;
    flex-direction: column;
}

.search-input {
    width: 100%;
    margin-bottom: 20px;
}

.inventory-prices-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}

.paginate {
    align-self: center;
}

.no-inventory-prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 130px;

    &.mt-small {
        margin-top: 50px;
    }
}

.no-inventory-prices-icon {
    width: 45px;
    height: auto;
    margin-bottom: 12px;
    color: var(--c-gray-7);
}

.no-inventory-prices-text {
    display: inline-block;
    width: 250px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    color: var(--c-gray-7);
    text-align: center;
}

.add-inventory-price {
    font-size: 15px;
    line-height: 20px;
    color: var(--c-primary);
}
</style>
