import { apiInventoryState } from "@/api";
import { defineStore } from "pinia";
import { useEntityStore } from "@/lib";

export const useInventoryStatesStore = defineStore("inventoryStates", () => {
    const { listData, meta, fetchMany, isManyLoading, hasUnloadedOptions } = useEntityStore({
        getEntities: apiInventoryState.getMany,
    });

    return { listData, meta, fetchMany, isManyLoading, hasUnloadedOptions };
});
