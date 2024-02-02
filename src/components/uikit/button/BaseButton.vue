<script setup></script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
    padding: 12.5px 0;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    cursor: pointer;
    background-color: var(--c-primary);
    border: none;
    border-radius: 10px;
}
</style>
