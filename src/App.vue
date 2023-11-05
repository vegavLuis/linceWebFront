<script setup>
import { RouterView } from 'vue-router'
import BarraNavegacion from './components/BarraNavegacion.vue'
</script>
<template>
  <VLayout>
    <BarraNavegacion></BarraNavegacion>
    <v-main>
      <RouterView />
    </v-main>
  </VLayout>
</template>

<style scoped></style>
