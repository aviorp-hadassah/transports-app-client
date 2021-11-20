<template>
  <q-card class="q-pa-lg q-my-md shadow-6" style="min-width: 250px" bordered square>
    <h5 class="q-mb-md">
      <slot name="title"></slot>
    </h5>
    <div class="row q-col-gutter-md justify-between">
      <slot></slot>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "SectionLayout",
};
</script>
