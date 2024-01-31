<script setup>
import { IconCategory, IconChevron, IconInventory, IconPrice, IconSettings } from "@/icones";

import { RouterLink } from "vue-router";
</script>

<template>
    <main class="main">
        <RouterLink class="link" :to="{ name: 'Settings' }">
            <div class="icon-wrapper"><IconSettings class="icon" /></div>
            Настройки <IconChevron class="chevron" />
        </RouterLink>
        <RouterLink class="link" :to="{ name: 'Settings' }">
            <div class="icon-wrapper"><IconInventory class="icon" /></div>
            Инвентарь <IconChevron class="chevron" />
        </RouterLink>
        <RouterLink class="link" :to="{ name: 'Settings' }">
            <div class="icon-wrapper"><IconPrice class="icon" /></div>
            Тарифы <IconChevron class="chevron" />
        </RouterLink>
        <RouterLink class="link" :to="{ name: 'Settings' }">
            <div class="icon-wrapper"><IconCategory class="icon" /></div>
            Категории <IconChevron class="chevron" />
        </RouterLink>
    </main>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    height: 100%;
}

.link,
.chevron,
.icon {
    transition: color 0.4s;
}

.link {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 10px 0;
    font-size: 16px;
    color: var(--c-text);

    &:hover,
    &:hover * {
        color: var(--c-primary);
    }
}

.chevron {
    margin-left: auto;
    font-size: 14px;
    color: var(--c-gray-1);
}

.icon-wrapper {
    position: relative;
    top: 1px;
    display: flex;
    align-items: center;
    width: 20px;
}
</style>
