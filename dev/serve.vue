<script lang="ts">
import Vue from "vue";
import sampleDoc from "./test-data.json";
// Uncomment import and local "components" registration if library is not registered globally.
// import { Keystone6VueRenderer } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev",
  data() {
    return {
      doc: sampleDoc,
    };
  },
  // components: {
  //  Keystone6VueRenderer,
  // }
});
</script>

<template>
  <div id="app">
    <Document :document="doc" />
  </div>
</template>

<style scoped>
#app {
  font-family: sans-serif;
}
</style>
