<script setup>
import bridge from "@vkontakte/vk-bridge";
import { computed, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";

import { TheHeader } from "@/components";
import { useUserStore } from "@/stores";

const route = useRoute();
const userStore = useUserStore();

const hasHeader = computed(() => {
    return Boolean(route.meta?.title);
});

onMounted(() => {
    bridge.send("VKWebAppInit");
});
</script>

<template>
    <div :class="{ app: userStore.isAuthenticated }">
        <TheHeader
            v-if="hasHeader"
            :title="route.meta.title"
            :add-route-name="route.meta?.addRouteName"
            :has-ready-button="route.meta?.hasReadyButton"
            :back-route-name="route.meta?.backRouteName"
        />
        <RouterView />
    </div>
</template>
