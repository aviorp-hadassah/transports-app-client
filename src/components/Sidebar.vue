<template>
  <q-drawer v-bind="$attrs">
    <div class="column justify-center items-center q-pa-lg space-bottom">
    <!-- <q-avatar size="84px" color="orange">J</q-avatar> -->
    <q-avatar size="84px">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <h6 class="divider">שלום, אביגדור פליצרמן</h6>
    </div>
    <q-list dark>
      <q-item-label header>תפריט ניווט</q-item-label>
      <EssentialLink
        v-for="(link, index) in essentialLinks"
        :key="index"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
export default {
  name: "Sidebar",
  props: {
    essentialLinks: {
      type: Array,
      required: true,
    },
  },
  components: {
    EssentialLink,
  },
};
</script>


<style lang="scss" scoped>
.divider {
  &::after {
    content:'';
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
  }
}
</style>