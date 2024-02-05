import { isArray, isFunction, isNil, isNull, isObject, isUndefined } from "./types";

// Functional lens
const lens = (source, destination = source) => ({
    get: (obj) => obj[source],
    set: (val, obj) => ({ ...obj, [destination]: val }),
});
const view = (currentLens, obj) => currentLens.get(obj);
// const set = (currentLens, value, obj) => currentLens.set(value, obj);

// Functional identity function
const identity = (x) => x;

// Data mapping
export const getDataMapper = (meta, options = {}) => {
    // Default options
    const DATA_MAPPER_DEFAULT_OPTIONS = {
        defaultValue: null,
        shouldAvoidUndefined: false,
        shouldAvoidNull: false,
    };

    // Object with merged options
    options = Object.assign(DATA_MAPPER_DEFAULT_OPTIONS, options);

    // Cash keys and lenses (using closure)
    const keys = Object.keys(meta);

    return (obj) => {
        // If transforming object is undefined or null, return null
        if (isNil(obj)) return null;

        // Replace array of keys with object with pairs of key and transformed value
        return keys.reduce((result, key) => {
            const mappedValue = meta[key](obj);

            // If mapped value is undefined, and we should avoid undefined, skip it
            if (isUndefined(mappedValue) && options.shouldAvoidUndefined) return result;

            // If mapped value is null, and we should avoid null, skip it
            if (isNull(mappedValue) && options.shouldAvoidNull) return result;

            // Else write new pair to resulted object
            result[key] = mappedValue ?? options.defaultValue;

            return result;
        }, {});
    };
};

// Helper function to declarative define how a field should be mapped
export const mapField = (name, mapOrMeta = identity, options = {}) => {
    // Default options
    const MAP_FIELD_DEFAULT_OPTIONS = {
        applyToElements: true,
        applyToNil: false,
    };

    // Object with merged options
    options = Object.assign(MAP_FIELD_DEFAULT_OPTIONS, options);

    const nameLens = lens(name);

    return (obj) => {
        // Value from original object got by lens
        const viewedValue = view(nameLens, obj);
        const isViewedValueArray = isArray(viewedValue);

        // If second argument is function, apply mapping function...
        if (isFunction(mapOrMeta)) {
            // to all values in array
            if (isViewedValueArray && options.applyToElements) return viewedValue.map(mapOrMeta);

            // to whole value (if value is not null or undefined)
            if (!isNil(viewedValue) || options.applyToNil) return mapOrMeta(viewedValue);

            return viewedValue;
        }

        // Else if second argument is object, apply recursive field mapping
        if (isObject(mapOrMeta)) {
            // Function to transform current value from original object
            const transformViewedValue = getDataMapper(mapOrMeta);

            // If original value is array, apply transforming function to all values inside
            if (isViewedValueArray && options.applyToElements)
                return viewedValue?.map(transformViewedValue);

            // Else if original value is object, apply transforming function to this object
            if (isObject(viewedValue)) return transformViewedValue(viewedValue);
        }

        return null;
    };
};

// Compose n arguments to one map function
export const composeFields = (names, map) => {
    const namesLenses = names.reduce((result, name) => {
        result.push(lens(name));

        return result;
    }, []);

    return (obj) => {
        const viewedValues = namesLenses.reduce((result, nameLens) => {
            result.push(view(nameLens, obj));

            return result;
        }, []);

        return map(viewedValues);
    };
};

export const mapArray = (mapper) => {
    return (array) => {
        if (!isArray(array)) return null;

        return array.map(mapper);
    };
};

export const getObjectId = (object) => {
    return isNil(object.id) ? null : Number(object.id);
};
