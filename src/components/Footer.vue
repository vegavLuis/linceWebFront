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
      <div class="d-flex flex-wrap justify-space-evenly redes">
        <v-card color="transparent" elevation="0">
          <a :href="storeRedes.data[0].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[0].color"
              :icon="storeRedes.data[0].icon"
            ></v-icon>
          </a>
          <a :href="storeRedes.data[5].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[5].color"
              :icon="storeRedes.data[5].icon"
            ></v-icon>
          </a>
          <p>Nuetras experiencias</p>
        </v-card>
        <v-card color="transparent" elevation="0">
          <a :href="storeRedes.data[3].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[3].color"
              :icon="storeRedes.data[3].icon"
            ></v-icon>
          </a>
          <a :href="storeRedes.data[2].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[2].color"
              :icon="storeRedes.data[2].icon"
            ></v-icon>
          </a>
          <a :href="storeRedes.data[1].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[1].color"
              :icon="storeRedes.data[1].icon"
            ></v-icon>
          </a>
          <p>Contactanos</p>
        </v-card>
        <v-card color="transparent" elevation="0">
          <a :href="storeRedes.data[4].to">
            <v-icon
              class="ma-2"
              size="50px"
              :color="storeRedes.data[4].color"
              :icon="storeRedes.data[4].icon"
            ></v-icon>
          </a>
          <p>Ubicacion</p>
        </v-card>
      </div>
      <!-- <template v-for="item in storeRedes.data" :key="item">
        <router-link :to="item.to" style="text-decoration: none; color: inherit">
          <v-card class="ma-2" elevation="0" color="transparent">
            <v-icon class="ma-2" size="50px" :color="item.color" :icon="item.icon"> </v-icon>
            <p>{{ item.texto }}</p>
          </v-card>
        </router-link>
      </template> -->
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
      <a href="mailto:sillaslince@gmail.com" class="router">
        <!-- <v-icon class="mail">mdi-gmail</v-icon> -->
        <p class="small mr-4 pt-2">Quejas y sugerencias</p>
      </a>
      <!-- <div class="d-flex flex-column">
      </div> -->
      <!-- <v-btn color="transparent">
        <v-icon icon="mdi-map-marker" color="red"></v-icon>
      </v-btn> -->
      <!-- <v-btn color="transparent">
        <v-icon size="x-large" icon="mdi-facebook" color="#3b5998"></v-icon>
      </v-btn> -->
      <!-- <v-btn color="transparent">
        <v-icon size="x-large" icon="mdi-instagram" color="#E1306C"></v-icon>
      </v-btn> -->
      <v-col cols="12" class="text-center mt-6">
        <p class="text-center">DISTRIBUIDORES AUTORIZADOS</p>
      </v-col>
      <v-card elevation="0" color="transparent" class="d-flex flex-wrap">
        <!-- Primer container -->
        <v-card color="transparent" class="d-flex flex-1-1-100 justify-center" elevation="0">
          <v-card
            width="100px"
            height="100px"
            color="transparent"
            elevation="0"
            class="mx-4 imagen"
          >
            <v-img :src="data.datos[0].src" width="100%" height="100%"></v-img>
          </v-card>
          <v-card
            width="100px"
            height="100px"
            color="transparent"
            elevation="0"
            class="mx-4 imagen"
          >
            <v-img :src="data.datos[1].src" width="100%" height="100%"></v-img>
          </v-card>
          <v-card
            width="100px"
            height="100px"
            color="transparent"
            elevation="0"
            class="mx-4 imagen"
          >
            <v-img :src="data.datos[2].src" width="100%" height="100%"></v-img>
          </v-card>
        </v-card>
        <!-- Segundo container -->
        <v-card color="transparent" class="d-flex flex-1-1-100 justify-center" elevation="0">
          <v-card width="80px" height="80px" color="transparent" elevation="0" class="mx-4 imagen">
            <v-img :src="data.datos[3].src" width="100%" height="100%"></v-img>
          </v-card>
          <v-card width="80px" height="80px" color="transparent" elevation="0" class="mx-4 imagen">
            <v-img :src="data.datos[4].src" width="100%" height="100%"></v-img>
          </v-card>
        </v-card>
      </v-card>
      <!-- <v-card
        width="55px"
        height="55px"
        elevation="0"
        class="mr-12"
        color="transparent"
        v-for="itema in data.datos"
        :key="itema.id"
      >
        <v-img :src="itema.src" class="imagen"></v-img>
      </v-card> -->
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
.router {
  text-decoration: none;
  color: white;
}
.redes {
  width: 90vw;
}
.mail {
  color: #ef5350;
}
@media (width <= 400px) {
  .imagen {
    width: 60px !important;
    height: 60px !important;
  }
}
</style>
