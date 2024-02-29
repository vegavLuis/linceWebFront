<script setup>
import { ref, onMounted } from 'vue'
import { useDistribuidores } from '../stores/distribuidores'
import { useRedesSociales } from '../stores/redesSociales.js'

const data = useDistribuidores()
const storeRedes = useRedesSociales()
</script>

<template>
  <v-footer color="#020202" class="mt-12 text-center d-flex flex-column">
    <v-row justify="center" no-gutters>
      <template v-for="item in storeRedes.data" :key="item">
        <router-link :to="item.to" style="text-decoration: none; color: inherit">
          <v-card class="ma-2" elevation="0" color="transparent">
            <v-icon class="ma-2" size="50px" :color="item.color" :icon="item.icon"> </v-icon>
            <p>{{ item.texto }}</p>
          </v-card>
        </router-link>
      </template>
      <!--
      <v-col cols="12" class="text-center mt-6">
        <h6 class="text-center">DISTRIBUIDORES AUTORIZADOS</h6>
      </v-col>
       <v-card
        width="150px"
        height="150px"
        elevation="0"
        class="mr-12"
        color="transparent"
        v-for="item in data.datos"
        :key="item.id"
      >
        <v-img :src="item.src" class="imagen"></v-img>
      </v-card> -->
      <v-col cols="12">
        <v-divider :thickness="4" class="border-opacity-100 mt-6 mb-6" color="white"></v-divider>
      </v-col>
      <p class="small mr-4 pt-2">@ 2018 por Roe-Mex México</p>
      <p class="small mr-4 pt-2">Email: sillaslince@gmail.com</p>
      <p class="small mr-4 pt-2">Tel: + (55) 5441 9219 / (55) 5732 9348</p>
      <p class="small mr-4 pt-2">WhatsApp: 5581020704</p>
      <!-- <div class="d-flex flex-column">
      </div> -->
      <v-btn color="transparent">
        <v-icon icon="mdi-map-marker" color="red"></v-icon>
      </v-btn>
      <!-- <v-btn color="transparent">
        <v-icon size="x-large" icon="mdi-facebook" color="#3b5998"></v-icon>
      </v-btn> -->
      <v-btn color="transparent">
        <v-icon size="x-large" icon="mdi-instagram" color="#E1306C"></v-icon>
      </v-btn>
      <v-col cols="12" class="text-center mt-6">
        <p class="text-center">DISTRIBUIDORES AUTORIZADOS</p>
      </v-col>

      <v-card
        width="30px"
        height="30px"
        elevation="0"
        class="mr-12"
        color="transparent"
        v-for="itema in data.datos"
        :key="itema.id"
      >
        <v-img :src="itema.src" class="imagen"></v-img>
      </v-card>
    </v-row>
  </v-footer>
</template>
<style scoped>
.imagen {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
</style>
