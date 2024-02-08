<script setup>
import { computed } from "vue";

import { IconSpinner, IconDone } from "@/icones";

const props = defineProps({
    state: { type: String, default: "pending" },
});

const shouldShow = computed(() => {
    return props.state !== "pending";
});
</script>

<template>
    <div class="wrapper" v-if="shouldShow">
        <div class="content">
            <IconSpinner class="icon" v-if="state === 'loading'" />
            <IconDone class="check" v-else-if="state === 'success'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(66 66 66 / 70%);
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    overflow: hidden;
    background: #fff;
    border-radius: 18px;
}

.title {
    display: inline-block;
    margin-bottom: 7px;
    font-size: 17px;
    font-weight: 600;
    line-height: 16px;
}

.description {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 13px;
    line-height: 16px;
}

.check {
    color: var(--c-gray-5);

    &:deep(path) {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: spin-done 0.6s 0.3s ease forwards;
    }
}

.icon {
    color: var(--c-gray-5);
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin-done {
    from {
        stroke-dashoffset: 50;
    }

    to {
        stroke-dashoffset: 0;
    }
}
</style>
