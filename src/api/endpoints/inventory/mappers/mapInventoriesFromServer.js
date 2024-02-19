import { isArray } from "lodash";

import { getDataMapper, mapArray, mapField } from "@/lib";

import { mapCategoryFromServer } from "../../category/mappers/mapCategoriesFromServer.js";
import { mapInventoryPriceFromServer } from "../../inventory-price/mappers/mapInventoryPricesFromServer.js";

export const mapInventoryFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
    avatar: mapField("avatar"),
    article: mapField("article_number"),
    description: mapField("description"),
    inventoryNumber: mapField("rent_number"),
    point: mapField("point", {
        id: mapField("id", Number),
        title: mapField("title"),
    }),
    state: mapField("state", {
        id: mapField("id", Number),
        title: mapField("title"),
        stateConst: mapField("const"),
        color: mapField("color"),
    }),
    price: mapField(
        "prices",
        (prices) => {
            if (isArray(prices) && prices.length > 0) {
                return mapInventoryPriceFromServer(prices[0]);
            }

            return null;
        },
        { applyToElements: false },
    ),
    category: mapField("category", mapCategoryFromServer),
    media: mapField("media", {
        dictId: mapField("dict_id", Number),
        src: mapField("src"),
        id: mapField("media_id", Number),
        resourceId: mapField("media_resource_id", Number),
        orderId: mapField("order_id", Number),
    }),
});

export const mapInventoriesFromServer = mapArray(mapInventoryFromServer);
