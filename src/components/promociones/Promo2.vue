<script setup>
import PDF from 'pdf-vue3-vite'
import promo from '../../assets/promociones/Promocion_PARIS_2024-Semi_personalizadas.pdf'
</script>
<template>
  <div class="mt-4">
    <h3>Promocion PARIS 2024 - Semi personalizadas</h3>
    <PDF :src="promo" />
  </div>
</template>
<style scoped></style>
