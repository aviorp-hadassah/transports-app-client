<template>
  <div
    class="
      fullscreen
      bg-primary
      text-white text-center
      q-pa-md
      flex flex-center
    "
  >
    <div>
      <div style="font-size: 30vh; opacity: .9" class="text-dark">404</div>

      <div class="text-h2 q-mb-md text-dark" style="opacity: 0.6">
        אופס.. טעות בכתובת
      </div>
      <div class="text-h5 text-dark" style="opacity: 0.6">
        הדף שחיפשת לא קיים..
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="dark"
        unelevated
        to="/#/"
        label="חזרה לדף הבית"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>
