import { getCategories } from "./getCategories.js";
import { saveCategories } from "./saveCategories.js";

export const apiCategory = {
    getMany: getCategories,
    async deleteOne(id) {
        return await saveCategories([], [id]);
    },
    async deleteMany(ids) {
        return await saveCategories([], ids);
    },
    async addOne(category) {
        return await saveCategories([category], []);
    },
    async editMany(_, categories) {
        return await saveCategories(categories, []);
    },
};
