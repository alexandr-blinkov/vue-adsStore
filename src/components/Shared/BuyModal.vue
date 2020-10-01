<template>
  <v-dialog width="400px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn class="primary" v-on="on" tile>Купить</v-btn>
    </template>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <p class="text--primary">Вы хотите купить?</p>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="name"
                label="Ваше имя"
                type="text"
                v-model="name"
              ></v-text-field>
              <v-text-field
                name="phone"
                label="Ваш телефон"
                type="text"
                v-model="phone"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="onCancel"
                :disabled="localLoading"
              >
                Отменить
              </v-btn>
              <v-btn
                class="success"
                @click="onSave"
                :disabled="localLoading"
                :loading="localLoading"
              >
                Заказать
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.name = ''
        this.phone = ''
        this.modal = false
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
        }
      }
    }
  }
</script>
