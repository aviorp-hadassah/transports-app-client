<template>
  <q-layout view="hhh Lpr fff" >
    <Appbar @toggle-menu="leftDrawerOpen = !leftDrawerOpen" title="מערכת הסעות" />
    <SideBar
      :essentialLinks="essentialLinks"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      dark
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Appbar from "components/Appbar.vue";
import SideBar from "components/Sidebar.vue";
const linksList = [
  {
    title: "דף הבית",
    // caption: 'quasar.dev',
    icon: "home",
    link: "/#/",
  },
  {
    title: "יצירת הסעה חדשה",
    // caption: 'quasar.dev',
    icon: "note_add",
    link: "/#/create-transport",
  },
  {
    title: "ניהול הסעות",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/#/manage-transports",
  },
  {
    title: "היסטוריית הסעות",
    caption: "chat.quasar.dev",
    icon: "history",
    link: "/#/transports-history",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Appbar,
    SideBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
});
</script>
