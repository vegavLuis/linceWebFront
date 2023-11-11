<script setup>
import { ref, onMounted } from 'vue'
import { useComunidad } from '../stores/comunidad'
const data = ref([])
onMounted(() => {
  data.value = useComunidad()
})
</script>
<template>
  <h1 class="text-center pt-16 pb-8">Un vistazo a nuestra comunidad LINCE.</h1>
  <Carousel :items-to-show="4" :wrap-around="true">
    <Slide v-for="item in data.datos" :key="item.datos">
      <div class="carousel__item d-flex flex-wrap">
        <img :src="item.src" class="imagen flex-1-1-100 ma-2 pa-2" />
        <div class="d-flex flex-column">
          <h2>{{ item.nombre }}</h2>
          <h3>{{ item.deporte }}</h3>
          <v-btn variant="outlined" color="primary">
            <v-icon>mdi-instagram></v-icon>
            Instagram
          </v-btn>
        </div>
        <!-- <h2 class="text-bold">{{ item.nombre }}</h2>
        <h3>{{ item.deporte }}</h3> -->
      </div>
    </Slide>
    <!-- <Slide v-for="item in data.datos" :key="item.id">
      <div class="carousel__item">
      </div>
    </Slide> -->
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation
  }
})
</script>
<style scoped>
/* background-color: red; */
.carousel__item {
  height: auto;
  width: auto;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagen {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 100%;
}
</style>
