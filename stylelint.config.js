module.exports = {
    plugins: ["stylelint-scss"],
    extends: ["stylelint-config-standard", "stylelint-config-prettier"],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        "color-hex-length": "long",
        "at-rule-no-unknown": null,
        "at-rule-empty-line-before": "never",
        "declaration-empty-line-before": "never",
        "no-empty-source": null,
    },
};
