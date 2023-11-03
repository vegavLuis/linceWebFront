<script setup>
import imagen1 from '../assets/imagenUsoCotidiano.webp'
import imagen2 from '../assets/imagenDeportivas.webp'
</script>
<template>
  <v-row class="ma-6">
    <v-col cols="12" md="6">
      <v-card class="rounded-8">
        <v-img :src="imagen1" class="imagen"></v-img>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card class="rounded-1">
        <v-img :src="imagen2" class="imagen"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<style></style>
