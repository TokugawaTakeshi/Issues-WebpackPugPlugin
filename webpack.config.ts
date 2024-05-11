import Webpack from "webpack";
import Path from "path";
import { VueLoaderPlugin } from "vue-loader";

const webpackConfig: Webpack.Configuration = {

  context: Path.resolve(process.cwd(), "Source"),
  entry: "./index.ts",
  output: {
    filename: "index.js",
    path: Path.resolve(process.cwd(), "Build")
  },
  watch: false,

  module: {
    rules: [

      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [ /\.vue$/ ]
        }
      },

      {
        test: /\.vue$/,
        loader: "vue-loader"
      },

      /* ==== Pug plugin ============================================================================================ */
      {
        test: /\.vue.pug$/,
        oneOf: [
          // allow <template lang="pug"> in Vue components
          {
            resourceQuery: /.vue$/u,
            loader: '@webdiscus/pug-loader', // <-- it is same pug-loader as in PugPlugin.loader
            options: {
              mode: 'html', // render Pug into pure HTML string
            },
          },
          // allow import of Pug in JS/TS and for "other cases", if a file hasn't the extension `.vue`
          {
            resourceQuery: ".vue.ts",
            loader: '@webdiscus/pug-loader', // <-- it is same pug-loader as in PugPlugin.loader
            options: {
              mode: 'compile', // compile Pug into template function, use it if you want pass custom data into template on clinet-side rendering.
              //mode: 'render', // compile Pug into template string, use if your template has't external custom data, generates smallest file
              //esModule: true, // should be `true` for importing in ES module, e.g. `import tmpl from './myTemplate.pug';`
                              // defaults is false, used for CommonJS, e.g.  `const tmpl = require('./myTemplate.pug');`
                              // NOTE: this option is optional, if it is not defined, importing in ES module works too.
            },
          },
        ],
      },

      {
        test: /(?!.*\.vue\.pug$).*\.pug$/,
        loader: '@webdiscus/pug-loader',
        options: {
          mode: 'render'
        },
      },

    ]
  },

  resolve: {
    extensions: [ ".js", ".ts" ],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({
      /* [ Theory ] Settings for the Vue 3 which must be defined explicitly. */
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    })
  ],
};


export default webpackConfig;
