import { makeHTTPRequest } from "@/api";

import { mapPointToServer } from "./mappers/mapPointToServer.js";

export const editPoint = async function (id, point) {
    const response = (
        await makeHTTPRequest({
            url: `point/${id}`,
            method: "put",
            data: mapPointToServer(point),
        })
    ).data;

    return response;
};
