<script setup>
import { nextTick } from "vue";

import { BaseSelectMenu } from "@/components";
import { IconLocation } from "@/icones";
import { usePointsStore } from "@/stores";

import SelectPointItem from "./SelectPointItem.vue";

defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Object,
        default: null,
    },
    backRouteName: {
        type: String,
        default: "AddInventory",
    },
});
const emit = defineEmits(["update:modelValue", "fetched"]);

const pointsStore = usePointsStore();

const reload = async function () {
    if (pointsStore.hasUnloadedOptions) {
        await pointsStore.fetchMany({ perPage: 999, page: 1, search: "" });

        await nextTick();
        emit("fetched");
    }
};

const handleClick = function (e, close) {
    emit("update:modelValue", e);
    close();
};
</script>

<template>
    <BaseSelectMenu
        modal-title="Пункты проката"
        :is-error="isError"
        :value="modelValue?.title"
        add-route-name="AddPoint"
        :back-route-name="backRouteName"
        @open="reload"
    >
        <template #label> Пункт проката </template>
        <template #modal-content="{ closeModal }">
            <div class="select-point-content">
                <template v-if="!pointsStore.isManyLoading && pointsStore.listData.length > 0">
                    <SelectPointItem
                        v-for="(point, index) in pointsStore.listData"
                        :key="point.id"
                        :point="point"
                        :has-border="index !== pointsStore.listData.length - 1"
                        :is-active="point.id === modelValue?.id"
                        @click="handleClick($event, closeModal)"
                    />
                </template>
                <template
                    v-else-if="!pointsStore.isManyLoading && pointsStore.listData.length === 0"
                >
                    <div class="no-points">
                        <IconLocation class="no-points-icon" />
                        <span class="no-points-text"> Нет добавленных точек проката </span>
                        <RouterLink
                            class="add-point"
                            :to="{
                                name: 'AddPoint',
                                query: { backRouteName: 'AddInventory' },
                            }"
                        >
                            Добавить точку проката
                        </RouterLink>
                    </div>
                </template>
                <template v-else>
                    <SelectPointItem
                        v-for="index in 8"
                        :key="index"
                        :point="{}"
                        :has-border="index !== 8"
                        is-loading
                    />
                </template>
            </div>
        </template>
        <template #error-text>
            <slot name="error-text"></slot>
        </template>
    </BaseSelectMenu>
</template>

<style lang="scss" scoped>
.select-point-content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;
    align-items: center;

    &:deep(hr:last-child) {
        display: none;
    }

    .no-points {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 130px;

        &.mt-small {
            margin-top: 50px;
        }
    }

    .no-points-icon {
        width: 45px;
        height: auto;
        margin-bottom: 12px;
        color: var(--c-gray-7);
    }

    .no-points-text {
        display: inline-block;
        width: 250px;
        margin-bottom: 24px;
        font-size: 18px;
        line-height: 24px;
        color: var(--c-gray-7);
        text-align: center;
    }

    .add-point {
        font-size: 15px;
        line-height: 20px;
        color: var(--c-primary);
    }
}
</style>
