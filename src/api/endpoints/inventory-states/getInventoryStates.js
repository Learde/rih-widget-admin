import { makeHTTPRequest, mapDatabaseParamsFromServer, mapPaginationParamsToServer } from "@/api";
import { mapInventoryStatesFromServer } from "./mappers/mapInventoryStatesFromServer.js";

export const getInventoryStates = async function (paginationParams) {
    const response = (
        await makeHTTPRequest({
            url: "inventory/state",
            method: "get",
            params: mapPaginationParamsToServer(paginationParams),
        })
    ).data;

    return {
        data: mapInventoryStatesFromServer(response.data),
        ...mapDatabaseParamsFromServer(response),
    };
};
