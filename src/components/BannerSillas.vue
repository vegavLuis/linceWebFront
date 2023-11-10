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
    <Slide v-for="item in data.datos" :key="item.datos" class="">
      <div class="carousel__item d-flex flex-wrap imagenFondo">
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
  width: 80%;
  height: 80%;
  object-fit: fill;
  object-position: bottom;
}
.imagenFondo {
  background-image: url('../assets/bannerSillas/prueba.jpg');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 430px;
  background-size: cover;
}
/* .difuminadio {
  backdrop-filter: brightness(20%);
  width: 100%;
  height: 100%;
} */
</style>
