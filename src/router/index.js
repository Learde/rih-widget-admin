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
                backRouteName: "Home",
            },
            component: () => import("@/views/settings/SettingsPage.vue"),
        },
        {
            path: "/inventories",
            name: "Inventories",
            meta: {
                title: "Инвентарь",
                addRouteName: "AddInventory",
                backRouteName: "Home",
            },
            component: () => import("@/views/inventory/InventoriesPage.vue"),
        },
        {
            path: "/inventories/add",
            name: "AddInventory",
            meta: {
                title: "Добавить инвентарь",
                backRouteName: "Inventories",
            },
            component: () => import("@/views/inventory/InventoryAddPage.vue"),
        },
        {
            path: "/categories",
            name: "Categories",
            meta: {
                title: "Категории",
                addRouteName: "AddCategory",
                backRouteName: "Home",
            },
            component: () => import("@/views/category/CategoriesPage.vue"),
        },
        {
            path: "/categories/add",
            name: "AddCategory",
            meta: {
                title: "Добавить категорию",
                hasReadyButton: true,
                backRouteName: "Categories",
            },
            component: () => import("@/views/category/CategoryAddPage.vue"),
        },
        {
            path: "/categories/edit/:id",
            name: "EditCategory",
            meta: {
                title: "Редактировать категорию",
                hasReadyButton: true,
                backRouteName: "Categories",
            },
            props: true,
            component: () => import("@/views/category/CategoryEditPage.vue"),
        },
        {
            path: "/points",
            name: "Points",
            meta: {
                title: "Пункты проката",
                addRouteName: "AddPoint",
                backRouteName: "Home",
            },
            component: () => import("@/views/point/PointsPage.vue"),
        },
        {
            path: "/points/add",
            name: "AddPoint",
            meta: {
                title: "Добавить пункт",
                hasReadyButton: true,
                backRouteName: "Points",
            },
            component: () => import("@/views/point/PointEditPage.vue"),
        },
        {
            path: "/points/edit/:id",
            name: "EditPoint",
            meta: {
                title: "Редактировать пункт",
                hasReadyButton: true,
                backRouteName: "Points",
            },
            props: true,
            component: () => import("@/views/point/PointEditPage.vue"),
        },
        {
            path: "/inventory-prices",
            name: "InventoryPrices",
            meta: {
                title: "Тарифы",
                addRouteName: "AddInventoryPrice",
                backRouteName: "Home",
            },
            component: () => import("@/views/inventory-price/InventoryPricesPage.vue"),
        },
        {
            path: "/inventory-prices/add",
            name: "AddInventoryPrice",
            meta: {
                title: "Добавить тариф",
                hasReadyButton: true,
                backRouteName: "InventoryPrices",
            },
        },
    ],
});

export default router;
