import bridge from "@vkontakte/vk-bridge";
import { createRouter, createWebHistory } from "vue-router";

import { hasToken } from "@/api";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/onboarding/",
            name: "Onboarding",
            redirect: "/onboarding/step-1",
            component: () => import("@/views/onboarding/OnboardingPage.vue"),
            children: [
                {
                    path: "step-1",
                    name: "OnboardingStep1",
                    component: () => import("@/views/onboarding/OnboardingStep1.vue"),
                },
                {
                    path: "step-2",
                    name: "OnboardingStep2",
                    component: () => import("@/views/onboarding/OnboardingStep2.vue"),
                },
                {
                    path: "step-3",
                    name: "OnboardingStep3",
                    component: () => import("@/views/onboarding/OnboardingStep3.vue"),
                },
            ],
        },
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
            path: "/inventories/edit/:id",
            name: "EditInventory",
            meta: {
                title: "Редактировать инвентарь",
                backRouteName: "Inventories",
            },
            props: true,
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
            component: () => import("@/views/inventory-price/InventoryPriceEditPage.vue"),
        },
        {
            path: "/inventory-prices/edit/:id",
            name: "EditInventoryPrice",
            meta: {
                title: "Редактировать тариф",
                hasReadyButton: true,
                backRouteName: "InventoryPrices",
            },
            props: true,
            component: () => import("@/views/inventory-price/InventoryPriceEditPage.vue"),
        },
    ],
});

const onboardingRoutes = ["Onboarding", "OnboardingStep1", "OnboardingStep2", "OnboardingStep3"];

router.beforeEach((to, from) => {
    const isOnboardingRoute = onboardingRoutes.includes(to.name);

    if (!hasToken() && !isOnboardingRoute) {
        return { name: "Onboarding" };
    }

    if (hasToken() && isOnboardingRoute) {
        return { name: "Home" };
    }

    if (to.query?.vk_app_id && from.fullPath === "/") {
        return { path: to.hash.replace("#", "") || "/", replace: true };
    }
});

router.afterEach((to) => {
    bridge.send("VKWebAppSetLocation", {
        location: to.fullPath,
        replace_state: true,
    });
});
bridge.subscribe((event) => {
    if (event.detail.type === "VKWebAppChangeFragment") {
        router.replace(event.detail.data.location);
    }
});

export default router;
