<template>
  <div v-if="!loading">
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title>{{ ad.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ ad.title }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Открыть</v-btn>
              <BuyModal color="primary" raised :ad="ad">Купить</BuyModal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

  <div v-else>
    <v-app>
      <v-layout justify-center align-center>
        <v-progress-circular
          indeterminate
          :size="100"
          :width="8"
          color="purple"
        ></v-progress-circular>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import BuyModal from "./Shared/BuyModal";

export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
    loading() {
      return this.$store.getters.loading;
    },
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
  },
  components: {
    BuyModal,
  },
};
</script>

<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 0);
  padding: 10px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
