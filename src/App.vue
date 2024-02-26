<script setup>
import { computed, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";

import { hasToken } from "@/api";
import { TheHeader, BaseErrorModal, BaseButton } from "@/components";
import { useUserStore } from "@/stores";

const route = useRoute();
const userStore = useUserStore();

const hasHeader = computed(() => {
    return Boolean(route.meta?.title);
});

onMounted(async () => {
    userStore.setIsAuthenticated(hasToken());

    await userStore.initLaunchParams();

    await userStore.requestEmail();

    await userStore.tryAuth();
});
</script>

<template>
    <div :class="{ app: userStore.isAuthenticated }">
        <TheHeader
            v-if="hasHeader"
            :title="route.meta.title"
            :add-route-name="route.meta?.addRouteName"
            :has-ready-button="route.meta?.hasReadyButton"
            :back-route-name="route.meta?.backRouteName"
        />
        <RouterView />
    </div>
    <BaseErrorModal v-model="userStore.isEmailDenied">
        <template #content>
            <div style="margin-bottom: 12px">
                Без доступа к адресу электронной почты мы не сможем вас идентифицировать в нашей
                системе
            </div>
            <BaseButton @click="userStore.requestEmail">Запросить email повторно</BaseButton>
        </template>
    </BaseErrorModal>
    <BaseErrorModal v-model="userStore.isPhoneDenied">
        <template #content>
            <div style="margin-bottom: 12px">
                Без доступа к номеру телефона мы не сможем вас зарегистрировать в нашей системе
            </div>
            <BaseButton @click="userStore.register">Запросить телефон повторно</BaseButton>
        </template>
    </BaseErrorModal>
    <BaseErrorModal v-model="userStore.isGetLaunchParamsFailed">
        <template #content>
            <div style="margin-bottom: 12px">
                Что-то пошло не так, попробуйте перезапустить приложение
            </div>
        </template>
    </BaseErrorModal>
</template>
