import { defineStore } from "pinia";

import { apiPoint } from "@/api";
import { useEntityStore } from "@/lib";

export const usePointsStore = defineStore("points", () => {
    const {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        hasUnloadedOptions,
        addOne,
        deleteOne,
        getOne,
        editOne,
    } = useEntityStore({
        getEntities: apiPoint.getMany,
        getEntity: apiPoint.getOne,
        addEntity: apiPoint.addOne,
        deleteEntity: apiPoint.deleteOne,
        editEntity: apiPoint.editOne,
    });

    return {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        hasUnloadedOptions,
        addOne,
        deleteOne,
        getOne,
        editOne,
    };
});
