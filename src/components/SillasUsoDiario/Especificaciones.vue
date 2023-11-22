<script setup>
defineEmits(['regresar-vista'])
defineProps({
  dato: {
    type: Array,
    required: true
  }
})
</script>
<template>
  adasdad
  {{ dato }}
  <v-btn @click="$emit('regresar-vista')">regresar</v-btn>
</template>
<style></style>
