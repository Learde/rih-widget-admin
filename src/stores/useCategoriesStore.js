import { defineStore } from "pinia";

import { apiCategory } from "@/api";
import { useEntityStore } from "@/lib";

export const useCategoriesStore = defineStore("categories", () => {
    const { listData, meta, fetchMany, isManyLoading, deleteOne } = useEntityStore({
        getEntities: apiCategory.getMany,
        deleteEntity: apiCategory.deleteOne,
    });

    return { listData, meta, fetchMany, isManyLoading, deleteOne };
});
