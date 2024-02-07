import { getDataMapper, mapArray, mapField } from "@/lib";

function CategoryMetaData() {
    this.id = mapField("id", Number);
    this.parentId = mapField("parent_id");
    this.title = mapField("title", String);
    this.children = mapField("children", this);
}

export const mapCategoryFromServer = getDataMapper(new CategoryMetaData());

export const mapCategoriesFromServer = mapArray(mapCategoryFromServer);
