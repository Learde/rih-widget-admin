<script setup>
import { BaseBadge } from "@/components";
import { IconCheck } from "@/icones";

defineProps({
    state: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    hasBorder: {
        type: Boolean,
        default: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="select-state-badge-wrapper" @click="$emit('click')">
        <BaseBadge class="select-state-badge" :color="state.color" size="md" padding-x="8px">
            {{ state.title }}
        </BaseBadge>
    </div>
    <div class="select-state-description-wrapper" :class="{ mr: isActive }" @click="$emit('click')">
        <span class="select-state-description">{{ description }}</span>
        <IconCheck v-if="isActive" class="select-state-check" />
    </div>
    <hr v-if="hasBorder" class="select-state-delim" />
</template>

<style lang="scss" scoped>
.select-state-description {
    font-size: 12px;
    line-height: 16px;
    color: var(--c-gray-2);
}

.select-state-description-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 24px;

    &.mr {
        padding-right: 24px;
    }
}

.select-state-badge {
    width: 100%;
}

.select-state-badge-wrapper,
.select-state-description-wrapper {
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;
}

.select-state-delim {
    grid-column: span 2;
    height: 1px;
    background-color: var(--c-gray-3);
    border: none;
}

.select-state-check {
    position: absolute;
    top: 50%;
    right: 0;
    width: 18px;
    height: auto;
    color: var(--c-primary);
    transform: translateY(-50%);
}
</style>
