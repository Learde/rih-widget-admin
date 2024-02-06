<script setup>
import { IconChevron, IconPlus } from "@/icones";
import { useRouter } from "vue-router";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    addRouteName: {
        type: String,
        default: null,
    },
    backHandler: {
        type: Function,
        default: null,
    },
});

const router = useRouter();

const handleBack = function () {
    if (props.backHandler) {
        return props.backHandler();
    }

    router.go(-1);
};
</script>

<template>
    <div class="header">
        <IconChevron class="chevron" @click="handleBack" />
        <h2 class="title">
            {{ title }}
        </h2>
        <IconPlus
            v-if="Boolean(addRouteName)"
            class="plus"
            @click="router.push({ name: addRouteName })"
        />
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
    margin-bottom: 55px;
}
</style>
