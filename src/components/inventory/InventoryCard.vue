<script setup>
import { BaseBadge } from "@/components";
import { IconDelete } from "@/icones";

defineProps({
    inventory: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="card">
        <div class="img-wrapper">
            <div class="img" :style="{ backgroundImage: `url(${inventory.avatar})` }"></div>
        </div>
        <div>
            <h4>{{ inventory.title }}</h4>
            <span class="article">Артикул: {{ inventory.article }}</span>
            <BaseBadge :color="inventory.state.color">{{ inventory.state.title }}</BaseBadge>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    gap: 12px;
    align-items: stretch;

    & .img-wrapper {
        padding: 3px;
        border: 1px solid var(--c-gray-3);
        border-radius: 10px;
    }

    & .img {
        width: 100px;
        height: 100%;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
    }

    & h4 {
        margin-bottom: 5px;
        font-size: 15px;
        line-height: 20px;
    }

    & .article {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 12px;
        line-height: 16px;
        color: var(--c-gray-5);
    }
}
</style>
