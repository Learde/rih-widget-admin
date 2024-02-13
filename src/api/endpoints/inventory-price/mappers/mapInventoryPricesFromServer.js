import { getDataMapper, mapArray, mapField, parseISODuration } from "@/lib";

export const mapInventoryPriceFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
    values: mapField("values", {
        id: mapField("id", Number),
        priceId: mapField("priceId", Number),
        price: mapField("value", Number),
        moreThen: mapField("more_then", parseISODuration),
        period: mapField("period", parseISODuration),
    }),
});

export const mapInventoryPricesFromServer = mapArray(mapInventoryPriceFromServer);
