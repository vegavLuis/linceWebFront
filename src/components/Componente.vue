<script setup>
import { ref, onMounted } from 'vue'
import { usePrimerApartadoHome } from '../stores/primerApartadoHome.js'

const data = ref([])

onMounted(() => {
  data.value = usePrimerApartadoHome()
  // console.log(data.value.datos)
})
</script>

<template>
  <!-- <font-awesome-icon :icon="['fab', 'instagram']" size="2xl" /> -->
  <v-row class="pt-6">
    <v-col cols="12" md="6" v-for="item in data.datos" :key="item.src">
      <router-link :to="item.to">
        <v-card class="rounded-8">
          <v-img :src="item.src" class="imagen"></v-img>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>
<style></style>
