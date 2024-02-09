import { makeHTTPRequest } from "@/api";

import { mapPointToServer } from "./mappers/mapPointToServer.js";

export const addPoint = async function (point) {
    const response = (
        await makeHTTPRequest({
            url: "point",
            method: "post",
            data: mapPointToServer(point),
        })
    ).data;

    return response;
};
