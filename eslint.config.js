// eslint.config.js
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const jsdoc = require("eslint-plugin-jsdoc");
const prettier = require("eslint-config-prettier");
const angular = require("angular-eslint/configs");

module.exports = tseslint.config(
  // Ignorés
  {
    ignores: ["node_modules/**", "dist/**", ".angular/**", "**/*.spec.ts"],
  },

  // TypeScript + Angular
  {
    files: ["**/*.ts"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier,
    ],
    plugins: {
      jsdoc,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      "@angular-eslint/no-empty-lifecycle-method": "warn",
      "@angular-eslint/use-lifecycle-interface": "error",

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",

      "jsdoc/require-jsdoc": "off",

      "no-console": "warn",
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
    },
  },

  // HTML Angular templates
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/no-negated-async": "warn",
      "@angular-eslint/template/use-track-by-function": "warn",
    },
  },
);
