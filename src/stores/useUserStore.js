import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const isAuthenticated = ref(false);

    const setIsAuthenticated = (value) => {
        isAuthenticated.value = value;
    };

    return { isAuthenticated, setIsAuthenticated };
});
