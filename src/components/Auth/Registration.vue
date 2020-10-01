<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="confirm-password"
                label="Подтверждение пароля"
                type="password"
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="loading"
              :disabled="!valid || loading"
              @click="onSubmit"
            >Регистрация</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail не может быть пустым',
          v => emailRegex.test(v) || 'Некорректный e-mail'
        ],
        passwordRules: [
          v => !!v || 'Пароль не может быть пустым',
          v => (v && v.length >= 6) || 'Пароль должен содержать не менее 6 символов'
        ],
        confirmPasswordRules: [
          v => !!v || 'Пароль не может быть пустым',
          v => v === this.password || 'Пароли не совпадют'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }

          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>
