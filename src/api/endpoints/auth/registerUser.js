import { makeHTTPRequest } from "@/api";

import { mapAuthData } from "./mappers/mapAuthData.js";

export const registerUser = async function (userData, launchParamsString) {
    const { data: res } = await makeHTTPRequest({
        url: "/widget/vk/register",
        method: "POST",
        data: userData,
        headers: {
            vk: launchParamsString,
        },
    });

    return mapAuthData(res.data);
};
