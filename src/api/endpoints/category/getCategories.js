import { makeHTTPRequest, mapDatabaseParamsFromServer, mapPaginationParamsToServer } from "@/api";
import { mapCategoriesFromServer } from "./mappers/mapCategoriesFromServer.js";

export const getCategories = async function (paginationParams) {
    const response = (
        await makeHTTPRequest({
            url: "category/inventory",
            method: "get",
            params: mapPaginationParamsToServer(paginationParams),
        })
    ).data;

    return {
        data: mapCategoriesFromServer(response.data),
        ...mapDatabaseParamsFromServer(response),
    };
};
