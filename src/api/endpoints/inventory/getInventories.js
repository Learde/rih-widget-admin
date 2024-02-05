import { makeHTTPRequest, mapDatabaseParamsFromServer, mapPaginationParamsToServer } from "@/api";
import { mapInventoriesFromServer } from "./mappers/mapInventoriesFromServer.js";

export const getInventories = async function (paginationParams) {
    const response = (
        await makeHTTPRequest({
            url: "inventory",
            method: "get",
            params: mapPaginationParamsToServer(paginationParams),
        })
    ).data;

    return {
        data: mapInventoriesFromServer(response.data),
        ...mapDatabaseParamsFromServer(response),
    };
};
