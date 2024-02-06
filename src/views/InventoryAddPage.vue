<script setup>
import {
    BaseButton,
    BaseFormGroup,
    BaseImageSelect,
    BaseInput,
    BaseSelectMenu,
    BaseTextarea,
} from "@/components";
import { reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useTrans } from "@/stores";
import { useVuelidate } from "@vuelidate/core";

const trans = useTrans();

const formData = reactive({
    title: "",
    article: "",
    inventoryNumber: "",
    description: "",
    state: null,
    category: null,
    price: null,
});

const rules = {
    formData: {
        title: { required },
        state: { required },
        price: { required },
    },
};

const v$ = useVuelidate(rules, { formData });

const save = async function () {
    const isValid = await v$.value.$validate();
};

const handleTitleInput = function () {
    v$.value.formData.title.$touch();
};
</script>

<template>
    <div class="wrapper">
        <BaseFormGroup :is-error="v$.formData.title.$error">
            <template #label> Название инвентаря * </template>
            <template #content>
                <BaseInput
                    placeholder="Введите название"
                    :is-error="v$.formData.title.$error"
                    v-model="formData.title"
                    @input="handleTitleInput"
                />
            </template>
            <template #error-text>
                {{ trans.validationMessages[v$.formData.title.$errors[0].$validator] }}
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Артикул </template>
            <template #content>
                <BaseInput placeholder="Введите артикул" v-model="formData.article" />
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Инвентарный номер </template>
            <template #content>
                <BaseInput placeholder="Введите номер" v-model="formData.inventoryNumber" />
            </template>
        </BaseFormGroup>
        <BaseFormGroup>
            <template #label> Описание </template>
            <template #content>
                <BaseTextarea placeholder="Введите описание" v-model="formData.description" />
            </template>
        </BaseFormGroup>
        <BaseSelectMenu :is-error="v$.formData.state.$error">
            <template #label> Статус * </template>
            <template #additional> Для показа на витрине выберите статус «свободен» </template>
            <template #error-text>
                {{ trans.validationMessages[v$.formData.state.$errors[0].$validator] }}
            </template>
        </BaseSelectMenu>
        <BaseSelectMenu>
            <template #label> Категория </template>
        </BaseSelectMenu>
        <BaseSelectMenu :is-error="v$.formData.price.$error">
            <template #label> Тариф * </template>
            <template #error-text>
                {{ trans.validationMessages[v$.formData.price.$errors[0].$validator] }}
            </template>
        </BaseSelectMenu>
        <BaseImageSelect />
        <BaseButton @click="save">Сохранить</BaseButton>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
</style>
