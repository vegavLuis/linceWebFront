<script setup>
import imagen from '../assets/comunicados/comunicado.webp'
</script>
<template>
  <h1 class="titulo text-center pt-6 pb-4">Comunicados oficiales</h1>
  <v-container>
    <v-img :src="imagen"></v-img>
  </v-container>
</template>
<style scoped>
.titulo {
  color: #8b0000;
}
</style>
