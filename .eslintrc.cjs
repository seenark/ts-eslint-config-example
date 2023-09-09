module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
  overrides: [
    {
      files: ["**/__test__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
