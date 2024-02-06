<script setup>
import { IconCategory } from "@/icones";
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <div v-if="false"></div>
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
