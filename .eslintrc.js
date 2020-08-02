module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    "async_com": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "html"
  ],
  "settings": {
    "html/html-extensions": [".vue"]
  },
  "rules": {
    "no-console": "off",
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "space-infix-ops": [
      "error"
    ],
    "multiline-ternary": [
      "error",
      "never"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-shadow": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ]
  }
}