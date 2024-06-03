<script setup>
import PDF from 'pdf-vue3-vite'
import promo from '../../assets/promociones/Promocion_PARIS_2024_Sillas_de_uso_diario.pdf'
</script>
<template>
  <div class="mt-4">
    <h3>Promocion PARIS 2024 Sillas de uso diario</h3>
    <PDF :src="promo" />
  </div>
</template>
<style scoped></style>
