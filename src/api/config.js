import axios from "axios";

// Constants
const BASE_URL = window.BASE_URL ?? import.meta.env.VITE_APP_API;

// Variables
let token = null;
let jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiY2UyN2MwYmI5MmVmYzk0ODdlOTZlMTgxZWU3YTc2NmM5M2Y4ZmQ2MjE0NjI5YzI5ZGQyYWQwMzExZWQ3ZmY4Nzc0OTZjMGU4ODdjOTBiOGIiLCJpYXQiOjE3MDgzMDI4MDMuNzU0ODMsIm5iZiI6MTcwODMwMjgwMy43NTQ4MzMsImV4cCI6MTcyNDAyNzYwMy43NTIzMjMsInN1YiI6IjM4MDUiLCJzY29wZXMiOltdfQ.tGn4ZRmejb8WcowAyXtQbv6nRW2cYkBBhtEIN7rqzu18YjSFfqzgJokKnSEgFmIBbU6eXFHUqpzrjjHhngh6-m8HnJDJmNo-VyYRI-G-rNG3KDSqZq53olpInMIMh2U93_aRfckdgt4-4K5dYfXXku6vXqmo8xryyzERcNzYRMNtpvKhRGu74UnGyHKrLQFd5iosDlG5ko-lC1vl3enABU6U0pxLRPJVJIuqynr8vvdC2ZWvUFkMnx7eN21Lx_T-rifx2WZaIrt43Px8UdMd1g3xMKR05G9odoYsk8OTMRX9-0HmvjbKXkG8g3UZkzBf0-h3c59LtRDQ9sIESTwpOJCrtVBb9cP1TFi05fzNzoRRMiY-Vua3_8PwXbcpX1hwgE1cwYU0D2H9mFEGjmzTTc_jWDN4hb1kYyVMfe0HUl6QyyhiF3Q6zruqNJssDtbFrhmHjs77sS5-OKw23tLLbeRC0V5RY5wnGyixXq3VMrDlwr4PFvgg1e80TR7OFtutuX12A-8ZqHlEMzSCEPBPgdt58WUb0EbhZqmAZNK_6vSBYy9kMaffPF3wIa24xXd2QO6SQu2oVMhgTldwKHV21lZUuXuxVREnLvBqnhXlu58zsHgVCMMhgJc0VBR6tr5MVSsC0LfOC1QRORKtLAfKkajpJjQfVM4R8cop5YX1tcA";

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

export { setHeaders, addHeaders, setBaseUrl, setToken, token, jwt, HTTPInstance };
