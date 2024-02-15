import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { clone } from "lodash";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

const INVENTORY_FORM_TEMPLATE = {
    title: "",
    article: "",
    inventoryNumber: "",
    description: "",
    state: null,
    category: null,
    price: null,
};

export const useInventoryFormStore = defineStore("inventoryForm", () => {
    const formData = reactive(clone(INVENTORY_FORM_TEMPLATE));

    const rules = {
        formData: {
            title: { required },
            state: { required },
            price: { required },
        },
    };

    const v$ = useVuelidate(rules, { formData });

    const isTitleValid = computed(() => {
        return !v$.value.formData.title.$error;
    });
    const isPriceValid = computed(() => {
        return !v$.value.formData.price.$error;
    });
    const isStateValid = computed(() => {
        return !v$.value.formData.state.$error;
    });

    const titleErrors = computed(() => {
        return v$.value.formData.title.$errors;
    });
    const priceErrors = computed(() => {
        return v$.value.formData.price.$errors;
    });
    const stateErrors = computed(() => {
        return v$.value.formData.state.$errors;
    });

    const save = async function () {
        const isValid = await v$.value.$validate();
    };

    const handleTitleInput = function () {
        v$.value.formData.title.$touch();
    };

    const $reset = function () {
        formData.value = clone(INVENTORY_FORM_TEMPLATE);
        v$.value.$reset();
    };

    return {
        save,
        handleTitleInput,
        formData,
        v$,
        isTitleValid,
        isPriceValid,
        isStateValid,
        titleErrors,
        priceErrors,
        stateErrors,
        $reset,
    };
});
