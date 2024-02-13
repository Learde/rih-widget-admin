<script setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: null,
        required: true,
    },
    isError: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue", "input"]);

const modelValue = useVModel(props, "modelValue", emit);
</script>

<template>
    <label class="square-input" :class="{ error: isError }">
        <input class="input" type="number" v-model="modelValue" @input="$emit('input', $event)" />
        <span class="label"><slot name="label" /></span>
    </label>
</template>

<style lang="scss" scoped>
.square-input {
    display: flex;
    gap: 8px;
    align-items: center;

    .label {
        font-size: 12px;
        line-height: 16px;
        color: var(--c-gray-2);
    }

    .input {
        width: 50px;
        height: 45px;
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        appearance: textfield;
        background: var(--c-gray-4);
        border: 1px solid rgb(0 0 0 / 12%);
        border-radius: 10px;
        outline: none;
    }

    &.error {
        & .input {
            background-color: var(--c-red-2);
            border-color: var(--c-red);
        }
    }
}
</style>
