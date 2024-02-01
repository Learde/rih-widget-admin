<script setup></script>

<template>
    <label class="wrapper">
        <input class="input" />
        <span class="label"><slot name="label" /></span>
    </label>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
}

.label {
    font-size: 12px;
    line-height: 16px;
    color: var(--c-gray-2);
}

.input {
    width: 50px;
    height: 45px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;
}
</style>
