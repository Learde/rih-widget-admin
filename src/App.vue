<script setup>
import { RouterView, useRoute } from "vue-router";
import { TheHeader } from "@/components";
import { computed } from "vue";

const route = useRoute();

const hasHeader = computed(() => {
    return Boolean(route.meta?.title);
});
</script>

<template>
    <TheHeader v-if="hasHeader" :title="route.meta.title" />
    <RouterView />
</template>
