import { defineStore } from "pinia";

import { apiInventory } from "@/api";
import { useEntityStore } from "@/lib";

export const useInventoriesStore = defineStore("inventories", () => {
    const {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        deleteOne,
        addOne,
        isOneLoading,
        getOne,
        editOne,
    } = useEntityStore({
        addEntity: apiInventory.addOne,
        getEntities: apiInventory.getMany,
        getEntity: apiInventory.getOne,
        deleteEntity: apiInventory.deleteOne,
        editEntity: apiInventory.editOne,
    });

    return {
        listData,
        meta,
        fetchMany,
        isManyLoading,
        deleteOne,
        addOne,
        isOneLoading,
        getOne,
        editOne,
    };
});
