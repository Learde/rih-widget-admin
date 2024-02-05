import { HTTPInstance, token } from "./config";

export const makeHTTPRequest = function ({
    url = "/",
    method = "get",
    params = {},
    data = {},
    headers = {},
    responseType = "json",
}) {
    if (token) params.get_token = token;

    return HTTPInstance.request({
        url,
        method,
        headers,
        params,
        data,
        responseType,
    });
};
