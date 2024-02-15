import { makeHTTPRequest } from "@/api";

import { mapInventoryToServer } from "./mappers/mapInventoryToServer.js";

export const editInventory = async function (id, inventory) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/${id}`,
            method: "put",
            data: mapInventoryToServer(inventory),
        })
    ).data;

    return response;
};
