<script setup>
import { BaseSearchInput, InventoryCard } from "@/components";

const inventories = [
    {
        id: 1,
        title: "Инвентарь 1",
        avatar: "https://media.rentinhand.ru/production/public/orig/20220718-b57df6a0-06a8-11ed-b33f-f9345db97fae.jpeg",
        article: "31290GS",
        state: { title: "Свободен", stateConst: "FREE", color: "#ff0000" },
    },
    {
        id: 2,
        title: "Инвентарь 2",
        avatar: "https://media.rentinhand.ru/production/public/orig/20220718-b57df6a0-06a8-11ed-b33f-f9345db97fae.jpeg",
        article: "31290GS",
        state: { title: "В аренде", stateConst: "IN_PROGRESS", color: "#ff00ff" },
    },
    {
        id: 3,
        title: "Инвентарь 3",
        avatar: "https://media.rentinhand.ru/production/public/orig/20220718-b57df6a0-06a8-11ed-b33f-f9345db97fae.jpeg",
        article: "31290GS",
        state: { title: "Свободен", stateConst: "FREE", color: "#ff0000" },
    },
];
</script>

<template>
    <div class="inventories-page">
        <BaseSearchInput class="search-input" />
        <div class="inventories-list">
            <InventoryCard
                :inventory="inventory"
                v-for="inventory in inventories"
                :key="inventory.id"
            />
        </div>
    </div>
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
