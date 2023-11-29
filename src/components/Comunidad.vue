<script setup>
import { ref, onMounted, watch } from 'vue'
import { useComunidad } from '../stores/comunidad'

const data = ref([])
const imagen = ref()
const overlay = ref(false)

onMounted(() => {
  data.value = useComunidad()
})
const mostratImagen = (item) => {
  imagen.value = item
  overlay.value = true
}
</script>
<template>
  <h1 class="text-center mt-16 pb-8">
    <v-icon size="x-large">mdi-instagram</v-icon>
    Un vistazo a nuestra comunidad LINCE.
  </h1>
  <Carousel :items-to-show="4" :wrap-around="true" class="pb-16" :breakpoints="breakpoints">
    <Slide v-for="item in data.datos" :key="item.datos">
      <div class="carousel__item_comunidad d-flex flex-wrap">
        <img
          :src="item.src"
          class="imagen_comunidad flex-1-1-100 ma-2 pa-2"
          @click="mostratImagen(item.src)"
        />
        <div class="d-flex flex-column">
          <h6>{{ item.nombre }}</h6>
          <p class="item-deporte">{{ item.deporte }}</p>
          <v-btn variant="outlined" color="primary" :href="item.redsocial" target="_blank">
            <v-icon class="pr-2">mdi-instagram</v-icon>
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
  <v-overlay v-model="overlay" color="red">
    <v-btn
      icon="mdi-alpha-x-circle"
      class="ma-8 boton"
      location="right top"
      position="absolute"
      color="transparent"
      elevation="0"
      @click="overlay = false"
    ></v-btn>
    <v-img :src="imagen" width="100vw" height="100vh"></v-img>
  </v-overlay>
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
  },
  data: () => ({
    breakpoints: {
      // 700px and up
      0: {
        itemsToShow: 1
      },
      600: {
        itemsToShow: 2.5
      },
      960: {
        itemsToShow: 4
      }
    }
  })
})
</script>
<style scoped>
/* background-color: red; */
.boton {
  z-index: 1;
}
.carousel__item_comunidad {
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagen_comunidad {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 100%;
}
.item-deporte {
  font-weight: 400;
}
</style>
