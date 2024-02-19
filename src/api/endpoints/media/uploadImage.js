import { makeHTTPRequest } from "@/api";

import { mapImageFromServer } from "./mappers/mapImageFromServer.js";

export const uploadImage = async function (formData) {
    const response = (
        await makeHTTPRequest({
            url: "https://media.rentinhand.ru/upload/public",
            method: "post",
            data: formData,
            withCredentials: false,
        })
    ).data;

    return mapImageFromServer(response?.array?.[0]);
};
