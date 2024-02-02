<script setup>
import { IconPicture } from "@/icones";
</script>

<template>
    <div class="image-select">
        <IconPicture class="icon" />
        <label class="label">Добавить изображение</label>
    </div>
</template>

<style lang="scss" scoped>
.image-select {
    display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;
}

.icon {
    width: 24px;
    height: 24px;
    color: var(--c-primary);
}

.label {
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
}
</style>
