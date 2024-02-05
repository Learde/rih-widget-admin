import { makeHTTPRequest } from "@/api";

export const deleteInventory = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/${id}`,
            method: "delete",
        })
    ).data;

    return response;
};
