<script setup>
import PDF from 'pdf-vue3-vite'
import promo from '../../assets/promociones/Promocion_PARIS_2024-Rodamientos.pdf'
</script>
<template>
  <div class="mt-4">
    <h3>Promocion PARIS 2024 - Rodamientos</h3>
    <PDF :src="promo" />
  </div>
</template>
<style scoped></style>
