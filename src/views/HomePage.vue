<script setup>
import { RouterLink } from "vue-router";
import { IconSettings, IconInventory, IconPrice, IconCategory, IconChevron } from "@/icones";
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
    align-items: center;
    height: 100%;
    gap: 4px;
}

.link,
.chevron,
.icon {
    transition: color 0.4s;
}

.link {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    color: var(--c-text);
    font-size: 18px;
    gap: 10px;
    padding: 8px 0;

    &:hover,
    &:hover * {
        color: var(--c-primary);
    }
}

.chevron {
    margin-left: auto;
    color: var(--c-gray-1);
}

.icon-wrapper {
    width: 20px;
    display: flex;
    align-items: center;
}
</style>
