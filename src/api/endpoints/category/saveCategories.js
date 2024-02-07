import { makeHTTPRequest } from "@/api";

import { mapCategoriesToServer } from "./mappers/mapCategoriesToServer.js";

export const saveCategories = async function (added, deleted) {
    const response = (
        await makeHTTPRequest({
            url: "category/inventory/multi-edit",
            method: "post",
            data: mapCategoriesToServer({ added, deleted }),
        })
    ).data;

    return response;
};
