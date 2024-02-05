import {
    isArray,
    isBoolean,
    isDate,
    isEmpty,
    isFunction,
    isNil,
    isNull,
    isNumber,
    isObject,
    isString,
    isUndefined,
} from "lodash";

const isPrimitive = (v) => {
    return isNumber(v) || isString(v) || isBoolean(v);
};

export {
    isNumber,
    isString,
    isBoolean,
    isFunction,
    isPrimitive,
    isNil,
    isObject,
    isArray,
    isEmpty,
    isUndefined,
    isNull,
    isDate,
};
