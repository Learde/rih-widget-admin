import { getDataMapper, mapArray, mapField } from "@/lib";

function CategoriesMeta() {
    this.id = mapField("id");
    this.title = mapField("text");
    this.children = mapField("children", this);
}

export const mapTreeToCategory = getDataMapper(new CategoriesMeta());

export const mapTreeToCategories = mapArray(mapTreeToCategory);
