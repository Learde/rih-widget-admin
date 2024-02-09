import { addPoint } from "./addPoint.js";
import { deletePoint } from "./deletePoint.js";
import { editPoint } from "./editPoint.js";
import { getPoint } from "./getPoint.js";
import { getPoints } from "./getPoints.js";

export const apiPoint = {
    getMany: getPoints,
    getOne: getPoint,
    addOne: addPoint,
    editOne: editPoint,
    deleteOne: deletePoint,
};
