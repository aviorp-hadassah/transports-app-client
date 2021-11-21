<template>
  <page-layout>
    <template #title>יצירת הסעה חדשה</template>
    <q-form ref="form" greedy>
      <section-layout>
        <template #title>טופס יצירת הסעה חדשה</template>
        <a-input
          title="מוצא"
          v-model="form.origin"
          required
     
        ></a-input>
        <a-input
          title="יעד"
          v-model="form.destination"
          required
        ></a-input>
        <a-date
          title="מתאריך"
          v-model="form.fromDate"
          required
        ></a-date>
        <a-date
          title="עד תאריך"
          v-model="form.toDate"
          required
        ></a-date>
        <a-time
          title="משעה"
          v-model="form.fromTime"
          required
        ></a-time>
        <a-time
          title="עד שעה"
          v-model="form.toTime"
          required
        ></a-time>
        <a-input
          title="מספר מושבים"
          v-model="form.numberOfSeats"
          required
        ></a-input>
        <a-select
          title="סוג רכב"
          v-model="form.vehicleType"
          :options="vehicleOptions"
          required
        ></a-select>
        <a-input
          title="שם איש קשר"
          v-model="form.contactName"
          required
        ></a-input>
        <a-input
          title="מספר איש קשר"
          v-model="form.contactPhone"
          required
        ></a-input>
        <a-input
          title="מסלול"
          v-model="form.route"
          
        ></a-input>

        <a-radio title="קו קבוע?" required>
          <q-radio v-model="form.isPermanent" :val="true" label="כן"></q-radio>
          <q-radio v-model="form.isPermanent" :val="false" label="לא"></q-radio>
        </a-radio>
      </section-layout>
    </q-form>
    <template #action-buttons>
      <q-btn dark push @click="clearForm">נקה טופס</q-btn>
      <q-btn color="primary" text-color="dark" push @click="onSubmit">שלח טופס</q-btn>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "src/layouts/PageLayout.vue";
import SectionLayout from "src/layouts/SectionLayout.vue";
import AInput from "components/AInput.vue";
import ASelect from "components/ASelect.vue";
import ADate from "components/ADate.vue";
import ATime from "components/ATime.vue";
import ARadio from "components/ARadio.vue";
import LoadingMixin from "../mixins/LoadingMixin.js";
import NotificationMixin from "../mixins/NotificationMixin.js";
import ValidationMixin from "../mixins/ValidationMixin.js";
import { formatDate } from "../utils";
import { createTransport } from "../api/transport";
export default {
  name: "CreateTransport",
  components: {
    PageLayout,
    SectionLayout,
    AInput,
    ASelect,
    ADate,
    ATime,
    ARadio,
  },
  mixins: [LoadingMixin, NotificationMixin, ValidationMixin],
  data() {
    return {
      test: "",
      form: {
        origin: "",
        destination: "",
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: "",
        isPermanent: null,
        numberOfSeats: null,
        vehicleType: "",
        contactName: "",
        contactPhone: "",
        route: "",
      },
      vehicleOptions: ["מרצדס", "רנו", "סקודה"],
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.form.validate();
      if (!isValid || this.form.isPermanent === null) {
        console.log(this.form.isPermanent);
        return this.triggerNotification("negative", "שדות אלה שדות חובה.");
      }
      this.toggleLoading();
      try {
        const payload = { ...this.form };
        payload.fromDate = formatDate(payload.fromDate);
        payload.toDate = formatDate(payload.toDate);
        const { status } = await createTransport(payload);
        if (status !== 201) {
          this.triggerNotification("negative", "שגיאה בשליחת הטופס.");
        }
        this.triggerNotification("positive", "הטופס נשלח בהצלחה");
      } catch (error) {
        this.triggerNotification(
          "negative",
          "התרחשה שגיאת שרת, נא לנסות שנית מאוחר יותר."
        );
        console.error(error);
      } finally {
        this.toggleLoading();
      }
    },
    clearForm() {
      this.form = {
        origin: "",
        destination: "",
        fromDate: "",
        toDate: "",
        fromHour: null,
        toHour: null,
        isPermanent: null,
        numberOfSeats: null,
        vehicleType: "",
        contactNumber: "",
        contactName: "",
        route: "",
      };
    },
  },
};
</script>
