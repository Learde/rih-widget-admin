import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/views/home/HomePage.vue"),
        },
        {
            path: "/settings",
            name: "Settings",
            meta: {
                title: "Настройки",
            },
            component: () => import("@/views/settings/SettingsPage.vue"),
        },
        {
            path: "/inventories",
            name: "Inventories",
            meta: {
                title: "Инвентарь",
                addRouteName: "AddInventory",
            },
            component: () => import("@/views/inventory/InventoriesPage.vue"),
        },
        {
            path: "/inventories/add",
            name: "AddInventory",
            meta: {
                title: "Добавить инвентарь",
            },
            component: () => import("@/views/inventory/InventoryAddPage.vue"),
        },
    ],
});

export default router;
