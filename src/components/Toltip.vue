<script setup>
import IconInformation from '../components/IconInformation.vue'

// Definir las propiedades del componente
const props = defineProps({
  tooltipText: {
    type: String
  }
})
</script>
<template>
  <v-tooltip :text="props.tooltipText" location="top">
    <template v-slot:activator="{ props }">
      <span v-bind="props">
        <strong>
          <slot></slot>
          <!-- El slot renderiza el contenido pasado desde el padre -->
        </strong>
        <IconInformation />
      </span>
    </template>
  </v-tooltip>
</template>
