const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeUser",

  exposes: {
    // './Component': './projects/mfe-user/src/app/app.component.ts',
    "./Component": "./projects/mfe-user/src/app/app.component.ts",
    "./Module": "./projects/mfe-user/src/app/profile/profile.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
