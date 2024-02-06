import { getDataMapper, mapArray, mapField } from "@/lib";

export const mapInventoryStateFromServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
    stateConst: mapField("const"),
    color: mapField("color"),
});

export const mapInventoryStatesFromServer = mapArray(mapInventoryStateFromServer);
