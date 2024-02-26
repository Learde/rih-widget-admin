import { getDataMapper, mapField } from "../dataMapping.js";

export const mapUserInfo = getDataMapper({
    id: mapField("id", Number),
    firstName: mapField("first_name"),
    lastName: mapField("last_name"),
});
