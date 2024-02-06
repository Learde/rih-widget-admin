<script setup>
import { BaseSelectMenu } from "@/components";
import SelectInventoryStateItem from "./SelectInventoryStateItem.vue";
import { statesDescription } from "./model/statesDescription.js";
import { useInventoryStatesStore } from "@/stores";

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
defineEmits(["update:modelValue"]);

const inventoryStatesStore = useInventoryStatesStore();

const reload = function () {
    if (inventoryStatesStore.hasUnloadedOptions) {
        inventoryStatesStore.fetchMany({ perPage: 999, page: 1, search: "" });
    }
};
</script>

<template>
    <BaseSelectMenu modal-title="Статус инвентаря" :is-error="isError" @open="reload">
        <template #label> Статус * </template>
        <template #modal-content>
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
                        @click="$emit('update:modelValue', state)"
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
