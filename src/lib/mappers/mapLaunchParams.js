import { getDataMapper, mapField } from "../dataMapping.js";

export const mapLaunchParams = getDataMapper({
    sign: mapField("sign"),
    vkAccessTokenSettings: mapField("vk_access_token_settings"),
    vkAppId: mapField("vk_app_id", Number),
    vkAreNotificationsEnabled: mapField("vk_are_notifications_enabled", Boolean),
    vkGroupId: mapField("vk_group_id", Number),
    vkIsAppUser: mapField("vk_is_app_user", Boolean),
    vkIsFavorite: mapField("vk_is_favorite", Boolean),
    vkLanguage: mapField("vk_language"),
    vkPlatform: mapField("vk_platform"),
    vkRef: mapField("vk_ref"),
    vkTs: mapField("vk_ts", Number),
    vkUserId: mapField("vk_user_id", Number),
    vkViewerGroupRole: mapField("vk_viewer_group_role"),
});
