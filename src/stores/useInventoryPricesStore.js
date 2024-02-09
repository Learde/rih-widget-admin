import { defineStore } from "pinia";

import { apiInventoryPrice } from "@/api";
import { useEntityStore } from "@/lib";

export const useInventoryPricesStore = defineStore("inventoryPrices", () => {
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
        getEntities: apiInventoryPrice.getMany,
        getEntity: apiInventoryPrice.getOne,
        addEntity: apiInventoryPrice.addOne,
        deleteEntity: apiInventoryPrice.deleteOne,
        editEntity: apiInventoryPrice.editOne,
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
