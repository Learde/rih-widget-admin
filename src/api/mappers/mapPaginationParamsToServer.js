import { getDataMapper, mapField } from "@/lib";

export const mapPaginationParamsToServer = getDataMapper(
    {
        per_page: mapField("perPage", Number),
        page: mapField("page", Number),
        search: mapField("search"),
        sort_name: mapField("sortName"),
        sort_direction: mapField("sortDirection", (direction) => direction.toUpperCase()),
    },
    {
        shouldAvoidUndefined: true,
    },
);
