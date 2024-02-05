<script setup>
import { IconSearch } from "@/icones";
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
});
const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);
</script>

<template>
    <div class="wrapper">
        <IconSearch class="icon" />
        <input v-model="value" class="input" placeholder="Поиск" />
    </div>
</template>

<style lang="scss" scoped>
.input {
    width: 100%;
    height: 45px;
    padding-left: 32px;
    font-size: 15px;
    font-weight: 400;
    color: var(--c-text);
    caret-color: var(--c-primary);
    background-color: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;

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
