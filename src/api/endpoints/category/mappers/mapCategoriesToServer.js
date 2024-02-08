import { isArray } from "lodash";

import { getDataMapper, mapField } from "@/lib";

function CategoriesMeta() {
    this.id = mapField("id", Number);
    this.title = mapField("title");
    this.sum_deposit = mapField("cashDeposit", Number);
    this.discounts = mapField(
        "discounts",
        (arr) => {
            if (isArray(arr)) {
                return arr.map(Number);
            }

            return [];
        },
        { applyToNil: true },
    );
    this.prices = mapField(
        "tariffs",
        Number,
        (arr) => {
            if (isArray(arr)) {
                return arr.map(Number);
            }

            return [];
        },
        { applyToNil: true },
    );
    this.children = mapField("children", this);
}

export const mapCategoriesToServer = getDataMapper({
    add: mapField("added", new CategoriesMeta()),
    delete: mapField("deleted", Number),
});
