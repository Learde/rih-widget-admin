<script setup>
import { IconRIHLogo } from "@/icones";
</script>

<template>
    <div class="onboarding">
        <div class="header">
            <div class="header-content app">
                <div>
                    <IconRIHLogo class="logo" />
                </div>
                <div class="onboarding-img">
                    <img src="/onboarding.svg" />
                </div>
            </div>
        </div>
        <div class="onboarding-content app">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.onboarding {
    display: flex;
    flex-direction: column;
    height: 100vh;

    & .logo {
        width: auto;
        height: 28px;
    }

    & .header-content {
        min-height: unset;
    }

    & .header {
        background-color: var(--c-gray-4);
    }

    & .onboarding-img {
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
            width: 255px;
            height: auto;
        }
    }

    & .onboarding-content {
        height: 100%;
        min-height: unset;
        padding-top: 25px;
        padding-bottom: 35px;
    }
}
</style>
