import { apiInventory } from "@/api";
import { defineStore } from "pinia";
import { useEntityStore } from "@/lib";

export const useInventoriesStore = defineStore("inventories", () => {
    const { listData, meta, fetchMany, isManyLoading, deleteOne } = useEntityStore({
        getEntities: apiInventory.getMany,
        deleteEntity: apiInventory.deleteOne,
    });

    return { listData, meta, fetchMany, isManyLoading, deleteOne };
});
