<template>
  <p>
    <fragment v-for="(content, index) in block.children" :key="index">
      <template v-if="content.bold"
        ><strong>{{ content.text }}</strong></template
      >

      <template v-else-if="content.strikethrough"
        ><s>{{ content.text }}</s></template
      >

      <template v-else-if="content.underline"
        ><u>{{ content.text }}</u></template
      >

       <template v-else-if="content.code"
        ><code>{{ content.text }}</code></template
      >

      <template v-else-if="content.italic"
        ><em>{{ content.text }}</em></template
      >

      <template v-else-if="content.type === 'link'"
        ><a :href="content.href">{{ content.children[0].text }}</a></template
      >

      <template v-else>{{ content.text }}</template>
    </fragment>
  </p>
</template>

<script lang="ts">
import Vue from "vue";
import { Fragment } from "vue-fragment";
import IDocItem from "../@types/document";
export default Vue.extend({
  name: "Paragraph",
  props: {
    block: {
      type: Object as () => IDocItem,
      required: true,
    },
  },
  components: {
    Fragment,
  },
});
</script>
