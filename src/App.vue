<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Магазин товров</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
        <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>

        <v-btn @click="onLogout" text v-if="isUserLoggedIn">
          <v-icon left>mdi-exit-to-app</v-icon>
          Выход
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list dense>

        <v-list-item :to="link.url" v-for="link of links" :key="link.title">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Выход'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <template v-if="error">
      <v-snackbar :multi-line="true" :timeout="5000" color="error" @input="closeError" :value="true">
        {{error}}
        <v-btn text dark @click.native="closeError">Закрыть</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: "Главная", icon: "mdi-home", url: "/" },
          { title: "Заказы", icon: "mdi-bookmark-outline", url: "/orders" },
          { title: "Новая зпись", icon: "mdi-note-plus-outline", url: "/new" },
          { title: "Мои записи", icon: "mdi-format-list-bulleted", url: "/list" }
        ]
      }
        return [
          { title: "Авторизация", icon: "mdi-lock", url: "/login" },
          { title: "Регистрация", icon: "mdi-face", url: "/registration" }
        ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>