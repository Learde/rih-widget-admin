import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/views/HomePage.vue"),
        },
        {
            path: "/settings",
            name: "Settings",
            meta: {
                title: "Настройки",
            },
            component: () => import("@/views/SettingsPage.vue"),
        },
    ],
});

export default router;
