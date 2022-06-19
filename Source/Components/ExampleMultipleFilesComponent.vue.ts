import componentTemplate from "./ExampleMultipleFilesComponent.vue.pug";
import { Options as VueComponentConfiguration, Vue as VueComponent } from "vue-property-decorator";


@VueComponentConfiguration({
  template: componentTemplate
})
export default class ExampleMultipleFilesComponent extends VueComponent {}
