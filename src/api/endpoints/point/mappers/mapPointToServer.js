import { getDataMapper, mapField } from "@/lib";

export const mapPointToServer = getDataMapper({
    id: mapField("id", Number),
    title: mapField("title"),
    email: mapField("email"),
    website: mapField("website"),
    phone: mapField("phone"),
    place_text: mapField("address"),
});
