import { getDataMapper, mapField, formatISODuration } from "@/lib";

export const mapInventoryPriceToServer = getDataMapper(
    {
        id: mapField("id", Number),
        title: mapField("title"),
        values: mapField("values", {
            id: mapField("id", Number),
            price_id: mapField("priceId", Number),
            period: mapField("period", formatISODuration),
            value: mapField("price", Number),
            more_then: mapField("moreThen", formatISODuration),
            is_fixed: mapField("isFixed", () => true, { applyToNil: true }),
        }),
    },
    {
        shouldAvoidUndefined: true,
    },
);
