<script setup>
defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div>
        <label class="label"><slot name="label" /></label>
        <div class="content">
            <slot name="content" />
        </div>
        <span class="error-text" v-if="isError">
            <slot name="error-text" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.label {
    display: inline-block;
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 20px;
}

.error-text {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: var(--c-red);
}
</style>
