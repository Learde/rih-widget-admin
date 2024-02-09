import { makeHTTPRequest } from "@/api";

import { mapInventoryPriceToServer } from "./mappers/mapInventoryPriceToServer.js";

export const addInventoryPrice = async function (inventoryPrice) {
    const response = (
        await makeHTTPRequest({
            url: "inventory/price",
            method: "post",
            data: mapInventoryPriceToServer(inventoryPrice),
        })
    ).data;

    return response;
};
