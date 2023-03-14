<script setup lang="ts">
import Document from './components/Document.vue';
import IDocItem from "./@types/document";
import doc from './test-data.json';
</script>
<template>
  <h1>Keystone6VueRenderer</h1>
  <p>A VueJs port of <a href="https://github.com/keystonejs/keystone/tree/main/packages/document-renderer">@keystone-6/document-renderer</a> package which transforms <a href="https://keystonejs.com/">KeystoneJS</a> content to HTML.</p>
  <Document :document="doc as IDocItem[]" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
