import { defineStore } from "pinia";

import { apiCategory } from "@/api";
import { useEntityStore } from "@/lib";

export const useCategoriesStore = defineStore("categories", () => {
    const { listData, meta, fetchMany, isManyLoading, deleteOne, addOne, editOne } = useEntityStore(
        {
            getEntities: apiCategory.getMany,
            deleteEntity: apiCategory.deleteOne,
            addEntity: apiCategory.addOne,
            editEntity: apiCategory.editMany,
        },
    );

    return { listData, meta, fetchMany, isManyLoading, deleteOne, addOne, editOne };
});
