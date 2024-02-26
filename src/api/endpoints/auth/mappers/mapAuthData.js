import { getDataMapper, mapField } from "@/lib";

export const mapAuthData = getDataMapper({
    token: mapField("access_token"),
    tokenType: mapField("token_type"),
    expiresAt: mapField("expires_at"),
});
