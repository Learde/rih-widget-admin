import { makeHTTPRequest } from "@/api";

import { mapInventoryFromServer } from "./mappers/mapInventoriesFromServer.js";

export const getInventory = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/${id}`,
            method: "get",
        })
    ).data;

    return mapInventoryFromServer(response.data);
};
