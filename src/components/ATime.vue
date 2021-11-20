<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <p class="input-title">
      {{ title }} <span class="required-dot" v-if="required">*</span>
    </p>
    <q-input square outlined dense v-bind="$attrs" @click="$refs.qTimeProxy.show()">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale"  ref="qTimeProxy">
            <q-time v-bind="$attrs">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="סגירה" color="secondary" push />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ATime",
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
