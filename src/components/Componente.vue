<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { usePrimerApartadoHome } from '../stores/primerApartadoHome.js'
import ima1 from '@/assets/lince1.jpg'
import ima2 from '@/assets/Cultur.jpg'

const data = ref([])

onMounted(() => {
  data.value = usePrimerApartadoHome()
  // console.log(data.value.datos)
})
</script>

<template>
  <!-- <font-awesome-icon :icon="['fab', 'instagram']" size="2xl" /> -->
  <v-card class="my-4 mx-4" elevation="0" color="transparent">
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <a href="/sillas-de-uso-diario">
          <h3 class="text-uppercase">Línea de uso diario</h3>
        </a>
      </v-col>
      <v-col cols="12" md="6">
        <router-link to="/sillas-de-uso-diario">
          <v-img :src="ima1" class="ima1" aspect-ratio="16/9" :lazy-src="ima1" eager></v-img>
        </router-link>
      </v-col>
    </v-row>
  </v-card>
  <v-card class="my-4 mx-4" elevation="0" color="transparent">
    <v-row>
      <v-col cols="12" md="6" order="1" order-md="0">
        <router-link to="/sillas-deportivas">
          <v-img :src="ima2" class="ima2" aspect-ratio="16/9" :lazy-src="ima1" eager></v-img>
        </router-link>
      </v-col>
      <v-col cols="12" md="6" order="0" order-md="1" class="d-flex justify-center align-center">
        <a href="/sillas-deportivas">
          <h3 class="text-uppercase">Línea deportiva</h3>
        </a>
      </v-col>
    </v-row>
  </v-card>
  <!-- <v-row class="pt-6">
    <v-col cols="12" md="6" v-for="item in data.datos" :key="item.src">
      <router-link :to="item.to">
        <v-card class="rounded-8">
          <v-img :src="item.src" class="imagen"></v-img>
        </v-card>
      </router-link>
    </v-col>
  </v-row> -->
</template>
<style>
.ima1 {
  box-shadow: -20px 20px 50px 15px grey;
}
.ima2 {
  box-shadow: 20px 20px 50px 15px grey;
}
a {
  text-decoration: none;
  color: black;
}
</style>
