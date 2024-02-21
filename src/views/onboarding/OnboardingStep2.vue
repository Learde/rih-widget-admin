<script setup>
import OnboardingStepTemplate from "./OnboardingStepTemplate.vue";
</script>

<template>
    <OnboardingStepTemplate :step="2" :steps="3" @next="$router.push({ name: 'OnboardingStep3' })">
        <template #title> Удобный каталог для ваших клиентов </template>
        <template #description>
            Виджет позволяет пользователям выбирать доступные даты и время для бронирования,
            просматривать информацию о доступных услугах проката, ознакомиться с ценами и условиями
            аренды.
        </template>
        <template #button-text> Далее </template>
    </OnboardingStepTemplate>
</template>
