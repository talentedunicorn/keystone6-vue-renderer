# keystone6-vue-renderer

> VueJs renderer for [keystonejs](https://keystonejs.com) `document` field

This is a VueJs port of [@keystone-6/document-renderer](https://github.com/keystonejs/keystone/tree/main/packages/document-renderer) package.
However it currently has limited support with the following missing:
- relationships
- text alignment
- some inline marks
  - keyboard
  - superscript
  - subscript

These may be supported in the future and contributions are welcome.

If you absolutely need to have these features, I recommend checking out [keystone6-documentrenderer-vue](https://github.com/craigharman/keystone6-documentrenderer-vue)

## Installation

```
npm install -S keystone6-vue-renderer

## or

yarn add keystone6-vue-renderer
```

## Usage

In your component import `Document` and use it like so...

```
<script>
import { Document } from 'keystone6-vue-renderer';

...

export default ({
  ...
  components: {
    Document
  },
  ...
})
</script>

<template>
  <Document :document="document" />
</template>
```

## Run development server
```
npm run dev

```
