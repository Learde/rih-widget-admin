import { authUser } from "./authUser.js";
import { registerUser } from "./registerUser.js";

export const apiAuth = {
    auth: authUser,
    register: registerUser,
};
