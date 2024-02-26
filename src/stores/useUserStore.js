import bridge from "@vkontakte/vk-bridge";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { apiAuth, setJWT } from "@/api";
import { mapLaunchParams, mapUserInfo } from "@/lib";

export const useUserStore = defineStore("user", () => {
    const router = useRouter();

    const isAuthenticated = ref(false);
    const launchParams = ref({});
    const launchParamsString = ref("");

    const isGetLaunchParamsFailed = ref(false);
    const isEmailDenied = ref(false);
    const isPhoneDenied = ref(false);

    const email = ref(null);
    const phone = ref(null);
    const userInfo = ref(null);

    const setIsAuthenticated = function (value) {
        isAuthenticated.value = value;
    };

    const initLaunchParams = async function () {
        try {
            isGetLaunchParamsFailed.value = false;

            const params = await bridge.send("VKWebAppGetLaunchParams");

            launchParams.value = mapLaunchParams(params);
            launchParamsString.value = Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .join("&");
        } catch {
            isGetLaunchParamsFailed.value = true;
        }
    };

    const requestEmail = async function () {
        if (email.value) return;

        try {
            isEmailDenied.value = false;
            email.value = (await bridge.send("VKWebAppGetEmail")).email;
        } catch {
            isEmailDenied.value = true;
        }
    };

    const requestPhone = async function () {
        if (phone.value) return;

        try {
            isPhoneDenied.value = false;
            phone.value = (await bridge.send("VKWebAppGetPhoneNumber")).phone_number;
        } catch {
            isPhoneDenied.value = true;
        }
    };

    const requestUserInfo = async function () {
        if (userInfo.value) return;

        try {
            userInfo.value = mapUserInfo(
                await bridge.send("VKWebAppGetUserInfo", {
                    user_id: launchParams.value.vkUserId,
                }),
            );
        } catch {
            console.log("RIJ: Get user info failed");
        }
    };

    const setToken = function (token) {
        isAuthenticated.value = true;
        setJWT(token);
    };

    const tryAuth = async function () {
        if (isAuthenticated.value) {
            return;
        }

        try {
            const data = await apiAuth.auth(email.value, launchParamsString.value);

            if (data !== "Auth error") {
                setToken(data.token);
                router.push({ name: "Home" });
            }
        } catch {
            console.log("RIH: Auth failed");
        }
    };

    const register = async function () {
        await requestEmail();
        await requestPhone();
        await requestUserInfo();

        const data = await apiAuth.register(
            {
                phone: phone.value,
                mail: email.value,
                name: userInfo.value.firstName,
                surname: userInfo.value.lastName,
                patro: "",
            },
            launchParamsString.value,
        );

        setToken(data.token);

        router.push({ name: "Home" });
    };

    return {
        isAuthenticated,
        isGetLaunchParamsFailed,
        isEmailDenied,
        isPhoneDenied,

        setIsAuthenticated,
        initLaunchParams,
        launchParams,
        launchParamsString,
        requestEmail,
        tryAuth,
        register,
    };
});
