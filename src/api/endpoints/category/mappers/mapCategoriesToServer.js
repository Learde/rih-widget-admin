import { getDataMapper, mapField } from "@/lib";

function CategoriesMeta() {
    this.id = mapField("id", Number);
    this.title = mapField("title");
    this.sum_deposit = mapField("cashDeposit", Number);
    this.discounts = mapField("discounts", Number);
    this.prices = mapField("tariffs", Number);
    this.children = mapField("children", this);
}

export const mapCategoriesToServer = getDataMapper({
    add: mapField("added", new CategoriesMeta()),
    delete: mapField("deleted", Number),
});
