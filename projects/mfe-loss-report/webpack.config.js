const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeLossReport",

  exposes: {
    "./Component": "./projects/mfe-loss-report/src/app/app.component.ts",
    "./Module":
      "./projects/mfe-loss-report/src/app/loss-report/loss-report.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
