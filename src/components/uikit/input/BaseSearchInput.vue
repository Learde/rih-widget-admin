<script setup>
import { IconSearch } from "@/icones";
</script>

<template>
    <div class="wrapper">
        <IconSearch class="icon" />
        <input class="input" placeholder="Поиск" />
    </div>
</template>

<style lang="scss" scoped>
.input {
    width: 100%;
    height: 36px;
    padding-left: 32px;
    font-size: 15px;
    font-weight: 500;
    color: var(--c-gray-5);
    background-color: var(--c-gray-6);
    border: none;
    border-radius: 10px;
    outline: none;

    &::placeholder {
        font-weight: 500;
        opacity: 1;
    }
}

.icon {
    position: absolute;
    top: 50%;
    left: 11px;
    width: 12px;
    height: auto;
    color: var(--c-gray-5);
    transform: translateY(-50%);
}

.wrapper {
    position: relative;
}
</style>
