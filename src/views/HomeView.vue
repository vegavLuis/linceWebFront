<script setup>
import { ref } from 'vue'
import Componente from '../components/Componente.vue'
import Comunidad from '../components/Comunidad.vue'
import BannerSillas from '../components/BannerSillas.vue'
import Especificaciones from '../components/SillasUsoDiario/Especificaciones.vue'
import ima from '../assets/ImagenSilla.jpg'
let mostrar = ref()
const dato = ref([])

const cambiarVista = (item) => {
  // console.log('listo', item)
  dato.value.push(item)
  mostrar.value = true
}

const regresarVista = () => {
  mostrar.value = false
  dato.value = []
  // console.log(dato, 'segundo')
}
</script>

<template>
  <div v-if="!mostrar">
    <!-- <div class="contenedor">
      <h2 class="titulo charm-regular">Mas que una silla, un estilo de vida</h2>
    </div> -->
    <Componente />
    <!-- <v-container>
    </v-container> -->
    <v-parallax :src="ima" height="300" scale=".9" class="my-8">
      <div class="d-flex flex-column fill-height justify-center align-center text-white parallax">
        <h2 class="titulo charm-regular">Mas que una silla, un estilo de vida</h2>
      </div>
    </v-parallax>
    <v-divider class="ma-4 border-opacity-100" color="#F44336"></v-divider>
    <Comunidad />
    <v-divider class="ma-4 pb-4 border-opacity-100" color="#F44336"></v-divider>
    <BannerSillas @cambiar-vista="cambiarVista" />
    <v-divider class="ma-4 pb-4 border-opacity-100" color="#F44336"></v-divider>
  </div>
  <Especificaciones v-if="mostrar" :dato="dato" @regresar-vista="regresarVista" />
</template>
<style scoped>
.parallax {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) !important;
}
.contenedor {
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/ImagenSilla.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/ImagenSilla.jpg'); */
  /* width: 100vw;
  height: 100px;
  object-fit: none;
  background-position: end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/ImagenSilla.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}
.titulo {
  color: white;
}
</style>
