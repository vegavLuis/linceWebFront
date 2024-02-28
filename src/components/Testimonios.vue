<script setup>
import { ref, onMounted } from 'vue'
import { useTestimonios } from '../stores/testimonios'

const data = ref([])

onMounted(() => {
  data.value = useTestimonios()
})
</script>
<template>
  <h2 class="text-center mt-16 charm-regular">
    ¡Ventajas de utilizar la silla de ruedas correcta!
  </h2>
  <h3 class="text-center mt-4">Testimonios de Miriam y Daniel</h3>
  <v-row class="mt-4">
    <v-col cols="12" md="6" v-for="item in data.datos" :key="item.src">
      <v-card class="pr-6 pl-6 fondo" elevation="0" color="transparent">
        <video controls :src="item.src" class="video-testimonios"></video>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
h2 {
  color: #e84702;
  font-weight: 500;
}
h3 {
  font-weight: 500;
}
.fondo {
  background: transparent;
  margin-left: 12px;
  margin-right: 12px;
}
.video-testimonios {
  width: 100%;
  height: 460px;
}
</style>
