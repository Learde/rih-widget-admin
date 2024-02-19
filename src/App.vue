<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

// import { setToken } from "@/api";
import { TheHeader } from "@/components";

const route = useRoute();

const hasHeader = computed(() => {
    return Boolean(route.meta?.title);
});

// setToken("oFydZpjyTYlzTK8M8ZVDDENlCNLCxxy7");
</script>

<template>
    <TheHeader
        v-if="hasHeader"
        :title="route.meta.title"
        :add-route-name="route.meta?.addRouteName"
        :has-ready-button="route.meta?.hasReadyButton"
        :back-route-name="route.meta?.backRouteName"
    />
    <RouterView />
</template>
