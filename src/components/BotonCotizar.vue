<script setup>
const props = defineProps({
  datos: {
    type: String
  }
})
</script>
<template>
  {{ props.datos }}
  <!-- <v-btn href="https://api.whatsapp.com/send?phone=5581020704" target="_blank">no Cotizar</v-btn> -->
</template>
<style scoped></style>
