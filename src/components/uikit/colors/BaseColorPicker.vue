<script setup>
import "vue3-colorpicker/style.css";
import { ColorPicker } from "vue3-colorpicker";
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: String,
        default: "#ffffff",
    },
});
const emit = defineEmits(["update:modelValue"]);

const modelValue = useVModel(props, "modelValue", emit);
</script>

<template>
    <div class="wrapper">
        <label><slot name="label" /></label>
        <ColorPicker
            v-model:pure-color="modelValue"
            :is-widget="false"
            disable-alpha
            disable-history
            format="hex"
            shape="square"
        />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 15px;
    line-height: 20px;
}

:global(.vc-color-wrap) {
    width: 100% !important;
    height: 32px !important;
    border: 1px solid var(--c-gray-3) !important;
    border-radius: 10px;
    box-shadow: none !important;
}
</style>
