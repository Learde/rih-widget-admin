import { makeHTTPRequest } from "@/api";

import { mapPointFromServer } from "./mappers/mapPointsFromServer.js";

export const getPoint = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `point/${id}`,
            method: "get",
        })
    ).data;

    return mapPointFromServer(response.data);
};
