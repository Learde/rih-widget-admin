import { defineStore } from "pinia";

import { apiCategory } from "@/api";
import { useEntityStore } from "@/lib";

export const useCategoriesStore = defineStore("categories", () => {
    const {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        deleteOne,
        addOne,
        editOne,
        hasUnloadedOptions,
    } = useEntityStore({
        getEntities: apiCategory.getMany,
        deleteEntity: apiCategory.deleteOne,
        addEntity: apiCategory.addOne,
        editEntity: apiCategory.editMany,
    });

    const editMany = async function (tree) {
        isManyLoading.value = true;

        await apiCategory.editMany(null, tree);
        await fetchMany({ page: 1, perPage: 999 });

        isManyLoading.value = false;
    };

    return {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        deleteOne,
        addOne,
        editOne,
        editMany,
        hasUnloadedOptions,
    };
});
