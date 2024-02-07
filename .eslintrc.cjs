/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier/skip-formatting",
        "plugin:import/errors",
        "plugin:import/warnings",
        "stylelint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [["@", "./src"]],
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
        },
    },
    rules: {
        "n/no-missing-import": "off",
        "sort-imports": "off",
        "n/no-extraneous-import": [
            "error",
            {
                allowModules: ["lodash"],
            },
        ],
        "import/order": [
            "error",
            {
                alphabetize: { order: "asc", caseInsensitive: true },
                "newlines-between": "always",
                pathGroups: [
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/assets/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/components/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/icones/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/lib/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/stores/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "@/views/**",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"],
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            },
        ],
    },
};
