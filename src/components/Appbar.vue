<template>
  <q-header  class="header">
    <q-toolbar >
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggle-menu')"
      />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
      <div class="row q-gutter-md q-pa-sm justify-center items-center">
        <q-btn flat fab-mini icon="settings">
          <q-tooltip style="font-size: 14px">הגדרות</q-tooltip>
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
              </div>
              <q-separator vertical inset class="q-mx-lg" />
              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
        <q-btn flat fab-mini icon="logout" @click="$emit('logout')">
          <q-tooltip style="font-size: 14px"> התנתקות </q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Appbar",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $dark;
}

</style>
