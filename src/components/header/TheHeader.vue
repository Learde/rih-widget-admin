<script setup>
import { useRouter } from "vue-router";

import { IconChevron, IconPlus } from "@/icones";
import { useEventBus } from "@/stores";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    addRouteName: {
        type: String,
        default: null,
    },
    addRouteQuery: {
        type: Object,
        default: null,
    },
    backHandler: {
        type: Function,
        default: null,
    },
    leaveHandler: {
        type: Function,
        default: null,
    },
    backRouteName: {
        type: String,
        default: null,
    },
    hasReadyButton: {
        type: Boolean,
        default: false,
    },
});

const router = useRouter();
const eventBus = useEventBus();

const handleBack = function () {
    if (props.backHandler) {
        return props.backHandler();
    }

    if (props.leaveHandler) {
        return props.leaveHandler();
    }

    if (props.backRouteName) {
        return router.push({ name: props.backRouteName });
    }

    router.go(-1);
};

const handleAdd = function () {
    if (props.leaveHandler) {
        props.leaveHandler();
    }

    router.push({ name: props.addRouteName, query: props.addRouteQuery });
};

const handleReady = function () {
    eventBus.emit("ready");
};
</script>

<template>
    <div class="header">
        <IconChevron class="chevron back-btn" @click="handleBack" />
        <h2 class="title">
            {{ title }}
        </h2>
        <IconPlus v-if="Boolean(addRouteName)" class="plus add-entity" @click="handleAdd" />
        <span v-if="hasReadyButton" class="ready-button" @click="handleReady"> Готово </span>
    </div>
</template>

<style lang="scss" scoped>
.chevron {
    position: absolute;
    top: 50%;
    left: -20px;
    box-sizing: content-box;
    width: auto;
    height: 20px;
    padding: 20px;
    color: var(--c-primary);
    cursor: pointer;
    transform: rotate(180deg) translateY(50%);
}

.plus {
    position: absolute;
    top: 50%;
    right: -20px;
    box-sizing: content-box;
    width: auto;
    height: 20px;
    padding: 20px;
    color: var(--c-primary);
    cursor: pointer;
    transform: translateY(-50%);
}

.title {
    font-size: 20px;
    font-weight: 500;
}

.header {
    position: relative;
    display: flex;
    justify-content: center;
    height: var(--app-header-height);
    margin-bottom: var(--app-header-mb);
}

.ready-button {
    position: absolute;
    top: 50%;
    right: -15px;
    display: inline-block;
    padding: 15px;
    font-size: 17px;
    line-height: 22px;
    color: var(--c-primary);
    cursor: pointer;
    transform: translateY(-50%);
}
</style>
