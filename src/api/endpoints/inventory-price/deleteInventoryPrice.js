import { makeHTTPRequest } from "@/api";

export const deleteInventoryPrice = async function (id) {
    const response = (
        await makeHTTPRequest({
            url: `inventory/price/${id}`,
            method: "delete",
        })
    ).data;

    return response;
};
