import { deleteInventory } from "./deleteInventory.js";
import { getInventories } from "./getInventories.js";

export const apiInventory = {
    getMany: getInventories,
    deleteOne: deleteInventory,
};
