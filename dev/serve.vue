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
  <main id="app">
    <header>
      <h1>Keystone6VueRenderer</h1>
      <a href="https://github.com/talentedunicorn/keystone6-vue-renderer" title="GitHub repository">GitHub</a>
    </header>
    <section>
      <p>This is a VueJs port of <a href="https://github.com/keystonejs/keystone/tree/main/packages/document-renderer">@keystone-6/document-renderer package</a>.</p>
      <p>It renderers the <code>document</code> field data of <a href="https://keystonejs.com">KeystoneJS</a> CMS data to html and lets you handle the styling.</p>
    </section>
    <section>
      <h2>Example</h2>
      <Document :document="doc" />
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
html,
body {
  margin: 0;
}

</style>
<style scoped>
#app {
  font-family: 'Source Sans Pro', sans-serif;
}

a {
  text-decoration: none;
  color: hsl(214, 60%, 44%);
}

header,
section {
  padding: 2rem;
}

header {
  background: hsl(0, 9%, 91%);
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

header h1 {
  margin: 0;
  font-weight: normal;
}
</style>
