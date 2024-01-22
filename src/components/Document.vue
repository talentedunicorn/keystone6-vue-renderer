<script lang="ts">
import Paragraph from "./Paragraph.vue";
import IDocItem from "../@types/document";
export default {
  name: "Document",
  components: {
    Paragraph,
  },
  props: {
    document: {
      type: Array as () => IDocItem[],
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <template v-for="(block, index) in document" :key="index">
      <template v-if="block.type === 'paragraph'">
        <Paragraph :block="block" />
      </template>

      <template v-if="block.type === 'blockquote'">
        <blockquote>
          <template v-for="(content, index) in block.children" :key="index">
            <Paragraph :block="content as unknown as IDocItem" />
          </template>
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
            <template v-if="item.children">
              <template v-if="item.children[0].children">
                {{ item.children[0].children[0].text }}
              </template>
            </template>
          </li>
        </ul>
      </template>

      <template v-if="block.type === 'ordered-list'">
        <ol>
          <li v-for="(item, index) in block.children" :key="index">
            <template v-if="item.children">
              <template v-if="item.children[0].children">
                {{ item.children[0].children[0].text }}
              </template>
            </template>
          </li>
        </ol>
      </template>
    </template>
  </div>
</template>