import { makeHTTPRequest } from "@/api";

export const deletePoint = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `point/${id}`,
            method: "delete",
        })
    ).data;

    return response;
};
