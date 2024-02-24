<script setup>
import { nextTick } from "vue";

import { BaseSelectMenu } from "@/components";
import { useInventoryStatesStore } from "@/stores";

import { statesDescription } from "./model/statesDescription.js";
import SelectInventoryStateItem from "./SelectInventoryStateItem.vue";

defineProps({
    isError: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(["update:modelValue", "opened", "fetched", "selected"]);

const inventoryStatesStore = useInventoryStatesStore();

const reload = async function () {
    if (inventoryStatesStore.hasUnloadedOptions) {
        await inventoryStatesStore.fetchMany({ perPage: 999, page: 1, search: "" });

        await nextTick();
        emit("fetched");
    }
};

const handleClick = function (e, close) {
    emit("update:modelValue", e);
    emit("selected");
    close();
};
</script>

<template>
    <BaseSelectMenu
        modal-title="Статус инвентаря"
        :is-error="isError"
        :value="modelValue?.title"
        @open="reload"
        @opened="emit('opened')"
    >
        <template #label> Статус * </template>
        <template #modal-content="{ closeModal }">
            <div class="select-state-content">
                <template v-if="!inventoryStatesStore.isManyLoading">
                    <SelectInventoryStateItem
                        v-for="(state, index) in inventoryStatesStore.listData"
                        :key="state.id"
                        :state="state"
                        :description="
                            statesDescription[state.stateConst] ?? statesDescription['default']
                        "
                        :has-border="index !== inventoryStatesStore.listData.length - 1"
                        :is-active="state.id === modelValue?.id"
                        @click="handleClick(state, closeModal)"
                    />
                </template>
                <template v-else>
                    <SelectInventoryStateItem
                        v-for="index in 4"
                        :key="index"
                        :state="{}"
                        :has-border="index !== 4"
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
.select-state-content {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 12px;
    align-items: center;
}
</style>
