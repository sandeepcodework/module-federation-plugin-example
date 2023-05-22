const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeFAQ",

  exposes: {
    "./Component": "./projects/mfe-faq/src/app/app.component.ts",
    "./Module": "./projects/mfe-faq/src/app/faq/faq.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
