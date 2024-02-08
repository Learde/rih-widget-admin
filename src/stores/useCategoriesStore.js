import { defineStore } from "pinia";

import { apiCategory } from "@/api";
import { useEntityStore } from "@/lib";

export const useCategoriesStore = defineStore("categories", () => {
    const { listData, meta, fetchMany, isManyLoading, deleteOne, addOne } = useEntityStore({
        getEntities: apiCategory.getMany,
        deleteEntity: apiCategory.deleteOne,
        addEntity: apiCategory.addOne,
    });

    return { listData, meta, fetchMany, isManyLoading, deleteOne, addOne };
});
