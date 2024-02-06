<script setup>
import { IconChevron } from "@/icones";
import { TheHeader } from "@/components";
import { ref } from "vue";

defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
    modalTitle: {
        type: String,
        default: "",
    },
});
const emit = defineEmits(["open", "close"]);

const shouldShowModal = ref(false);

const showModal = function () {
    shouldShowModal.value = true;
    document.body.style.overflow = "hidden";
    emit("open");
};

const closeModal = function () {
    shouldShowModal.value = false;
    document.body.style.overflow = "unset";
    emit("close");
};
</script>

<template>
    <div class="select-menu-wrapper" :class="{ error: isError }" @click="showModal">
        <div class="select-menu">
            <div class="content">
                <span class="label"><slot name="label" /></span>
                <span class="additional"><slot name="additional" /></span>
            </div>
            <IconChevron class="chevron" />
        </div>
        <span class="error-text" v-if="isError">
            <slot name="error-text"></slot>
        </span>
    </div>
    <div class="select-menu-modal" v-if="shouldShowModal">
        <div class="app">
            <TheHeader :title="modalTitle" :back-handler="closeModal" />
            <slot name="modal-content"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select-menu-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    cursor: pointer;

    &.error::before {
        position: absolute;
        inset: -10px -15px;
        z-index: -1;
        display: block;
        content: "";
        background-color: var(--c-red-2);
        border: 1px solid var(--c-red);

        @media (width <= 450px) {
            top: -10px;
            right: unset;
            bottom: unset;
            left: calc(-1 * (100vw - 100%) / 2);
            width: 100vw;
            height: calc(100% + 20px);
        }
    }
}

.error-text {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: var(--c-red);
}

.chevron {
    position: relative;
    top: 2px;
    width: auto;
    height: 16px;
    color: var(--c-gray-1);
    transition: color 0.4s;
}

.select-menu {
    display: flex;
    justify-content: space-between;

    &:hover {
        .chevron {
            color: var(--c-primary);
        }
    }
}

.label {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 20px;
}

.additional {
    font-size: 12px;
    line-height: 16px;
    color: var(--c-gray-2);
}

.content {
    display: flex;
    flex-direction: column;
}

.select-menu-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    overflow: auto;
    background-color: #fff;
}
</style>
