import { driver } from "driver.js";
import { debounce } from "lodash";
import { defineStore } from "pinia";

export const useOnboardingStore = defineStore("onboarding", () => {
    const driverObj = driver({
        showProgress: false,
        allowClose: false,
        popoverClass: "onboarding-popover",
        nextBtnText: "Далее",
        stagePadding: 10,
        stageRadius: 10,
        steps: [
            // step 0
            {
                element: null,
                popover: {
                    title: "Давайте настроим виджет бронирования",
                    description:
                        "Сначала необходимо добавить инвентарь на склад, установить ему тариф и добавить фото. Этот инвентарь автоматически отобразится на витрине и будет доступен для аренды.",
                    nextBtnText: "Начать",
                    showButtons: ["next", "close"],
                    onPopoverRender: (popover) => {
                        const skipButton = document.createElement("button");

                        skipButton.classList.add("skip-btn");
                        skipButton.innerText = "Пропустить обучение";
                        popover.footerButtons.append(skipButton);

                        const img = document.createElement("img");

                        img.classList.add("onboarding-img");
                        img.src = "/onboarding-start.png";
                        popover.title.prepend(img);

                        skipButton.addEventListener("click", () => {
                            driverObj.destroy();
                        });
                    },
                },
            },
            // step 1
            {
                element: "#link-inventory",
                popover: {
                    title: "Добавьте инвентарь",
                    showButtons: ["close"],
                    description: "Для добавления инвентаря сначала необходимо перейти в склад.",
                },
            },
            // step 2
            {
                element: ".add-entity",
                popover: {
                    showButtons: ["close"],
                    description:
                        "Добавить инвентарь можно с помощью кнопки «+» в верхнем правом углу.",
                },
            },
            // step 3
            {
                element: ".main-fields",
                popover: {
                    showButtons: ["next", "close"],
                    title: "Заполните обязательные поля",
                    description:
                        "Обязательные поля отмечены «*». Вся информация будет выводиться на витрину. Лучше добавлять как можно больше информации, так как это важно для клиента.",
                    onPopoverRender: (popover) => {
                        popover.nextButton.disabled = true;
                    },
                },
            },
            // step 4
            {
                element: ".inventory-state-select",
                popover: {
                    showButtons: ["close"],
                    description: "Перейдите к выбору статуса",
                },
            },
            // step 5
            {
                element: ".select-state-content",
                popover: {
                    showButtons: ["close"],
                    title: "Статусы инвентаря",
                    description:
                        "Для того, чтобы инвентарь отображался на витрине, выберите статус «Свободен». Статусы инвентаря меняются автоматически в зависимости от состояния. Если инвентарь забронируют, то его статус изменится на «Забронирован». Вы также можете добавить свои статусы инвентаря в личном кабинете Rent in Hand.",
                },
            },
            // step 6
            {
                element: ".inventory-price-select",
                popover: {
                    showButtons: ["close"],
                    description: "Перейдите к выбору тарифа.",
                },
            },
            // state 7
            {
                element: ".add-entity",
                popover: {
                    showButtons: ["close"],
                    title: "Тариф инвентаря",
                    description:
                        "У каждого инвентаря должен быть привязан тариф, чтобы система понимала по какой стоимости рассчитывать аренду",
                },
            },
        ],
    });

    const disableNextButton = function () {
        const nextButton = document.querySelector(".driver-popover-next-btn");

        nextButton.disabled = true;
    };

    const enableNextButton = function () {
        const nextButton = document.querySelector(".driver-popover-next-btn");

        nextButton.disabled = false;
    };

    const debouncedDisableNextButton = debounce(disableNextButton, 400);
    const debouncedEnableNextButton = debounce(enableNextButton, 400);

    const isActive = function () {
        return driverObj.isActive();
    };

    const start = function () {
        if (isActive()) return;

        driverObj.drive(2);
    };

    const refresh = function () {
        if (!isActive()) return;

        driverObj.refresh();
    };

    const moveNext = function () {
        if (!isActive()) return;

        driverObj.moveNext();
    };

    const moveToFifthStep = function () {
        if (driverObj.getActiveIndex() === 4) {
            driverObj.moveNext();
        }
    };

    const moveToSixthStep = function () {
        if (driverObj.getActiveIndex() === 5) {
            driverObj.moveNext();
        }
    };

    const moveToSeventhStep = function () {
        if (driverObj.getActiveIndex() === 6) {
            driverObj.moveNext();
        }
    };

    return {
        start,
        refresh,
        moveNext,
        moveToFifthStep,
        moveToSixthStep,
        moveToSeventhStep,
        isActive,
        disableNextButton,
        enableNextButton,
        debouncedEnableNextButton,
        debouncedDisableNextButton,
    };
});
