<template>
  <Carousel :items-to-show="4.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
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
<style>
.carousel__item {
  min-height: 300px;
  width: 300px;
  background-color: red;
  font-size: 20px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
