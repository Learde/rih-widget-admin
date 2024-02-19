import { HTTPInstance, token, jwt } from "./config";

export const makeHTTPRequest = function ({
    url = "/",
    method = "get",
    params = {},
    data = {},
    headers = {},
    responseType = "json",
    withCredentials = false,
}) {
    if (token) params.token = token;

    if (jwt) headers.Authorization = `Bearer ${jwt}`;

    return HTTPInstance.request({
        url,
        method,
        headers,
        params,
        data,
        responseType,
        withCredentials,
    });
};
