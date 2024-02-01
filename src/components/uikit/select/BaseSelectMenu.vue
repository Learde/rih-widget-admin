<script setup>
import { IconChevron } from "@/icones";
</script>

<template>
    <div class="select-menu">
        <div class="content">
            <span class="label"><slot name="label" /></span>
            <span class="additional"><slot name="additional" /></span>
        </div>
        <IconChevron class="chevron" />
    </div>
</template>

<style lang="scss" scoped>
.chevron {
    position: relative;
    top: 2px;
    width: auto;
    height: 16px;
    color: var(--c-gray-1);
    transition: color 0.4s;
}

.select-menu {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
        .chevron {
            color: var(--c-primary);
        }
    }
}

.label {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 20px;
}

.additional {
    font-size: 12px;
    line-height: 16px;
    color: var(--c-gray-2);
}

.content {
    display: flex;
    flex-direction: column;
}
</style>
