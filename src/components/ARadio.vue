<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <p class="input-title">
      {{ title }} <span class="required-dot" v-if="required">*</span>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ARadio",
  props: {
    title: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.required-dot {
  color: #f83d03;
}
.input-title {
  font-size: 1rem;
}
</style>
