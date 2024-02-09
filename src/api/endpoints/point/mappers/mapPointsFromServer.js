import { getDataMapper, mapArray, mapField } from "@/lib";

export const mapPointFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
});

export const mapPointsFromServer = mapArray(mapPointFromServer);
