import { makeHTTPRequest } from "@/api";

import { mapInventoryPriceToServer } from "./mappers/mapInventoryPriceToServer.js";

export const editInventoryPrice = async function (id, inventoryPrice) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/price/${id}`,
            method: "put",
            data: mapInventoryPriceToServer(inventoryPrice),
        })
    ).data;

    return response;
};
