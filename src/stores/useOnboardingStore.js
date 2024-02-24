import { driver } from "driver.js";
import { debounce } from "lodash";
import { defineStore } from "pinia";

import { useEventBus } from "./useEventBus.js";

export const useOnboardingStore = defineStore("onboarding", () => {
    const eventBus = useEventBus();

    const driverObj = driver({
        showProgress: false,
        allowClose: false,
        popoverClass: "onboarding-popover",
        nextBtnText: "Далее",
        doneBtnText: "Завершить обучение",
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
            // step 7
            {
                element: ".add-entity",
                popover: {
                    showButtons: ["close"],
                    title: "Тариф инвентаря",
                    description:
                        "У каждого инвентаря должен быть привязан тариф, чтобы система понимала по какой стоимости рассчитывать аренду. Давайте добавим тариф.",
                },
            },
            // step 8
            {
                popover: {
                    showButtons: ["next", "close"],
                    description: `
<div>Название тарифа видите только вы.</div>
<div>Расценки будут выводиться в карточку инвентаря на витрине. В одном тарифе может быть несколько расценок.</div>
<div>Например:</div>
<div>1 час = 500 ₽</div>
<div>6 часов = 2 500 ₽</div>
<div>1 день = 5 000 ₽</div>
<div>Давайте настроим ваш первый тариф.</div>
`,
                },
            },
            // step 9
            {
                element: ".inventory-price-title",
                popover: {
                    showButtons: ["close", "next"],
                    description: "Для начала укажите название тарифа.",
                    onPopoverRender: (popover) => {
                        popover.nextButton.disabled = true;
                    },
                },
            },
            // step 10
            {
                element: "#inventory-price-values",
                popover: {
                    showButtons: ["close", "next"],
                    description:
                        "Заполните хотя бы одну расценку. Когда будете готовы, нажмите кнопку «Проверить», чтобы мы убедились, что все заполнено верно.",
                    onPopoverRender: (popover) => {
                        popover.footerButtons.removeChild(popover.nextButton);

                        const checkButton = document.createElement("button");

                        checkButton.innerText = "Проверить и продолжить";
                        checkButton.addEventListener("click", () => {
                            eventBus.emit("onboarding-check");
                        });
                        popover.footerButtons.prepend(checkButton);
                    },
                },
            },
            // step 11
            {
                element: ".ready-button",
                popover: {
                    showButtons: ["close"],
                    description: "Теперь сохраним тариф.",
                },
            },
            // step 12
            {
                element: ".inventory-price-select",
                popover: {
                    showButtons: ["close"],
                    description: "Вернемся к выбору тарифа.",
                },
            },
            // step 13
            {
                element: ".select-inventory-price-content",
                popover: {
                    showButtons: ["close"],
                    description: "Выберете добавленный тариф",
                    align: "center",
                    side: "bottom",
                },
            },
            // step 14
            {
                element: "#inventory-image-select",
                popover: {
                    showButtons: ["close", "next"],
                    description: `
<div style="margin-bottom: 10px;">Вы можете добавить одно или несколько изображений инвентаря, которые также будут отображаться на витрине.</div>
<div>По желанию загрузите изображения, или переходите к следующему шагу</div>
`,
                },
            },
            // step 15
            {
                element: "#save-inventory",
                popover: {
                    showButtons: ["close"],
                    description: "Сохраните инвентарь",
                },
            },
            // step 16
            {
                element: ".inventories-list",
                popover: {
                    showButtons: ["close", "next"],
                    title: "Инвентарь добавлен",
                    description: `
<div>Таким образом вы можете добавлять инвентарь на склад, а он отображается на витрине. Чтобы убрать инвентарь с витрины, можно поставить ему статус «сломан».</div>
<div style="margin-top: 10px;"><b>Теперь давайте настроим саму витрину.</b></div>`,
                },
            },
            // step 17
            {
                element: ".back-btn",
                popover: {
                    description: "Вернитесь в меню",
                    showButtons: ["close"],
                },
            },
            // step 18
            {
                element: "#link-settings",
                popover: {
                    description: "Перейдите в настройки витрины",
                    showButtons: ["close"],
                },
            },
            // step 19
            {
                element: ".settings",
                popover: {
                    title: "Настройки витрины",
                    description:
                        "Вы можете кастомизировать внешний и функциональный вид виджета под свои нужды. Например, выключить некоторые фильтры, добавить корзину или изменить цвета. Укажите необходимые настройки, нажмите «<b>Сохранить</b>» и далее посмотрите как изменится виджет.",
                    showButtons: ["close", "next"],
                },
            },
            // step 20
            {
                element: ".back-btn",
                popover: {
                    description: "Вернитесь в меню",
                    showButtons: ["close"],
                },
            },
            // step 21
            {
                element: "#link-rih",
                popover: {
                    description:
                        "Помимо рассмотренных возможностей, вы можете добавлять пункты проката, группировать инвентарь по категориям и использовать еще больше функций в вашем личном кабинете в системе Rent in Hand.",
                    showButtons: ["close", "next"],
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

        driverObj.drive(0);
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

    const moveToEighthStep = function () {
        if (driverObj.getActiveIndex() === 7) {
            driverObj.moveNext();
        }
    };

    const moveToThirteenthStep = function () {
        if (driverObj.getActiveIndex() === 12) {
            driverObj.moveNext();
        }
    };

    const moveToFourteenthStep = function () {
        if (driverObj.getActiveIndex() === 13) {
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
        moveToEighthStep,
        moveToThirteenthStep,
        moveToFourteenthStep,
        isActive,
        disableNextButton,
        enableNextButton,
        debouncedEnableNextButton,
        debouncedDisableNextButton,
    };
});
