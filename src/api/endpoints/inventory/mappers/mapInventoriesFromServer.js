import { getDataMapper, mapArray, mapField } from "@/lib";

export const mapInventoryFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
    avatar: mapField("avatar"),
    article: mapField("article_number"),
    state: mapField("state", {
        id: mapField("id", Number),
        title: mapField("title"),
        stateConst: mapField("const"),
        color: mapField("color"),
    }),
});

export const mapInventoriesFromServer = mapArray(mapInventoryFromServer);
