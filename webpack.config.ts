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
        //test: /\.vue.pug$/, // WRONG RegExp: define exact the `/\.pug$/`
        test: /\.pug$/, // this the universal entry rule for all use cases of Pug (NOT MODIFY!)
        oneOf: [
          {
            test: /\.custom\.pug$/,
            use: [
              Path.resolve("PugAST_Loader.ts"),
            ]
          },
          // Define only 2 loaders:
          // 1) Render Pug code from <template lang="pug"> in Vue components
          {
            resourceQuery: /^\?vue/u, // <= use the right RegExp (NOT MODIFY!)
            //resourceQuery: /.vue$/u, // <= you used the WRONG RegExp
            loader: '@webdiscus/pug-loader',
            options: {
              mode: 'html', // render Pug into pure HTML string
            },
          },
          // 2) Compile Pug into a template function when a Pug file is imported in JS/TS
          {
            //resourceQuery: ".vue.ts", // <= WRONG: don't use any condition in the second loader, this is `ELSE` logic (if NOT 1 rule, then 2 rule)
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

      // this is WRONG place, don't define yet one Pug loader anywhere outer the `test: /\.pug$/,` rule
      // {
      //   test: /(?!.*\.vue\.pug$).*\.pug$/,
      //   loader: '@webdiscus/pug-loader',
      //   options: {
      //     mode: 'render'
      //   },
      // },

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
