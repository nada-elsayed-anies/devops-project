const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        files: ["script.js", "tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                document: "readonly",
                require: "readonly",
                module: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn" /* if error insteed of warning it will stops the CI */
        }
    }
];