import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  { ignores: ["dist", "src/routeTree.gen.ts", "src/vite-env.d.ts"] },
  {
    // eslint-disable-next-line import/no-named-as-default-member
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  eslintPluginPrettier,

  {
    extends: [
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        alias: true,
        node: true,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "import/no-dynamic-require": "warn",
      "import/no-deprecated": "warn",
      "import/no-empty-named-blocks": "warn",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["./*.config.{js,ts}"],
        },
      ],
      "import/no-mutable-exports": "error",
      "import/no-commonjs": "error",
      "import/no-nodejs-modules": "warn",
      "import/no-nodejs-modules": "warn",
      "import/no-absolute-path": "error",
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "import/exports-last": "error",
      "import/first": "error",
      "import/newline-after-import": ["error", { count: 1 }],
      "import/group-exports": "error",
      "import/no-anonymous-default-export": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
          ],
        },
      ],
    },
  },

  {
    extends: [eslintPluginUnicorn.configs.all],
    rules: {
      "unicorn/no-keyword-prefix": "off",
    },
  },

  {
    rules: {
      "no-console": "error",
    },
  },
);
