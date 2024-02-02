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
        {
            path: "/inventories",
            name: "Inventories",
            meta: {
                title: "Инвентарь",
                addRouteName: "AddInventory",
            },
            component: () => import("@/views/InventoriesPage.vue"),
        },
        {
            path: "/inventories/add",
            name: "AddInventory",
            meta: {
                title: "Добавить инвентарь",
            },
            component: () => import("@/views/InventoryAddPage.vue"),
        },
    ],
});

export default router;
