<script setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    shouldEmitCloseAfterAccept: { type: Boolean, default: true },
});
const emit = defineEmits(["update:modelValue", "accept", "close"]);

const modelValue = useVModel(props, "modelValue", emit);

const close = function (shouldEmit = true) {
    modelValue.value = false;

    if (shouldEmit) {
        emit("close");
    }
};

const accept = function () {
    emit("accept");
    close(props.shouldEmitCloseAfterAccept);
};
</script>

<template>
    <div class="wrapper" v-if="modelValue" @click="close">
        <div class="content" @click.stop="">
            <h3 class="title"><slot name="title" /></h3>
            <p class="description"><slot name="description" /></p>
            <div class="actions">
                <button class="button cancel" @click="close">
                    <slot name="cancel"> Отмена </slot>
                </button>
                <button class="button delete" @click="accept">
                    <slot name="accept"> Удалить </slot>
                </button>
            </div>
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
    width: 272px;
    padding: 19px 16px 0;
    overflow: hidden;
    text-align: center;
    background: #fff;
    border-radius: 18px;
}

.title {
    display: inline-block;
    margin-bottom: 16px;
    font-size: 17px;
    font-weight: 500;
    line-height: 16px;
}

.description {
    display: inline-block;
    margin-bottom: 25px;
    font-size: 13px;
    line-height: 16px;
}

button {
    width: 100%;
    height: 44px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    border: none;
}

.actions {
    display: flex;
    margin: 0 -16px;
    border-top: 0.5px solid rgba(0 0 0 / 12%);
}

.cancel {
    font-weight: 600;
    color: var(--c-primary);
    border-right: 0.5px solid rgba(0 0 0 / 12%);
}

.delete {
    color: var(--c-red);
}
</style>
