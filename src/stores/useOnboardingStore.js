import { driver } from "driver.js";
import { defineStore } from "pinia";

export const useOnboardingStore = defineStore("onboarding", () => {
    const driverObj = driver({
        showProgress: false,
        allowClose: false,
        steps: [
            {
                element: null,
                popover: {
                    title: "Сейчас мы научим вас",
                    description: "Как какать",
                    showButtons: ["next"],
                    nextBtnText: "Начать",
                },
            },
            {
                element: "#link-inventory-prices",
                popover: {
                    title: "Тарифы",
                    showButtons: [],
                    description:
                        "Для добавления инвентаря сначала необходимо добавить тариф. Перейдите в настройки тарифов",
                },
            },
            { element: ".sidebar", popover: { title: "Title", description: "Description" } },
            { element: ".footer", popover: { title: "Title", description: "Description" } },
        ],
        showButtons: [],
        nextBtnText: "Далее",
        onPopoverRender: (popover) => {
            const skipButton = document.createElement("button");

            skipButton.innerText = "Пропустить обучение";
            popover.footerButtons.prepend(skipButton);

            skipButton.addEventListener("click", () => {
                driverObj.destroy();
            });
        },
    });

    const start = function () {
        driverObj.drive();
    };

    return { start };
});
