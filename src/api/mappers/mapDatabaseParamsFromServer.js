import { getDataMapper, mapField } from "@/lib";

export const mapDatabaseParamsFromServer = getDataMapper({
    meta: mapField("meta", {
        currentPage: mapField("current_page", Number),
        from: mapField("from", Number),
        to: mapField("to", Number),
        perPage: mapField("per_page", Number),
        total: mapField("total", Number),
    }),
    permissions: mapField("permissions", {
        resourceId: mapField("resource_id", Number),
        read: mapField("read", Boolean),
        write: mapField("write", Boolean),
        delete: mapField("delete", Boolean),
        right: mapField("right", Boolean),
    }),
});
