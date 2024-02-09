import { getDataMapper, mapArray, mapField } from "@/lib";

export const mapInventoryPriceFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
});

export const mapInventoryPricesFromServer = mapArray(mapInventoryPriceFromServer);
