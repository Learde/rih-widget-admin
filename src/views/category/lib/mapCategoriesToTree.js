import { getDataMapper, mapArray, mapField } from "@/lib";

function CategoriesMeta() {
    this.id = mapField("id");
    this.text = mapField("title");
    this.children = mapField("children", this);
}

export const mapCategoryToTree = getDataMapper(new CategoriesMeta());

export const mapCategoriesToTree = mapArray(mapCategoryToTree);
