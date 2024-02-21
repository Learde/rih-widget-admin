<script setup>
import OnboardingStepTemplate from "./OnboardingStepTemplate.vue";
</script>

<template>
    <OnboardingStepTemplate :step="1" :steps="3" @next="$router.push({ name: 'OnboardingStep2' })">
        <template #title> Виджет бронирования для проката в VK сообщество </template>
        <template #description>
            Виджет бронирования для сообщества Вконтакте интегрированный с программой Rent in Hand,
            предоставляет удобный способ для автоматизации процесса бронирования и управления
            прокатом.
            <br />
            <span class="onboarding-highlight">
                Пользователи могут легко забронировать инвентарь через ваше сообщество.
            </span>
        </template>
        <template #button-text> Далее </template>
    </OnboardingStepTemplate>
</template>
