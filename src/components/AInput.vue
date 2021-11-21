<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <p class="input-title">
      {{ title }} <span class="required-dot" v-if="required">*</span>
    </p>
    <q-input square outlined dense v-bind="$attrs" :rules="rules"> </q-input>
  </div>
</template>

<script>
import ValidationMixin from "src/mixins/ValidationMixin";
export default {
  name: "AInput",
  mixins: [ValidationMixin],
  data() {
    return {
      rules: [],
    };
  },
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
  beforeMount() {
    if (this.required) this.rules.push(this.requiredRule);
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
