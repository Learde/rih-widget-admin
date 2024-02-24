<script setup>
import { ref, onMounted } from "vue";

import {
    BaseColorPicker,
    BaseFormGroup,
    BaseSelectMenu,
    BaseSquareInput,
    BaseToggler,
    CheckboxWithAdditional,
} from "@/components";
import { useOnboardingStore } from "@/stores";

const onboardingStore = useOnboardingStore();

const FILTERS_POSITION_META = {
    left: {
        order: 1,
        label: "Слева",
        value: "left",
    },
    top: {
        order: 2,
        label: "Сверху",
        value: "top",
    },
};

const FILTER_CATEGORY_META = {
    dropdown: {
        order: 1,
        label: "Выпадающий список",
        value: "default",
    },
    inline: {
        order: 2,
        label: "Встроенный список",
        value: "inline",
    },
};

const settings = ref({
    filtersPosition: null,
    filterCategory: null,
    primaryColor: "#2e55b9",
    backgroundColor: "#fafafa",
});

onMounted(() => {
    onboardingStore.moveNext();
});
</script>

<template>
    <div class="settings">
        <div>
            <h3>Основное</h3>
            <div class="submenu">
                <CheckboxWithAdditional>
                    <template #label>Личный кабинет</template>
                    <template #additional>Личный профиль с историей аренд</template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Корзина</template>
                    <template #additional>
                        Необходима для того, что забронировать сразу несколько позиций
                    </template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Промокоды</template>
                    <template #additional> Поле для ввода промокода </template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Уведомления о бронировании</template>
                    <template #additional>Будут приходить на почту</template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Паспортные данные</template>
                    <template #additional>Указываются клиентом при бронировании</template>
                </CheckboxWithAdditional>
            </div>
            <hr />
            <h3>Фильтры</h3>
            <div class="submenu">
                <BaseToggler :meta="FILTERS_POSITION_META" v-model="settings.filtersPosition">
                    <template #label> Расположение фильтров </template>
                </BaseToggler>
                <BaseSelectMenu>
                    <template #label> Обязательные фильтры </template>
                    <template #additional>
                        Для показа витрины, необходимо будет сначала выбрать фильтр
                    </template>
                </BaseSelectMenu>
                <BaseSelectMenu>
                    <template #label> Скрытые фильтры </template>
                    <template #additional> Эти фильтры не будут отображаться на витрине </template>
                </BaseSelectMenu>
                <BaseSelectMenu>
                    <template #label> Скрытые категории </template>
                    <template #additional>
                        Эти категории не будут отображаться на витрине
                    </template>
                </BaseSelectMenu>
                <BaseToggler :meta="FILTER_CATEGORY_META" v-model="settings.filterCategory">
                    <template #label> Фильтр по категории </template>
                </BaseToggler>
            </div>
        </div>
        <div>
            <h3>Изображения</h3>
            <div class="submenu">
                <CheckboxWithAdditional>
                    <template #label>Фото инвентаря помещается внутри блока</template>
                    <template #additional>Фото в реальных размерах без обрезания</template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Галерея в карточке инвентаря</template>
                </CheckboxWithAdditional>
                <CheckboxWithAdditional>
                    <template #label>Скругленные края у фото</template>
                </CheckboxWithAdditional>
            </div>
            <hr />
            <h3>Срок аренды</h3>
            <div class="submenu">
                <BaseFormGroup>
                    <template #label> Длительность аренды по умолчанию </template>
                    <template #content>
                        <div class="inputs">
                            <BaseSquareInput min="0">
                                <template #label> Дни </template>
                            </BaseSquareInput>
                            <BaseSquareInput min="0" max="23">
                                <template #label> Часы </template>
                            </BaseSquareInput>
                            <BaseSquareInput min="0" max="59">
                                <template #label> Минуты </template>
                            </BaseSquareInput>
                        </div>
                    </template>
                </BaseFormGroup>
                <BaseFormGroup>
                    <template #label> Арендовать можно с </template>
                    <template #content>
                        <div class="inputs">
                            <BaseSquareInput min="0" max="23">
                                <template #label> Часы </template>
                            </BaseSquareInput>
                            <BaseSquareInput min="0" max="59">
                                <template #label> Минуты </template>
                            </BaseSquareInput>
                        </div>
                    </template>
                </BaseFormGroup>
                <BaseFormGroup>
                    <template #label> Арендовать можно до </template>
                    <template #content>
                        <div class="inputs">
                            <BaseSquareInput min="0" max="23">
                                <template #label> Часы </template>
                            </BaseSquareInput>
                            <BaseSquareInput min="0" max="59">
                                <template #label> Минуты </template>
                            </BaseSquareInput>
                        </div>
                    </template>
                </BaseFormGroup>
                <BaseFormGroup>
                    <template #label> Аренда не дольше, чем </template>
                    <template #content>
                        <div class="inputs">
                            <BaseSquareInput min="0">
                                <template #label> Дни </template>
                            </BaseSquareInput>
                        </div>
                    </template>
                </BaseFormGroup>
            </div>
            <hr />
            <h3>Цвета</h3>
            <div class="submenu">
                <BaseColorPicker v-model="settings.primaryColor">
                    <template #label>Акцентный цвет</template>
                </BaseColorPicker>
                <BaseColorPicker v-model="settings.backgroundColor">
                    <template #label>Фоновый цвет</template>
                </BaseColorPicker>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.settings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 110px;
}

h3 {
    margin-bottom: 12px;
    font-size: 13px;
    line-height: 20px;
    color: var(--c-gray-2);
    text-transform: uppercase;
}

hr {
    height: 0.5px;
    margin: 20px 0 12px;
    background-color: var(--c-gray-3);
    border: none;
}

.submenu {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}
</style>
