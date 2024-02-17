<script setup>
import { IconRuble } from "@/icones";
</script>

<template>
    <div class="price-help">
        <span class="price-help-title">
            Заполните эти поля, если стоимость аренды меняется от какого-то срока
        </span>
        <span> Например: </span>
        <span> 1 сутки = 1000 <IconRuble class="price-help-icon" /> </span>
        <span> 1 сутки от 7 суток = 500 <IconRuble class="price-help-icon" /> </span>
    </div>
</template>

<style lang="scss" scoped>
.price-help {
    display: flex;
    flex-direction: column;

    .price-help-title {
        display: inline-block;
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 20px;
    }

    .price-help-icon {
        width: 7px !important;
        position: relative;
        top: 1.8px;
        color: var(--c-text);
    }

    span {
        font-size: 11px;
        line-height: 16px;
    }
}
</style>
