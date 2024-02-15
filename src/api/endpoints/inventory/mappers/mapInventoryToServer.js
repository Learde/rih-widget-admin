import { getDataMapper, mapField } from "@/lib";

export const mapInventoryToServer = getDataMapper(
    {
        id: mapField("id"),
        title: mapField("title"),
        description: mapField("description"),
        state_id: mapField("state", ({ id }) => id),
        point_id: mapField("point", ({ id }) => id),
        article_number: mapField("article"),
        category_resource_id: mapField("category", ({ id }) => id),
        rent_number: mapField("inventoryNumber", String),
        prices: mapField("price", (item) => {
            return [item.id];
        }),
        is_group: mapField("isGroup", () => false),
    },
    { shouldAvoidNull: true, shouldAvoidUndefined: true },
);
