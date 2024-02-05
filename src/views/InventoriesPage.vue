<script setup>
import { BaseDeleteModal, BaseSearchInput, InventoryCard } from "@/components";
import { ref } from "vue";
import { useInventoriesStore } from "@/stores";

const inventoriesStore = useInventoriesStore();

inventoriesStore.fetchMany();

const showModal = ref(false);

const handleDeleting = function () {
    showModal.value = true;
};
</script>

<template>
    <div class="inventories-page">
        <BaseSearchInput class="search-input" />
        <div class="inventories-list">
            <InventoryCard
                :inventory="inventory"
                v-for="inventory in inventoriesStore.listData"
                :key="inventory.id"
                @delete="handleDeleting"
            />
        </div>
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
</style>
