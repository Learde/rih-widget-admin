import { addInventory } from "./addInventory.js";
import { deleteInventory } from "./deleteInventory.js";
import { editInventory } from "./editInventory.js";
import { getInventories } from "./getInventories.js";
import { getInventory } from "./getInventory.js";

export const apiInventory = {
    addOne: addInventory,
    getMany: getInventories,
    getOne: getInventory,
    editOne: editInventory,
    deleteOne: deleteInventory,
};
