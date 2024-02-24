import { useOnboardingStore } from "@/stores";

export const useHomeOnboarding = function () {
    // тут проверка на необходимость включать онбординг

    const onboardingStore = useOnboardingStore();

    onboardingStore.start();
};
