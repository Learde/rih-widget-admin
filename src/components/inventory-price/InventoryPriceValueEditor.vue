<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useVModels } from "@vueuse/core";

import { BaseSquareInput, BaseFormGroup, BaseInput } from "@/components";
import { IconHelp, IconDelete } from "@/icones";
import { useTrans } from "@/stores";

const props = defineProps({
    period: {
        type: Object,
        required: true,
    },
    moreThen: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const emit = defineEmits(["update:period", "update:moreThen", "update:price", "delete"]);

const { period, moreThen, price } = useVModels(props, emit);
const trans = useTrans();

const rules = {
    period: {
        days: { required },
        hours: { required },
        minutes: { required },
    },
    price: { required },
};

const v$ = useVuelidate(rules, { period, price });

const getValidationObject = function (fieldNames) {
    let v = v$.value;

    fieldNames.forEach((fieldName) => {
        v = v[fieldName];
    });

    return v;
};

const isFieldValid = function (...fieldNames) {
    return !getValidationObject(fieldNames).$error;
};

const getFieldErrors = function (...fieldNames) {
    return getValidationObject(fieldNames).$errors;
};

const handleFieldInput = function (...fieldNames) {
    getValidationObject(fieldNames).$touch();
};
</script>

<template>
    <div class="price-value">
        <div class="input-period-wrapper">
            <div class="input-period">
                <BaseSquareInput
                    min="0"
                    v-model="period.days"
                    :is-error="!isFieldValid('period', 'days')"
                    @input="handleFieldInput('period', 'days')"
                >
                    <template #label> Дней * </template>
                </BaseSquareInput>
                <BaseSquareInput
                    min="0"
                    v-model="period.hours"
                    :is-error="!isFieldValid('period', 'hours')"
                    @input="handleFieldInput('period', 'hours')"
                >
                    <template #label> Часов * </template>
                </BaseSquareInput>
                <BaseSquareInput
                    min="0"
                    v-model="period.minutes"
                    :is-error="!isFieldValid('period', 'minutes')"
                    @input="handleFieldInput('period', 'minutes')"
                >
                    <template #label> Минут * </template>
                </BaseSquareInput>
            </div>
            <span class="error-text">
                {{ trans.validationMessages[getFieldErrors("period")?.at(0)?.$validator] }}
            </span>
        </div>
        <div class="more-then">
            <div class="more-then-title">
                <span class="more-then-text">Расценка активна, начиная с </span>
                <IconHelp class="more-then-icon" />
            </div>
            <div class="more-then-period">
                <BaseSquareInput min="0" v-model="moreThen.days">
                    <template #label> Дней </template>
                </BaseSquareInput>
                <BaseSquareInput min="0" v-model="moreThen.hours">
                    <template #label> Часов </template>
                </BaseSquareInput>
            </div>
        </div>
        <div class="input-price">
            <BaseFormGroup :is-error="!isFieldValid('price')">
                <template #label> Цена * </template>
                <template #content>
                    <div class="input-price-wrapper">
                        <BaseInput
                            class="input-price-input"
                            placeholder="Введите цену"
                            @input="handleFieldInput('price')"
                            :is-error="!isFieldValid('price')"
                            v-model="price"
                        />
                        <IconDelete class="price-value-delete" @click="$emit('delete')" />
                    </div>
                </template>
                <template #error-text>
                    {{ trans.validationMessages[getFieldErrors("price")?.at(0)?.$validator] }}
                </template>
            </BaseFormGroup>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.price-value {
    & .input-period-wrapper {
        padding: 12px 0;
    }

    & .input-period {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
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

    & .error-text {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        line-height: 16px;
        color: var(--c-red);
    }
}
</style>
