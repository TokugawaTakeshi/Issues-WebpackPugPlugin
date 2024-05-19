import { createApp as createVueApplication } from "vue";
import OverflowSafeSingleLineLabelComponentTestSite from "./ApplicationRootComponent.vue";

// import as template function, because so is configure in webpack using the `mode: 'compile'`option
import TestFn from "./Components/Test.pug";

// import as rendered HTML string using the `?render` query (the same result using `mode: 'render'`option)
// @ts-ignore: Cannot find module ./Components/Test.pug?render or its corresponding type declarations.
import TestHtml from "./Components/Test.pug?render";

import Custom from "./Components/Custom.custom.pug"

console.log('=> Compiled template function: ', TestFn());
console.log('=> Rendered HTML: ', TestHtml);

console.log(Custom);

createVueApplication(OverflowSafeSingleLineLabelComponentTestSite).mount("#APPLICATION");

