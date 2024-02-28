<script setup>
import { ref } from 'vue'
import Componente from '../components/Componente.vue'
import Comunidad from '../components/Comunidad.vue'
import BannerSillas from '../components/BannerSillas.vue'
import Especificaciones from '../components/SillasUsoDiario/Especificaciones.vue'

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
    <div class="contenedor">
      <h2 class="titulo charm-regular">Mas que una silla, un estilo de vida</h2>
    </div>
    <v-container>
      <Componente />
    </v-container>
    <Comunidad />
    <BannerSillas @cambiar-vista="cambiarVista" />
  </div>
  <Especificaciones v-if="mostrar" :dato="dato" @regresar-vista="regresarVista" />
</template>
<style scoped>
.contenedor {
  width: 100vw;
  height: 100px;
  object-fit: none;
  object-position: right;
  background-repeat: repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/prueba2.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.titulo {
  color: white;
}
</style>
