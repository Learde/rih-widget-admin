<script setup>
import { BaseSearchInput } from "@/components";
</script>

<template>
    <div class="inventories-page">
        <BaseSearchInput class="search-input" />
    </div>
</template>

<style lang="scss" scoped>
.inventories-page {
    display: flex;
    flex-direction: column;
}

.search-input {
    width: 100%;
}
</style>
