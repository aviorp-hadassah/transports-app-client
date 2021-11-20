<template>
  <q-page class="q-px-xl q-py-lg">
    <header class="row items-center justify-between">
      <h4 class="row items-center">
        <slot name="title"></slot>
      </h4>
      <slot name="header-buttons"></slot>
    </header>
    <slot></slot>
    <footer class="row justify-end space-left">
      <slot name="action-buttons"></slot>
    </footer>
  </q-page>
</template>

<script>
export default {
  name: "PageLayout",
};
</script>

<style lang="scss" scoped></style>
