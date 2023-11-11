<script setup>
import { ref, onMounted } from 'vue'
import { useBannerSillas } from '../stores/bannerSillas'
const data = ref([])
onMounted(() => {
  data.value = useBannerSillas()
})
</script>
<template>
  <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="item in data.datos" :key="item.datos">
      <div class="carousel__item d-flex flex-wrap imagenFondo">
        <img :src="item.fondo" class="imagenFondo filtro" />
        <v-img :src="item.src" class="flex-1-1-100 ma-2 pa-2 imagen" />
      </div>
    </Slide>
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
.imagen {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imagenFondo {
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  width: 100%;
  height: 500px;
  /* backdrop-filter: brightness(20%); */
  /* background-size: cover; */
  /* backdrop-filter: brightness(20%); */
  /* backdrop-filter: brightness(20%); */
}
.filtro {
  /* filter: grayscale(80%); */
  filter: brightness(30%);
  /* backdrop-filter: blur(15px); */
}
</style>
