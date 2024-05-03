<template lang="pug">
//- using `@webdiscus/pug-loader`, you can add indent here
div Example single file component

</template>


<script lang="ts">

  import { Options as VueComponentConfiguration, Vue as VueComponent } from "vue-property-decorator";


  @VueComponentConfiguration({})
  export default class ExampleSingleFileComponent extends VueComponent {}

</script>
