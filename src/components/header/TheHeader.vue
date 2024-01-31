<script setup>
import { IconChevron } from "@/icones";
import { useRouter } from "vue-router";

defineProps({
    title: {
        type: String,
        default: "",
    },
});

const router = useRouter();
</script>

<template>
    <div class="header">
        <IconChevron class="chevron" @click="router.go(-1)" />
        <h2 class="title">
            {{ title }}
        </h2>
    </div>
</template>

<style lang="scss" scoped>
.chevron {
    position: absolute;
    top: 50%;
    left: 0;
    width: auto;
    height: 20px;
    color: var(--c-primary);
    cursor: pointer;
    transform: rotate(180deg) translateY(50%);
}

.title {
    font-size: 20px;
    font-weight: 500;
}

.header {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
}
</style>
