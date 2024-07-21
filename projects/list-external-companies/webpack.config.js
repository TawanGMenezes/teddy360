const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "listExternalCompanies",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({


        // For remotes (please adjust)
        name: "listExternalCompanies",
        filename: "remoteEntry.js",
        exposes: {
            './ListCModule': './projects/list-external-companies/src/app/list-c/list-c.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "partner": "http://localhost:4201/remoteEntry.js",
        //     "core": "http://localhost:4200/remoteEntry.js",
        //     "externalCompanies": "http://localhost:4202/remoteEntry.js",
        //     "listPartner": "http://localhost:4203/remoteEntry.js",
        //     "about": "http://localhost:4200/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
