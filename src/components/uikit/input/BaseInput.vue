<script setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: null,
    },
    placeholder: {
        type: String,
        default: "",
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
    <div class="wrapper">
        <input
            class="input"
            :class="{ error: isError }"
            :placeholder="placeholder"
            v-model="modelValue"
            @input="$emit('input', $event)"
        />
    </div>
</template>

<style lang="scss" scoped>
.input {
    width: 100%;
    height: 45px;
    padding-left: 12px;
    font-size: 15px;
    font-weight: 400;
    color: var(--c-text);
    caret-color: var(--c-primary);
    background-color: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;

    &.error {
        background-color: var(--c-red-2);
        border-color: var(--c-red);
    }

    &::placeholder {
        color: var(--c-gray-5);
        opacity: 1;
    }
}

.icon {
    position: absolute;
    top: 50%;
    left: 11px;
    width: 12px;
    height: auto;
    color: var(--c-gray-5);
    transform: translateY(-50%);
}

.wrapper {
    position: relative;
}
</style>
