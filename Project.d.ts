declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}

declare module "*.pug" {
  const template: string;
  export default template;
}

declare module "pug-plugin" {

  import Webpack from "webpack";

  declare const PugPlugin: Webpack.Plugin;
  export default PugPlugin;

}
