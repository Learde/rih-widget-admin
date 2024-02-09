<script setup>
import { refDebounced } from "@vueuse/core";
import { ref, computed, watchEffect } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { BaseSearchInput, BaseDeleteModal, BasePaginate, PointCard } from "@/components";
import { IconLocation, IconSearch } from "@/icones";
import { usePointsStore } from "@/stores";

const pointsStore = usePointsStore();
const router = useRouter();

const perPage = ref(12);
const currentPage = ref(1);
const searchValue = ref("");
const debouncedSearchValue = refDebounced(searchValue, 400);

const totalPages = computed(() => {
    return Math.ceil(pointsStore.meta.total / perPage.value);
});

const hasPoints = computed(() => {
    return pointsStore.isManyLoading || pointsStore.listData.length > 0;
});

const isEmptySearchValue = computed(() => {
    return !debouncedSearchValue.value || debouncedSearchValue.value.trim().length === 0;
});

const changePage = function (page) {
    currentPage.value = page;
};

let prevSearch = "";
const reload = function () {
    if (prevSearch !== debouncedSearchValue.value) {
        currentPage.value = 1;
    }

    prevSearch = debouncedSearchValue.value;

    pointsStore.fetchMany({
        search: debouncedSearchValue.value,
        perPage: perPage.value,
        page: currentPage.value,
    });
};

watchEffect(reload);

const showModal = ref(false);
const deletingId = ref(null);

const handleDeleting = function (id) {
    showModal.value = true;
    deletingId.value = id;
};

const deletePoint = async function () {
    await pointsStore.deleteOne(deletingId.value);
    reload();
};

const handleEditing = function (id) {
    router.push({ name: "EditPoint", params: { id } });
};
</script>

<template>
    <div class="points-page">
        <template v-if="hasPoints || !isEmptySearchValue">
            <BaseSearchInput v-model="searchValue" class="search-input" />
            <div class="points-list">
                <template v-if="!pointsStore.isManyLoading">
                    <PointCard
                        v-for="point in pointsStore.listData"
                        :point="point"
                        :key="point.id"
                        @delete="handleDeleting(point.id)"
                        @edit="handleEditing(point.id)"
                    />
                </template>
                <template v-else>
                    <PointCard v-for="id in 12" :point="{}" :key="id" is-loading />
                </template>
            </div>
            <div
                v-if="pointsStore.listData.length === 0 && !isEmptySearchValue"
                class="no-points mt-small"
            >
                <IconSearch class="no-points-icon" />
                <span class="no-points-text"> Ничего не найдено </span>
            </div>
            <BasePaginate
                class="paginate"
                :page-count="totalPages"
                :click-handler="changePage"
                :model-value="currentPage"
                prev-text="<"
                next-text=">"
            />
        </template>
        <div v-else class="no-points">
            <IconLocation class="no-points-icon" />
            <span class="no-points-text"> Нет добавленных пунктов проката </span>
            <RouterLink class="add-point" :to="{ name: 'AddPoint' }">
                Добавить пункт проката
            </RouterLink>
        </div>
    </div>

    <BaseDeleteModal v-model="showModal" @accept="deletePoint" @close="deletingId = null">
        <template #title> Удаление пункта </template>
        <template #description> Вы уверены, что хотите удалить этот пункт проката? </template>
    </BaseDeleteModal>
</template>

<style lang="scss" scoped>
.points-page {
    display: flex;
    flex-direction: column;
}

.search-input {
    width: 100%;
    margin-bottom: 20px;
}

.points-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}

.paginate {
    align-self: center;
}

.no-points {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 130px;

    &.mt-small {
        margin-top: 50px;
    }
}

.no-points-icon {
    width: 45px;
    height: auto;
    margin-bottom: 12px;
    color: var(--c-gray-7);
}

.no-points-text {
    display: inline-block;
    width: 250px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    color: var(--c-gray-7);
    text-align: center;
}

.add-point {
    font-size: 15px;
    line-height: 20px;
    color: var(--c-primary);
}
</style>
