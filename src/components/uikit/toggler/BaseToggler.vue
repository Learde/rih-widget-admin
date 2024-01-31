<script setup>
import { computed, onMounted } from "vue";
import { useVModel } from "@vueuse/core";

const props = defineProps({
    meta: {
        type: Object,
        required: true,
    },
    modelValue: {
        type: null,
        default: null,
    },
});
const emit = defineEmits(["update:modelValue"]);

const modelValue = useVModel(props, "modelValue", emit);

const gridColumns = computed(() => {
    return `repeat(${Object.keys(props.meta).length}, 1fr)`;
});

const getActiveMeta = () => {
    const activeMeta = Object.values(props.meta).find(({ value }) => {
        return value === modelValue.value;
    });

    return activeMeta;
};

const translateActive = computed(() => {
    const activeMeta = getActiveMeta();

    if (!activeMeta) return "";

    return `translateX(${(activeMeta.order - 1) * 100}%) translateY(-50%)`;
});
const activeWidth = computed(() => {
    return `calc(${100 / Object.keys(props.meta).length}% - 2px)`;
});

const changeActive = ({ value }) => {
    modelValue.value = value;
};

onMounted(() => {
    const activeMeta = getActiveMeta();

    if (!activeMeta) {
        modelValue.value = Object.values(props.meta)[0].value;
    }
});
</script>

<template>
    <div>
        <label class="label"><slot name="label" /></label>
        <div class="toggler" :style="{ 'grid-template-columns': gridColumns }">
            <div
                class="toggler-active"
                :style="{ width: activeWidth, transform: translateActive }"
            ></div>
            <div
                v-for="(toggle, key) in meta"
                :key="key"
                class="toggler-item"
                @click="changeActive(toggle)"
            >
                <span class="toggler-label">{{ toggle.label }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.label {
    display: inline-block;
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 20px;
}

.toggler {
    position: relative;
    display: grid;
    overflow: hidden;
    background-color: #f2f3f5;
    border-radius: 10px;
}

.toggler-item {
    position: relative;
    padding: 8px 0;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
}

.toggler-active {
    position: absolute;
    top: 50%;
    left: 2px;
    height: 87.5%;
    background-color: #fff;
    border: 0.5px solid rgb(0 0 0 / 8%);
    border-radius: 8px;
    box-shadow:
        0 3px 1px 0 rgb(0 0 0 / 4%),
        0 3px 8px 0 rgb(0 0 0 / 12%);
    transition: all 0.4s;
}
</style>
