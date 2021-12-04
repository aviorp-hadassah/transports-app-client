<template>
  <page-layout>
    <template #title>דף הבית</template>
    <section-layout>
      <template #title>ברוך הבא, אביגדור פליצרמן</template>
      <p class="text-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        eligendi.
      </p>
    </section-layout>
    <div class="row q-my-md justify-between">
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>כותרת 1</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>כותרת 2</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>כותרת 3</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
    </div>

    <section-layout>
      <template #title>ההסעות האחרונות שלך</template>
      <q-table
        class="q-my-lg q-mx-auto full-width shadow-10"
        square
        :columns="columns"
        :rows="rows"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="origin" :props="props">
              {{ props.row.origin }}
            </q-td>
            <q-td key="destination" :props="props">
              {{ props.row.destination }}
            </q-td>
            <q-td key="fromDate" :props="props">
              {{ props.row.fromDate }}
            </q-td>
            <q-td key="toDate" :props="props">
              {{ props.row.toDate }}
            </q-td>
            <q-td key="fromTime" :props="props">
              {{ props.row.fromTime }}
            </q-td>
            <q-td key="toTime" :props="props">
              {{ props.row.toTime }}
            </q-td>
            <q-td key="numberOfSeats" :props="props">
              {{ props.row.numberOfSeats }}
            </q-td>
            <q-td key="vehicleType" :props="props">
              {{ props.row.vehicleType }}
            </q-td>
            <q-td key="contactName" :props="props">
              {{ props.row.contactName }}
            </q-td>
            <q-td key="contactPhone" :props="props">
              {{ props.row.contactPhone }}
            </q-td>
            <q-td key="isPermanent" :props="props">
              <q-icon
                v-if="props.row.isPermanent"
                name="check_"
                color="green"
                size="sm"
              ></q-icon>
              <q-icon
                v-else
                name="clear"
                color="red"
                size="sm"
                class="q-mr-lg"
              ></q-icon>
            </q-td>
            <q-td key="status" :props="props" class="status">
              <q-icon
                v-if="props.row.status === 2"
                name="schedule"
                color="orange"
                size="sm"
                class="q-mr-lg"
              />
              <q-icon
                v-if="props.row.status === 1"
                name="done"
                color="green"
                size="sm"
                class="q-mr-lg"
              />
              <q-icon
                v-if="props.row.status === 0"
                name="close"
                color="red"
                size="sm"
                class="q-mr-lg"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </section-layout>
  </page-layout>
</template>

<script>
import { defineComponent } from "vue";
import PageLayout from "layouts/PageLayout.vue";
import SectionLayout from "layouts/SectionLayout.vue";
import { getTransports } from "src/api/transport";
import LoadingMixin from "src/mixins/LoadingMixin";
import NotificationMixin from "src/mixins/NotificationMixin";
import { mapFields } from "vuex-map-fields";
import { mapState } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    PageLayout,
    SectionLayout,
  },
  mixins: [LoadingMixin, NotificationMixin],
  data() {
    return {
      columns: [
        {
          name: "origin",
          align: "center",
          label: "מוצא",
          field: "origin",
          sortable: true,
        },
        {
          name: "destination",
          align: "center",
          label: "יעד",
          field: "destination",
          sortable: true,
        },
        {
          name: "fromDate",
          align: "center",
          label: "מתאריך",
          field: "fromDate",
          format: (val) => `${formatDate(val, "DD/MM/YYYY")}`,
          sortable: true,
        },
        {
          name: "toDate",
          align: "center",
          label: "עד תאריך",
          field: "toDate",
          sortable: true,
        },
        {
          name: "fromTime",
          align: "center",
          label: "משעה",
          field: "fromTime",
          sortable: true,
        },
        {
          name: "toTime",
          align: "center",
          label: "עד שעה",
          field: "toTime",
          sortable: true,
        },
        {
          name: "numberOfSeats",
          align: "center",
          label: "מספר מושבים",
          field: "numberOfSeats",
          sortable: true,
        },
        {
          name: "vehicleType",
          align: "center",
          label: "סוג רכב",
          field: "vehicleType",
          sortable: true,
        },
        {
          name: "contactName",
          align: "center",
          label: "שם איש קשר",
          field: "contactName",
          sortable: true,
        },
        {
          name: "contactPhone",
          align: "center",
          label: "מספר איש קשר",
          field: "contactPhone",
          sortable: true,
        },
        {
          name: "isPermanent",
          align: "center",
          label: "קו קבוע",
          field: "isPermanent",
          sortable: true,
        },
        {
          name: "status",
          align: "center",
          label: "סטטוס",
          field: "isActive",
          sortable: true,
        },
      ],
      rows: [],
    };
  },
  async created() {
    try {
      this.toggleLoading();
      this.rows = await getTransports();
    } catch (error) {
      console.error(error);
      this.triggerNotification("negative", "התרחשה שגיאה בהבאת הנתונים.");
    } finally {
      this.toggleLoading();
    }
  },
});
</script>
