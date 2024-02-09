import { makeHTTPRequest, mapDatabaseParamsFromServer, mapPaginationParamsToServer } from "@/api";

import { mapPointsFromServer } from "./mappers/mapPointsFromServer.js";

export const getPoints = async function (paginationParams) {
    const response = (
        await makeHTTPRequest({
            url: "point",
            method: "get",
            params: mapPaginationParamsToServer(paginationParams),
        })
    ).data;

    return {
        data: mapPointsFromServer(response.data),
        ...mapDatabaseParamsFromServer(response),
    };
};
