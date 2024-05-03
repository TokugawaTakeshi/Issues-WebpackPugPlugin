<template lang="pug">
//- using `@webdiscus/pug-loader`, you can add indent here
ExampleSingleFileComponent
ExampleMultipleFilesComponent

</template>


<script lang="ts">

  /* --- Other components ------------------------------------------------------------------------------------------- */
  import ExampleSingleFileComponent from "./Components/ExampleSingleFileComponent.vue";
  import ExampleMultipleFilesComponent from "./Components/ExampleMultipleFilesComponent.vue";

  /* --- Framework -------------------------------------------------------------------------------------------------- */
  import { Options as VueComponentConfiguration, Vue as VueComponent } from "vue-property-decorator";


  @VueComponentConfiguration({
    components: {
      ExampleSingleFileComponent,
      ExampleMultipleFilesComponent
    }
  })
  export default class OverflowSafeSingleLineLabelComponentTestSite extends VueComponent {}

</script>
