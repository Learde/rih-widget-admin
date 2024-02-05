/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier/skip-formatting",
        "stylelint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "n/no-missing-import": "off",
        "n/no-extraneous-import": [
            "error",
            {
                allowModules: ["lodash"],
            },
        ],
    },
};
