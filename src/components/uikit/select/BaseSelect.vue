<script setup>
import { useVModel } from "@vueuse/core";

import { IconChevron } from "@/icones";

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
    label: {
        type: String,
        default: "title",
    },
    modelValue: {
        type: null,
        default: null,
    },
    reduce: {
        type: Function,
        default: Number,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);

const handleChange = (event) => {
    const selectedValue = props.reduce(event.target.value);

    emit("update:modelValue", selectedValue);
    emit("select", selectedValue);
};
</script>

<template>
    <div class="base-select-wrapper">
        <select :value="value" :disabled="disabled" class="base-select" @change="handleChange">
            <option
                v-for="(option, index) in options"
                :key="option.id ?? option.key ?? index"
                :value="option.id ?? option.value"
            >
                {{ option?.[label] ?? option }}
            </option>
        </select>
        <IconChevron class="select-icon" />
    </div>
</template>

<style lang="scss" scoped>
.base-select-wrapper {
    position: relative;
}

.select-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    height: 14px;
    color: var(--c-gray-7);
    transform: translateY(-50%) rotate(90deg);
}

.base-select {
    width: 100%;
    height: 45px;
    padding-right: 43px;
    padding-left: 12px;
    font-size: 15px;
    font-weight: 400;
    color: var(--c-text);
    appearance: none;
    caret-color: var(--c-primary);
    background-color: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;
}
</style>
