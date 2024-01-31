<script setup>
import BaseCheckbox from "./BaseCheckbox.vue";
</script>

<template>
    <BaseCheckbox>
        <div class="checkbox-content">
            <span class="label"><slot name="label" /></span>
            <span class="additional"><slot name="additional" /></span>
        </div>
    </BaseCheckbox>
</template>

<style lang="scss" scoped>
.checkbox-content {
    display: inline-flex;
    flex-direction: column;
}

.label {
    font-size: 15px;
    line-height: 20px;
}

.additional {
    font-size: 12px;
    line-height: 16px;
    color: var(--c-gray-2);
}
</style>
