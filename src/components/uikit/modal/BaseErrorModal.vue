<script setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);

const shouldShown = useVModel(props, "modelValue", emit);
</script>

<template>
    <div class="base-error-modal" v-if="shouldShown">
        <div class="modal-wrapper">
            <div class="header">:(</div>
            <div class="content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.base-error-modal {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(66 66 66 / 70%);

    .header {
        margin-bottom: 18px;
        font-size: 38px;
    }

    .modal-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        padding: 12px;
        overflow: hidden;
        background: #fff;
        border-radius: 18px;
    }

    .content {
        display: flex;
        flex-direction: column;
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
}
</style>
