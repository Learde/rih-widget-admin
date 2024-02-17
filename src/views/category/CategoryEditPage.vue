<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { clone } from "lodash";
import { reactive, computed, onMounted, ref } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";

import { BaseFormGroup, BaseInput, BaseLoadingModal, BaseNotification } from "@/components";
import { useTrans, useEventBus, useCategoriesStore } from "@/stores";

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    },
});

const trans = useTrans();
const eventBus = useEventBus();
const categoriesStore = useCategoriesStore();
const router = useRouter();

const formData = reactive({
    title: "",
});
const isNotificationShown = ref(false);

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
const tree = ref([]);
const currentNode = ref(null);

const findNodeDeep = function (id) {
    const nodes = clone(tree.value);

    while (nodes.length > 0) {
        const node = nodes.pop();

        if (Number(node.id) === Number(id)) {
            return node;
        }

        if (node?.children?.length > 0) {
            nodes.push(...node.children);
        }
    }
};

onMounted(async () => {
    loadingState.value = "loading";
    tree.value = await categoriesStore.fetchMany({ page: 1, perPage: 999 });
    currentNode.value = findNodeDeep(props.id);
    formData.title = currentNode.value.title;
    loadingState.value = "pending";

    eventBus.addEventListener("ready", async () => {
        const isValid = await v$.value.$validate();

        if (!isValid) {
            isNotificationShown.value = true;

            return;
        }

        loadingState.value = "loading";

        currentNode.value.title = formData.title;
        await categoriesStore.editOne(null, tree.value);

        loadingState.value = "success";

        setTimeout(() => {
            router.push({ name: "Categories" });
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
            <template #label> Название категории * </template>
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
    </div>

    <BaseLoadingModal :state="loadingState" />
    <BaseNotification v-model="isNotificationShown" type="error" />
</template>
