import axios from "axios";

// Constants
const BASE_URL = window.BASE_URL ?? import.meta.env.VITE_APP_API;

// Variables
let token = null;
let jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjFmYmI2OWE0Yjg2NGJmYWJmOTE1YWY1Mzk1NzUwODQ3ODE2NjAyODEwN2VmOWE0NzVkNTEwNjZhMWZjOWVlZTBiMWQ4YmI3ODM1ZjhhNWQiLCJpYXQiOjE3MDg3Mjk0NjQuMDI5NTA3LCJuYmYiOjE3MDg3Mjk0NjQuMDI5NTExLCJleHAiOjE3MjQ0NTQyNjQuMDI1NDIxLCJzdWIiOiIzODA1Iiwic2NvcGVzIjpbXX0.YXmbsQ78cU7zy4agcbtoebEa1SOqIS4tEuVzk68eeEBZ041aL_EkUUqSV-k7HE3vvU_xyAkEAZPlsFPcwbbIZstyKMbuIujULy3TXKfN4R-SDpzAEzKstpJNsyHZycVBlHAiKlFJnauomKD3rUZdJ_5Lp98iVmnKdC0GLxJOhG8uQtdKWxOOSHaIW74ePItqMJHEGAT-yRqNqcFkUZfkKlsS1xJ4vrNXg7s0P1wXm5RBI1tS8pynMGHRaeOzvuhqFVVyQ82D3gvCVlpY-xMBOhXCIbDhjYeHS2RXoDIviV3mUWZbxkMY8GzTy6YMBolCLHElekstkkzOr5AzQAuVCYdWNLLlaoZIgkFjjiM6QwvkZeUICiY-NaSKD40SmE15mMt-qnKuhFRV-MOBVt0VlSTm5PXJF9eA903tH4vH8_IDam2Pl4fYysv6qDD6WcQO8ilhBXyyE7MSZC9RaNEgYcwyWN7C1HSlfa298B_9aNDikGnL7HQy2QtvZ0OdjYm1qruwvzu50iKfNMqC6ZH2WlYTuKgHwCDgy13w9A4NWa1EJNgpj2O8KkGCi5pxvJL-xn3e7FpHXcXbikbi6bpQBDY_pFmbcm9OzCLXbN_o-Gkdq7TlaxovRrsXU2FfkenaG5RmMj3HOEubG_fWEMzq3micLBNEQMVwxaZ7CDyxRo8";

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
