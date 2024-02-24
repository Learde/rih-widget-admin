import { onMounted } from "vue";

import { useOnboardingStore } from "@/stores";

export const useHomeOnboarding = function () {
    // тут проверка на необходимость включать онбординг

    const onboardingStore = useOnboardingStore();

    onMounted(() => {
        if (onboardingStore.isActive()) {
            onboardingStore.moveNext();
        } else {
            onboardingStore.start();
        }
    });
};
