<script setup>
import ima1 from '@/assets/carosuelPrincipal/carousel1.jpeg'
import ima2 from '@/assets/carosuelPrincipal/carousel2.jpeg'
import ima3 from '@/assets/carosuelPrincipal/carousel3.jpeg'
import ima4 from '@/assets/carosuelPrincipal/carousel4.jpeg'
</script>
<template>
  <div>
    <v-carousel height="auto" color="#db1f2c">
      <template v-slot:prev="{ props }">
        <v-btn color="#db1f2c" @click="props.onClick" icon="mdi mdi-chevron-left"></v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn color="#db1f2c" @click="props.onClick" icon="mdi mdi-chevron-right"> </v-btn>
      </template>
      <v-carousel-item :src="ima1" cover></v-carousel-item>
      <v-carousel-item :src="ima2" cover></v-carousel-item>
      <v-carousel-item :src="ima3" cover></v-carousel-item>
      <v-carousel-item :src="ima4" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>
<style scoped></style>
