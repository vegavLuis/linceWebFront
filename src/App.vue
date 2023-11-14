<script setup>
import { RouterView } from 'vue-router'
import BarraNavegacion from './components/BarraNavegacion.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <VLayout>
    <BarraNavegacion />
    <v-main>
      <RouterView />
    </v-main>
  </VLayout>
  <VLayout>
    <Footer />
  </VLayout>
</template>

<style scoped></style>
