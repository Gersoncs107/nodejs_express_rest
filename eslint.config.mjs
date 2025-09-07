import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginJs from "@eslint/js";

export default defineConfig([
  eslintPluginJs.configs.recommended,
  {    
    files: ["**/*.js"],
    ignores: ["node_modules", "dist", "build"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always'
    ],
      'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
    'no-console': 0
    },
  },
]);