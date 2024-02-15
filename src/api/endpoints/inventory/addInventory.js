import { makeHTTPRequest } from "@/api";

import { mapInventoryToServer } from "./mappers/mapInventoryToServer.js";

export const addInventory = async function (inventory) {
    const response = (
        await makeHTTPRequest({
            url: "inventory",
            method: "post",
            data: mapInventoryToServer(inventory),
        })
    ).data;

    return response;
};
