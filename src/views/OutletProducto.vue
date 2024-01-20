<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import outletApi from '@/api/outlet.js'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiArrowExpandHorizontal,
  mdiArrowExpandVertical,
  mdiAccountCircle,
  mdiAt,
  mdiPhone
} from '@mdi/js'

const datos = ref({})
const nombre = ref('')
const email = ref('')
const telefono = ref('')
const route = useRoute()
const { id } = route.params
const currentSlide = ref(0)
const breakpoints = ref({
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
})
const r = ref('http://localhost:3000')

onMounted(async () => {
  await outletApi
    .getOutletByIdProducto(id)
    .then(({ data }) => {
      datos.value = data
      nombre.value = data.idUsuario.nombre
      email.value = data.idUsuario.email
      telefono.value = data.idUsuario.telefono
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
<template>
  <v-row>
    <v-col cols="12" md="7">
      <v-card color="transparent" elevation="0" height="100vh" class="ma-4">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="slide in datos.imagenes" :key="slide">
            <v-card class="carta d-flex" color="transparent" elevation="0" height="500px">
              <v-img :src="r + slide" width="700" fill class="imagen-principal"></v-img>
            </v-card>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          :autoplay="0"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
          class="icon"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in datos.imagenes" :key="item.id" class="mt-4">
            <v-img :src="r + item" fill height="100"></v-img>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </v-card>
    </v-col>
    <v-col cols="12" md="5">
      <v-card color="transparent" height="100vh" class="pa-4 datos" elevation="0">
        <h6>
          <span class="tipos">Marca:</span>
          <span class="res ml-1">{{ datos.marca }}</span>
        </h6>
        <h6 class="pt-4">
          <span class="tipos">Material:</span>
          <span class="res ml-1">{{ datos.material }}</span>
        </h6>
        <h6 class="pt-4">
          <span class="tipos">Estado de la silla:</span>
          <span class="res ml-1">{{ datos.estadoSilla }}</span>
        </h6>
        <h6 class="pt-4">
          <div class="d-flex align-center">
            <svg-icon
              type="mdi"
              :path="mdiArrowExpandHorizontal"
              color="#556987"
              class="mr-1"
            ></svg-icon>
            <span class="tipos">Ancho del asiento:</span>
            <span class="res ml-1">{{ datos.anchoAsiento }}cm</span>
          </div>
        </h6>
        <h6 class="pt-4">
          <div class="d-flex align-center">
            <svg-icon
              type="mdi"
              :path="mdiArrowExpandHorizontal"
              color="#556987"
              class="mr-1"
            ></svg-icon>
            <span class="tipos">Largo del asiento:</span>
            <span class="res ml-1">{{ datos.anchoAsiento }}cm</span>
          </div>
        </h6>
        <h6 class="pt-4">
          <div class="d-flex align-center">
            <svg-icon
              type="mdi"
              :path="mdiArrowExpandVertical"
              color="#556987"
              class="mr-1"
            ></svg-icon>
            <span class="tipos">Altura del respaldo:</span>
            <span class="res ml-1">{{ datos.alturaRespaldo }}cm</span>
          </div>
        </h6>
        <h6 class="pt-4">
          <div class="d-flex align-center">
            <svg-icon
              type="mdi"
              :path="mdiArrowExpandVertical"
              color="#556987"
              class="mr-1"
            ></svg-icon>
            <span class="tipos">Altura del asiento frontal:</span>
            <span class="res ml-1">{{ datos.alturaAsientoFrontal }}cm</span>
          </div>
        </h6>
        <h6 class="pt-4">
          <div class="d-flex align-center">
            <svg-icon
              type="mdi"
              :path="mdiArrowExpandVertical"
              color="#556987"
              class="mr-1"
            ></svg-icon>
            <span class="tipos">Altura del asiento trasero:</span>
            <span class="res ml-1">{{ datos.alturaAsientoTrasero }}cm</span>
          </div>
        </h6>
        <h6 class="mt-4 res">Datos del vendedor:</h6>
        <h6 class="pt-2">
          <div class="d-flex align-center">
            <svg-icon type="mdi" :path="mdiAccountCircle" color="#556987" class="mr-1"></svg-icon>
            <span class="res ml-1">{{ nombre }}</span>
          </div>
        </h6>
        <h6 class="pt-2">
          <div class="d-flex align-center">
            <svg-icon type="mdi" :path="mdiAt" color="#556987" class="mr-1"></svg-icon>
            <span class="res ml-1">{{ email }}</span>
          </div>
        </h6>
        <h6 class="pt-2">
          <div class="d-flex align-center">
            <svg-icon type="mdi" :path="mdiPhone" color="#556987" class="mr-1"></svg-icon>
            <span class="res ml-1">{{ telefono }}</span>
          </div>
        </h6>
      </v-card>
    </v-col>
  </v-row>
  <h6 class="ma-4">
    <span class="tipos">Descripcion:</span>
    <span class="res ml-1">{{ datos.descripcion }}</span>
  </h6>
</template>
<style scoped>
.tipos .res {
  font-weight: 600;
}
.tipos {
  color: #556987;
}
.res {
  color: #333f51;
}
.datos {
  display: grid;
}
</style>
