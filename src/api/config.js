import axios from "axios";

// Constants
const BASE_URL = window.BASE_URL ?? import.meta.env.VITE_APP_API;

// Variables
let token = null;
let jwt = null;

const HTTPInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
});

HTTPInstance.defaults.trailingSlash = true;

const setHeaders = function (headers) {
    HTTPInstance.defaults.headers = headers;
};

const addHeaders = function (headers) {
    HTTPInstance.defaults.headers = {
        ...HTTPInstance.defaults.headers,
        ...headers,
    };
};

const setBaseUrl = function (url) {
    HTTPInstance.defaults.baseURL = url;
};

const setToken = function (t) {
    token = t;
};

const setJWT = function (j) {
    jwt = j;
};

const hasToken = function () {
    return Boolean(token) || Boolean(jwt);
};

export { setHeaders, addHeaders, setBaseUrl, setToken, setJWT, hasToken, token, jwt, HTTPInstance };
