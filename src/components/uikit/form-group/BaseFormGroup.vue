<script setup></script>

<template>
    <div>
        <label class="label"><slot name="label" /></label>
        <div class="content">
            <slot name="content" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.label {
    display: inline-block;
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 20px;
}
</style>
