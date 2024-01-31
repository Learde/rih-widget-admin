<script setup>
import { BaseToggler, CheckboxWithAdditional } from "@/components";
import { ref } from "vue";

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
            <BaseToggler :meta="FILTERS_POSITION_META" v-model="settings.filtersPosition">
                <template #label> Расположение фильтров </template>
            </BaseToggler>
            <BaseToggler :meta="FILTER_CATEGORY_META" v-model="settings.filterCategory">
                <template #label> Фильтр по категории </template>
            </BaseToggler>
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
    height: 0.33px;
    margin: 20px 0 12px;
    background-color: var(--c-gray-3);
    border: none;
}

.submenu {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
</style>
