import { makeHTTPRequest } from "@/api";

import { mapAuthData } from "./mappers/mapAuthData.js";

export const authUser = async function (mail, launchParamsString) {
    const { data: res } = await makeHTTPRequest({
        url: "/widget/vk/auth",
        method: "POST",
        data: {
            mail,
        },
        headers: {
            vk: launchParamsString,
        },
    });

    return mapAuthData(res.data);
};
