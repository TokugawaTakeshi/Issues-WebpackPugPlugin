import componentTemplate from "./ExampleMultipleFilesComponent.vue.pug";
import { Options as VueComponentConfiguration, Vue as VueComponent } from "vue-property-decorator";

const tmplVariables = {
  someText: 'Hello Pug!', // define the variable `someText` used in the template
};

@VueComponentConfiguration({
  template: componentTemplate(tmplVariables) // if is used the `method: 'compile'`, then template is the function, you can pass custom data
  //template: componentTemplate() // if is used the `method: 'compile'`, w/o custom data
  //template: componentTemplate // if is used the `method: 'render'`, then template is already rendered string
})
export default class ExampleMultipleFilesComponent extends VueComponent {}
