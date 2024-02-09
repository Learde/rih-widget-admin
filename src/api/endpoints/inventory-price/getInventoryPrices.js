import { makeHTTPRequest, mapDatabaseParamsFromServer, mapPaginationParamsToServer } from "@/api";

import { mapInventoryPricesFromServer } from "./mappers/mapInventoryPricesFromServer.js";

export const getInventoryPrices = async function (paginationParams) {
    const response = (
        await makeHTTPRequest({
            url: "inventory/price",
            method: "get",
            params: mapPaginationParamsToServer(paginationParams),
        })
    ).data;

    return {
        data: mapInventoryPricesFromServer(response.data),
        ...mapDatabaseParamsFromServer(response),
    };
};
