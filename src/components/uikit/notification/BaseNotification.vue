<script setup>
import { useVModel } from "@vueuse/core";
import { ref, watchEffect } from "vue";

import { IconAlert } from "@/icones";

const props = defineProps({
    duration: {
        type: Number,
        default: 4000,
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);

const isShown = useVModel(props, "modelValue", emit);
const isOutro = ref(false);

watchEffect(() => {
    if (isShown.value) {
        setTimeout(() => {
            isOutro.value = true;
            setTimeout(() => {
                isOutro.value = false;
                isShown.value = false;
            }, 340);
        }, props.duration);
    }
});
</script>

<template>
    <Teleport to="body">
        <div class="notification" :class="{ outro: isOutro }" v-if="isShown">
            <div class="notification-content">
                <IconAlert class="notification-icon" />
                <span class="notification-text">
                    <slot> Заполните все обязательные поля </slot>
                </span>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.notification {
    position: fixed;
    right: 0;
    bottom: var(--app-padding-x);
    left: 0;
    animation: animation-intro-vertical 0.34s;

    &.outro {
        animation: animation-outro-vertical 0.34s;
    }

    .notification-content {
        display: flex;
        gap: 12px;
        align-items: center;
        max-width: calc(1280px - var(--app-padding-x) * 2);
        padding: 12px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow:
            0 0 8px rgb(0 0 0 / 12%),
            0 16px 16px rgb(0 0 0 / 16%);
    }

    .notification-icon {
        width: 28px;
        height: auto;
        color: var(--c-red);
    }

    .notification-text {
        font-size: 15px;
        line-height: 20px;
    }
}

@keyframes animation-intro-vertical {
    0% {
        transform: translateY(125%);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes animation-outro-vertical {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(125%);
    }
}
</style>
