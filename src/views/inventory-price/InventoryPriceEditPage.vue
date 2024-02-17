<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { cloneDeep } from "lodash";
import { reactive, computed, onMounted, ref } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";

import {
    BaseFormGroup,
    BaseInput,
    BaseLoadingModal,
    BaseNotification,
    InventoryPriceValueEditor,
} from "@/components";
import { IconPlus } from "@/icones";
import { useTrans, useEventBus, useInventoryPricesStore } from "@/stores";

const props = defineProps({
    id: {
        type: [String, Number],
        default: null,
    },
});

const trans = useTrans();
const eventBus = useEventBus();
const inventoryPricesStore = useInventoryPricesStore();
const router = useRouter();

const formData = reactive({
    title: "",
});
const PRICE_TEMPLATE = {
    key: 0,
    period: {
        days: 0,
        hours: 0,
        minutes: 0,
    },
    moreThen: {
        days: 0,
        hours: 0,
    },
    price: 0,
};
const prices = ref([cloneDeep(PRICE_TEMPLATE)]);
const isNotificationShown = ref(false);

const addPrice = function () {
    PRICE_TEMPLATE.key++;
    prices.value.push(cloneDeep(PRICE_TEMPLATE));
};

const deletePrice = function (price) {
    prices.value.splice(prices.value.indexOf(price), 1);
};

const rules = {
    formData: {
        title: { required },
    },
};

const v$ = useVuelidate(rules, { formData });

const isTitleValid = computed(() => {
    return !v$.value.formData.title.$error;
});
const titleErrors = computed(() => {
    return v$.value.formData.title.$errors;
});
const handleTitleInput = function () {
    v$.value.formData.title.$touch();
};

const loadingState = ref("pending");

onMounted(async () => {
    if (props.id) {
        loadingState.value = "loading";
        const inventoryPrice = await inventoryPricesStore.getOne(props.id);

        loadingState.value = "pending";

        formData.title = inventoryPrice.title;
        prices.value = inventoryPrice.values;
    }

    eventBus.addEventListener("ready", async () => {
        const isValid = await v$.value.$validate();

        if (!isValid) {
            isNotificationShown.value = true;

            return;
        }

        loadingState.value = "loading";

        if (props.id) {
            await inventoryPricesStore.editOne(props.id, {
                id: props.id,
                title: formData.title,
                values: prices.value,
            });
        } else {
            await inventoryPricesStore.addOne({
                title: formData.title,
                values: prices.value,
            });
        }

        loadingState.value = "success";

        setTimeout(() => {
            router.push({ name: "InventoryPrices" });
        }, 1500);
    });
});

onBeforeRouteLeave(() => {
    eventBus.clearEventListeners("ready");
});
</script>

<template>
    <div>
        <BaseFormGroup :is-error="!isTitleValid">
            <template #label> Название тарифа * </template>
            <template #content>
                <BaseInput
                    placeholder="Введите название"
                    :is-error="!isTitleValid"
                    v-model="formData.title"
                    @input="handleTitleInput"
                />
            </template>
            <template #error-text>
                {{ trans.validationMessages[titleErrors?.at(0)?.$validator] }}
            </template>
        </BaseFormGroup>
        <hr />
        <h3>Расценки</h3>
        <template v-for="price in prices" :key="price.id ?? price.key">
            <InventoryPriceValueEditor
                v-model:period="price.period"
                v-model:more-then="price.moreThen"
                v-model:price="price.price"
                @delete="deletePrice(price)"
            />
            <hr />
        </template>
        <button class="add-value-btn" @click="addPrice">
            <span class="add-value-icon">
                <IconPlus />
            </span>
            <span class="add-value-text">Добавить расценку</span>
        </button>
    </div>
    <BaseLoadingModal :state="loadingState" />
    <BaseNotification v-model="isNotificationShown" type="error" />
</template>

<style lang="scss" scoped>
hr {
    height: 1px;
    margin: 12px 0;
    background-color: var(--c-gray-3);
    border: none;
}

h3 {
    margin-bottom: 12px;
    font-size: 13px;
    line-height: 20px;
    color: var(--c-gray-2);
    text-transform: uppercase;
}

.add-value-btn {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 6px 0;
    font-size: 15px;
    line-height: 20px;
    color: var(--c-primary);
    cursor: pointer;
    background-color: unset;
    border: none;
    outline: none;
}

.add-value-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: var(--c-gray-4);
    border-radius: 48px;

    & svg {
        width: 22px;
        height: 22px;
        padding-left: 1px;
        color: var(--c-primary);
    }
}
</style>
