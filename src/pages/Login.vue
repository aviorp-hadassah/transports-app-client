<template>
  <div class="row space-between q-mx-lg" style="height: 100vh">
    <div
      class="col-10 col-md-6 flex justify-center content-center"
      v-if="$q.screen.gt.md"
    >
      <img
        src="~/assets/authentication.svg"
        class="responsive"
        alt="login-image"
      />
    </div>
    <div
      class="col-12 col-md-6 flex content-center justify-center items-center"
    >
      <q-card
        :style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
        class="mx-auto"
      >
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~/assets/male_avatar.svg" alt="avatar" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-xl column">
            <div class="col text-h6 ellipsis flex justify-center">
              <h3 class="text-h3 text-uppercase q-my-none text-weight-regular">
                התחברות
              </h3>
              <!-- <h5 class="text-h5 text-uppercase q-my-none text-weight-regular">
                מערכת הסעות
              </h5> -->
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="שם משתמש" v-model="username"> </q-input>
            <q-input label="סיסמה" type="password" v-model="password">
            </q-input>
            <div>
              <q-btn
                class="full-width"
                color="dark"
                label="התחברות"
                type="submit"
                rounded
                dark
                @click="submitForm"
              ></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link to="/login" clas>שכחתי סיסמה</router-link>
                <router-link to="/login">הרשמה</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
    this.$router.push({name:'home'})
    },
  },
};
</script>

<style lang="scss" scoped></style>
