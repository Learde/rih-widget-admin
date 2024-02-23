import { driver } from "driver.js";
import { defineStore } from "pinia";

export const useOnboardingStore = defineStore("onboarding", () => {
    const driverObj = driver({
        showProgress: false,
        allowClose: false,
        popoverClass: "onboarding-popover",
        nextBtnText: "Далее",
        steps: [
            {
                element: null,
                popover: {
                    title: "Сейчас мы научим вас",
                    description: "Как какать",
                    nextBtnText: "Начать",
                    showButtons: ["next", "close"],
                    onPopoverRender: (popover) => {
                        const skipButton = document.createElement("button");

                        skipButton.classList.add("skip-btn");
                        skipButton.innerText = "Пропустить обучение";
                        popover.footerButtons.append(skipButton);

                        skipButton.addEventListener("click", () => {
                            driverObj.destroy();
                        });
                    },
                },
            },
            {
                element: "#link-inventory",
                popover: {
                    title: "Тарифы",
                showButtons: ["close"],
                    description:
                        "Для добавления инвентаря сначала необходимо добавить тариф. Перейдите в настройки тарифов",
                },
            },
            { element: ".sidebar", popover: { title: "Title", description: "Description" } },
            { element: ".footer", popover: { title: "Title", description: "Description" } },
        ],
    });

    const start = function () {
        driverObj.drive();
    };

    return { start };
});
