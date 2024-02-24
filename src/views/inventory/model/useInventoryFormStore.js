import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { clone } from "lodash";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { useInventoriesStore, useOnboardingStore } from "@/stores";

const INVENTORY_FORM_TEMPLATE = {
    title: "",
    article: "",
    inventoryNumber: "",
    description: "",
    state: null,
    category: null,
    price: null,
    point: null,
    media: [],
};

export const useInventoryFormStore = defineStore("inventoryForm", () => {
    const inventoriesStore = useInventoriesStore();
    const onboardingStore = useOnboardingStore();
    const router = useRouter();

    let formData = reactive(clone(INVENTORY_FORM_TEMPLATE));
    const state = ref("pending");
    const id = ref(null);
    const isNotificationShown = ref(false);

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

    const $reset = function () {
        formData.title = "";
        formData.article = "";
        formData.inventoryNumber = "";
        formData.description = "";
        formData.state = null;
        formData.category = null;
        formData.price = null;
        formData.point = null;
        formData.media = [];
        state.value = "pending";
        id.value = null;
        v$.value.$reset();
    };

    const save = async function () {
        const isValid = await v$.value.$validate();

        if (!isValid) {
            isNotificationShown.value = true;

            return;
        }

        state.value = "loading";

        if (id.value) {
            await inventoriesStore.editOne(id.value, { id: id.value, ...formData });
        } else {
            await inventoriesStore.addOne(formData);
        }

        state.value = "success";

        setTimeout(() => {
            state.value = "pending";
            $reset();
            router.push({ name: "Inventories" });
        }, 1500);
    };

    const handleTitleInput = function () {
        v$.value.formData.title.$touch();

        if (!onboardingStore.isActive()) return;

        if (isTitleValid.value) {
            onboardingStore.debouncedEnableNextButton();
        } else {
            onboardingStore.debouncedDisableNextButton();
        }
    };

    const fillFormData = async function (inventoryId) {
        state.value = "loading";

        const inventory = await inventoriesStore.getOne(inventoryId);

        formData.title = inventory.title;
        formData.article = inventory.article;
        formData.inventoryNumber = inventory.inventoryNumber;
        formData.description = inventory.description;
        formData.state = inventory.state;
        formData.category = inventory.category;
        formData.price = inventory.price;
        formData.point = inventory.point;
        formData.media = inventory.media;
        id.value = inventoryId;

        state.value = "pending";
    };

    return {
        save,
        handleTitleInput,
        formData,
        state,
        isNotificationShown,
        v$,
        isTitleValid,
        isPriceValid,
        isStateValid,
        titleErrors,
        priceErrors,
        stateErrors,
        fillFormData,
        $reset,
    };
});
