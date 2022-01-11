<script lang="ts">
import Vue from "vue";
import { Fragment } from "vue-fragment";
import Paragraph from "./paragraph.vue";
import IDocItem from "../@types/document";
export default Vue.extend({
  name: "Document",
  components: {
    Fragment,
    Paragraph,
  },
  props: {
    document: {
      type: Array as () => IDocItem[],
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <fragment v-for="(block, index) in document" :key="index">
      <template v-if="block.type === 'paragraph'">
        <Paragraph :block="block" />
      </template>

      <template v-if="block.type === 'blockquote'">
        <blockquote>
          <fragment v-for="(content, index) in block.children" :key="index">
            <Paragraph :block="content" />
          </fragment>
        </blockquote>
      </template>

      <template v-if="block.type === 'code'">
        <pre><code>{{ block.children[0].text }}</code></pre>
      </template>

      <template v-if="block.type === 'heading'">
        <template v-if="block.level === 1">
          <h1>{{ block.children[0].text }}</h1>
        </template>
        <template v-if="block.level === 2">
          <h2>{{ block.children[0].text }}</h2>
        </template>
        <template v-if="block.level === 3">
          <h3>{{ block.children[0].text }}</h3>
        </template>
        <template v-if="block.level === 4">
          <h4>{{ block.children[0].text }}</h4>
        </template>
        <template v-if="block.level === 5">
          <h5>{{ block.children[0].text }}</h5>
        </template>
      </template>

      <template v-if="block.type === 'unordered-list'">
        <ul>
          <li v-for="(item, index) in block.children" :key="index">
            {{ item.children[0].children[0].text }}
          </li>
        </ul>
      </template>

      <template v-if="block.type === 'ordered-list'">
        <ol>
          <li v-for="(item, index) in block.children" :key="index">
            {{ item.children[0].children[0].text }}
          </li>
        </ol>
      </template>
    </fragment>
  </div>
</template>
