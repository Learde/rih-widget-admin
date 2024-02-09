import { addInventoryPrice } from "./addInventoryPrice.js";
import { deleteInventoryPrice } from "./deleteInventoryPrice.js";
import { editInventoryPrice } from "./editInventoryPrice.js";
import { getInventoryPrice } from "./getInventoryPrice.js";
import { getInventoryPrices } from "./getInventoryPrices.js";

export const apiInventoryPrice = {
    getMany: getInventoryPrices,
    getOne: getInventoryPrice,
    deleteOne: deleteInventoryPrice,
    addOne: addInventoryPrice,
    editOne: editInventoryPrice,
};
