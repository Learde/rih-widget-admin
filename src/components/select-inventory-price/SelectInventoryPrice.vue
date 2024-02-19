<script setup>
import { BaseSelectMenu } from "@/components";
import { IconPrice } from "@/icones";
import { useInventoryPricesStore } from "@/stores";

import SelectInventoryPriceItem from "./SelectInventoryPriceItem.vue";

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

const inventoryPricesStore = useInventoryPricesStore();

const reload = function () {
    if (inventoryPricesStore.hasUnloadedOptions) {
        inventoryPricesStore.fetchMany({ perPage: 999, page: 1, search: "" });
    }
};
</script>

<template>
    <BaseSelectMenu
        modal-title="Тарифы"
        :is-error="isError"
        :value="modelValue?.title"
        @open="reload"
    >
        <template #label> Тариф * </template>
        <template #modal-content>
            <div class="select-inventory-price-content">
                <template
                    v-if="
                        !inventoryPricesStore.isManyLoading &&
                        inventoryPricesStore.listData.length > 0
                    "
                >
                    <SelectInventoryPriceItem
                        v-for="(inventoryPrice, index) in inventoryPricesStore.listData"
                        :key="inventoryPrice.id"
                        :inventory-price="inventoryPrice"
                        :has-border="index !== inventoryPricesStore.listData.length - 1"
                        :is-active="inventoryPrice.id === modelValue?.id"
                        @click="$emit('update:modelValue', $event)"
                    />
                </template>
                <template
                    v-else-if="
                        !inventoryPricesStore.isManyLoading &&
                        inventoryPricesStore.listData.length === 0
                    "
                >
                    <div class="no-inventory-prices">
                        <IconPrice class="no-inventory-prices-icon" />
                        <span class="no-inventory-prices-text"> Нет добавленных тарифов </span>
                        <RouterLink
                            class="add-inventory-price"
                            :to="{
                                name: 'AddInventoryPrice',
                                query: { backRouteName: 'AddInventory' },
                            }"
                        >
                            Добавить тариф
                        </RouterLink>
                    </div>
                </template>
                <template v-else>
                    <SelectInventoryPriceItem
                        v-for="index in 8"
                        :key="index"
                        :inventory-price="{}"
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
.select-inventory-price-content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;
    align-items: center;

    &:deep(hr:last-child) {
        display: none;
    }

    .no-inventory-prices {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 130px;

        &.mt-small {
            margin-top: 50px;
        }
    }

    .no-inventory-prices-icon {
        width: 45px;
        height: auto;
        margin-bottom: 12px;
        color: var(--c-gray-7);
    }

    .no-inventory-prices-text {
        display: inline-block;
        width: 250px;
        margin-bottom: 24px;
        font-size: 18px;
        line-height: 24px;
        color: var(--c-gray-7);
        text-align: center;
    }

    .add-inventory-price {
        font-size: 15px;
        line-height: 20px;
        color: var(--c-primary);
    }
}
</style>
