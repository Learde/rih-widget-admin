<script setup>
import { IconCheck } from "@/icones";

defineProps({
    inventoryPrice: {
        type: Object,
        required: true,
    },
    hasBorder: {
        type: Boolean,
        default: true,
    },
    level: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        defulat: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["click"]);
</script>

<template>
    <div
        class="inventory-price-item"
        :class="{ loading: isLoading }"
        @click="$emit('click', inventoryPrice)"
    >
        <h3>{{ inventoryPrice.title }}</h3>
        <IconCheck v-if="isActive" class="icon-check" />
    </div>
    <hr class="inventory-price-delim" />
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.inventory-price-item {
    position: relative;
    cursor: pointer;

    h3 {
        font-size: 15px;
        line-height: 20px;
    }

    .icon-check {
        position: absolute;
        top: 50%;
        right: 0;
        width: 18px;
        height: auto;
        color: var(--c-primary);
        transform: translateY(-50%);
    }

    &.loading {
        & h3 {
            @include skeleton;

            display: inline-block;
            width: 140px;
            height: 20px;
        }
    }
}

.inventory-price-delim {
    width: 100%;
    height: 1px;
    background-color: var(--c-gray-3);
    border: none;
}
</style>
