<script setup>
import { ref, nextTick } from "vue";

import { TheHeader, BaseFormGroup } from "@/components";
import { IconChevron } from "@/icones";

defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
    modalTitle: {
        type: String,
        default: "",
    },
    addRouteName: {
        type: String,
        default: null,
    },
    backRouteName: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: "Не выбран",
    },
    value: {
        type: [String, Number],
        default: null,
    },
});
const emit = defineEmits(["open", "opened", "close"]);

const shouldShowModal = ref(false);

const showModal = async function () {
    shouldShowModal.value = true;
    document.body.style.overflow = "hidden";
    emit("open");

    setTimeout(() => {
        emit("opened");
    }, 340);
};

const closeModal = function () {
    shouldShowModal.value = false;
    document.body.style.overflow = "unset";
    emit("close");
};
</script>

<template>
    <BaseFormGroup :is-error="isError" v-bind="$attrs">
        <template #label>
            <slot name="label"></slot>
        </template>
        <template #content>
            <div class="select-menu-input" :class="{ error: isError }" @click="showModal">
                <span v-if="!value" class="select-menu-input-placeholder">{{ placeholder }}</span>
                <span v-else class="select-menu-input-value">{{ value }}</span>
                <IconChevron class="select-icon" />
            </div>
        </template>
        <template #error-text>
            <slot name="error-text"></slot>
        </template>
    </BaseFormGroup>
    <Transition name="slide">
        <div class="select-menu-modal" v-if="shouldShowModal">
            <div class="app">
                <TheHeader
                    :title="modalTitle"
                    :leave-handler="closeModal"
                    :back-route-name="backRouteName"
                    :add-route-query="backRouteName ? { backRouteName: backRouteName } : null"
                    :add-route-name="addRouteName"
                />
                <slot name="modal-content" :close-modal="closeModal"></slot>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.select-menu-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    overflow: auto;
    background-color: #fff;
}

.select-menu-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    padding-right: 43px;
    padding-left: 12px;
    font-size: 15px;
    font-weight: 400;
    color: var(--c-text);
    appearance: none;
    cursor: pointer;
    caret-color: var(--c-primary);
    background-color: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;

    &.error {
        background-color: var(--c-red-2);
        border-color: var(--c-red);
    }

    & .select-menu-input-placeholder {
        color: var(--c-gray-5);
    }

    & .select-icon {
        position: absolute;
        top: 50%;
        right: 15px;
        height: 14px;
        color: var(--c-gray-7);
        transform: translateY(-50%) rotate(90deg);
    }
}

.slide-enter-active {
    transition: all 0.34s ease-in;
}

.slide-leave-active {
    transition: all 0.34s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(100%);
}
</style>
