<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <p class="input-title">
      {{ title }} <span class="required-dot" v-if="required">*</span>
    </p>
    <q-input square outlined dense  v-bind="$attrs" @click="$refs.qDateProxy.show()" mask="" class="cursor-pointer">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-bind="$attrs">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="סגירה" color="primary" push />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ADate",
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


.q-field__inner {
  background-color: red !important;
   border: 1px solid pink;
}

.q-field--readonly {
  .q-field__inner {
    opacity: 1;
    background: transparent;
    border: 1px solid pink !important;
  }
}
</style>
