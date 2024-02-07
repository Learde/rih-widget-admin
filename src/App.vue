<script setup>
import { RouterView, useRoute } from "vue-router";
import { TheHeader } from "@/components";
import { computed } from "vue";
import { setToken } from "@/api";

const route = useRoute();

const hasHeader = computed(() => {
    return Boolean(route.meta?.title);
});

setToken("oFydZpjyTYlzTK8M8ZVDDENlCNLCxxy7");
</script>

<template>
    <TheHeader
        v-if="hasHeader"
        :title="route.meta.title"
        :add-route-name="route.meta?.addRouteName"
        :has-ready-button="route.meta?.hasReadyButton"
    />
    <RouterView />
</template>
