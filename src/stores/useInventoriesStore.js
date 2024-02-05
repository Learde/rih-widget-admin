import { apiInventory } from "@/api";
import { defineStore } from "pinia";
import { useEntityStore } from "@/lib";

export const useInventoriesStore = defineStore("inventories", () => {
    const { listData, meta, fetchMany, isManyLoading } = useEntityStore({
        getEntities: apiInventory.getMany,
    });

    return { listData, meta, fetchMany, isManyLoading };
});
