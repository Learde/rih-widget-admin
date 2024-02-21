<script setup>
import { BaseButton } from "@/components";

defineProps({
    step: {
        type: Number,
        required: true,
    },
    steps: {
        type: Number,
        default: 3,
    },
});
defineEmits(["next"]);
</script>

<template>
    <div class="onboarding-step">
        <h2><slot name="title" /></h2>
        <p><slot name="description" /></p>
        <div class="steps">
            <div class="step" :class="{ active: step === i }" v-for="i in steps" :key="i" />
        </div>
        <BaseButton @click="$emit('next')"><slot name="button-text" /></BaseButton>
    </div>
</template>

<style lang="scss" scoped>
.onboarding-step {
    display: flex;
    flex-direction: column;
    height: 100%;

    & h2 {
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
    }

    & p {
        display: inline-block;
        margin-bottom: 20px;
        font-size: 12px;
        line-height: 19px;
        color: var(--c-gray-2);
    }

    & .steps {
        display: flex;
        gap: 5px;
        align-self: center;
        margin-top: auto;
        margin-bottom: 12px;
    }

    & .step {
        width: 8px;
        height: 8px;
        background-color: #cfd7e2;
        border-radius: 50%;

        &.active {
            background-color: #9da6b3;
        }
    }

    &:deep(.onboarding-highlight) {
        font-weight: 600;
        color: #da7815;
    }
}
</style>
