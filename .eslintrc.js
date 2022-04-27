module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
