<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useVModels } from "@vueuse/core";

import { BaseSquareInput, BaseFormGroup, BaseInput } from "@/components";
import { IconHelp, IconDelete } from "@/icones";

const props = defineProps({
    days: {
        type: Number,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
    },
    minutes: {
        type: Number,
        required: true,
    },
    moreThenDays: {
        type: Number,
        required: true,
    },
    moreThenHours: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const emit = defineEmits([
    "update:days",
    "update:hours",
    "update:minutes",
    "update:moreThenDays",
    "update:moreThenHours",
    "update:price",
    "delete",
]);

const { days, hours, minutes, moreThenDays, moreThenHours, price } = useVModels(props, emit);

const rules = {
    days: { required },
    hours: { required },
    minutes: { required },
    price: { required },
};

const v$ = useVuelidate(rules, { days, hours, minutes, price });
</script>

<template>
    <div class="price-value">
        <div class="input-period">
            <BaseSquareInput min="0" v-model="days">
                <template #label> Дней * </template>
            </BaseSquareInput>
            <BaseSquareInput min="0" v-model="hours">
                <template #label> Часов * </template>
            </BaseSquareInput>
            <BaseSquareInput min="0" v-model="minutes">
                <template #label> Минут * </template>
            </BaseSquareInput>
        </div>
        <div class="more-then">
            <div class="more-then-title">
                <span class="more-then-text">Расценка активна, начиная с </span>
                <IconHelp class="more-then-icon" />
            </div>
            <div class="more-then-period">
                <BaseSquareInput min="0" v-model="moreThenDays">
                    <template #label> Дней </template>
                </BaseSquareInput>
                <BaseSquareInput min="0" v-model="moreThenHours">
                    <template #label> Часов </template>
                </BaseSquareInput>
            </div>
        </div>
        <div class="input-price">
            <BaseFormGroup>
                <template #label> Цена * </template>
                <template #content>
                    <div class="input-price-wrapper">
                        <BaseInput
                            class="input-price-input"
                            placeholder="Введите цену"
                            v-model="price"
                        />
                        <IconDelete class="price-value-delete" @click="$emit('delete')" />
                    </div>
                </template>
            </BaseFormGroup>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.price-value {
    & .input-period {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        padding: 12px 0;
    }

    & .more-then {
        padding: 12px 0;
    }

    & .more-then-period {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
    }

    & .more-then-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    & .more-then-text {
        font-size: 15px;
        line-height: 20px;
    }

    & .more-then-icon {
        color: var(--c-gray-2);
    }

    & .input-price {
        padding: 12px 0;
    }

    & .input-price-wrapper {
        display: flex;
        align-items: center;
        width: 100%;

        & > .input-price-input {
            width: 100%;
        }
    }

    & .price-value-delete {
        box-sizing: content-box;
        width: auto;
        height: 20px;
        padding: 12.5px 0 12.5px 20px;
        color: var(--c-red);
        cursor: pointer;
    }
}
</style>
