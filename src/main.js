import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

const vuetifyOptions = { }
Vue.use(Vuetify)

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(vuetifyOptions),
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp ({
      apiKey: "key",
      authDomain: "key",
      databaseURL: "key",
      projectId: "key",
      storageBucket: "key",
      messagingSenderId: "key",
      appId: "key",
      measurementId: "key"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
