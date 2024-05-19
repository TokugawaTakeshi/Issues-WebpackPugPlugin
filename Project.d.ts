declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}

declare module "*.pug" {
  // NOTE for importing a Pug template in TS:
  // - if is used the `method: 'compile'`, then template type is `Function` with the argument as an object {},
  //   this argument should contains variables, e.g. {var_name: 'var_value'}, used in template function.
  // - if is used the `method: 'render'`, then template type is `striing`,
  //   but works with this "fake declaration" as `Function` too

  const template: Function; // <-- HERE was false `string` type
  export default template;
}

declare module "pug-plugin" {
  import Webpack from "webpack";

  declare const PugPlugin: Webpack.Plugin;
  export default PugPlugin;

}

declare module "pug-parser";
