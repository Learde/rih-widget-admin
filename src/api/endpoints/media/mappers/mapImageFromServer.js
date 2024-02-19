import { getDataMapper, mapField } from "@/lib";

export const mapImageFromServer = getDataMapper({
    id: mapField("media_id", Number),
    resourceId: mapField("resource_id", Number),
    src: mapField("src"),
});
