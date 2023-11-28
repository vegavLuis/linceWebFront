<script setup>
import BotonCotizar from '../BotonCotizar.vue'
defineEmits(['regresar-vista'])
defineProps({
  dato: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <v-card color="transparent" elevation="0">
    <v-row>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-card color="transparent" width="100%" elevation="0">
          <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="slide in dato[0].imagenes" :key="slide">
              <div class="carousel__item">
                <v-img :src="slide.src" width="500px" class="imagen-principal"></v-img>
              </div>
            </Slide>
          </Carousel>

          <Carousel
            id="thumbnails"
            :autoplay="2000"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
            class="icon"
            :breakpoints="breakpoints"
          >
            <Slide v-for="item in dato[0].imagenes" :key="item.id">
              <v-card width="120px" height="120px" color="transparent" elevation="0">
                <img :src="item.src" class="imagen" />
              </v-card>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <h2>{{ dato[0].nombre }}</h2>
        <h6 class="descripcion mt-2">{{ dato[0].descripcionPrevia }}</h6>
        <div class="mt-2">
          <h3>CARACTERISTICAS</h3>
          <ul v-for="item in dato[0].especificaciones" :key="item.id">
            <li class="mt-4 ml-6">{{ item.descripcion }}</li>
          </ul>
        </div>
        <v-card-actions class="mt-4">
          <v-spacer></v-spacer>
          <v-btn @click="$emit('regresar-vista')">regresar</v-btn>
          <BotonCotizar variant="flat" />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
  <v-card color="warning" class="text-center d-flex align-center justify-center mt-6" height="auto">
    <p class="small">
      {{ dato[0].info }}
    </p>
  </v-card>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data: () => ({
    currentSlide: 0,
    breakpoints: {
      // 700px and up
      0: {
        itemsToShow: 1.6
      },
      600: {
        itemsToShow: 3
      }
      // 960: {
      //   itemsToShow: 4
      // }
    }
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    }
  }
})
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .imagen-principal {
    width: 300px !important;
  }
}
.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.descripcion {
  font-weight: 200;
  line-height: 2;
}
.card {
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
}
</style>
