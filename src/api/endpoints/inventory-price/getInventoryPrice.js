import { makeHTTPRequest } from "@/api";

import { mapInventoryPriceFromServer } from "./mappers/mapInventoryPricesFromServer.js";

export const getInventoryPrice = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/price/${id}`,
            method: "get",
        })
    ).data;

    return mapInventoryPriceFromServer(response.data);
};
