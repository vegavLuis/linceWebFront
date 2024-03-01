<script setup>
import { ref, onMounted } from 'vue'
import { useSillasUsoDiario } from '../stores/usodiario/sillasUsodiario'
import Especificaciones from '../components/SillasUsoDiario/Especificaciones.vue'
import BotonCotizar from '../components/BotonCotizar.vue'

const datos = ref([])
const dato = ref([])
let mostrar = ref()

onMounted(() => {
  datos.value = useSillasUsoDiario()
})

const cambiarVista = (item) => {
  mostrar.value = true
  // Object.assign(dato, item)
  dato.value.push(item)
  // console.log(dato.value, 'primero')
}

const regresarVista = () => {
  mostrar.value = false
  dato.value = []
  // console.log(dato, 'segundo')
}
</script>
<template>
  <h1 class="titulo text-center pt-6 pb-4">Uso Diario</h1>
  <v-container>
    <div>
      <v-divider :thickness="1" class="border-opacity-100" color="black"></v-divider>
      <v-row class="mt-6" v-if="!mostrar">
        <v-col cols="12" md="6" v-for="item in datos.data" :key="item.nombre">
          <v-card elevation="4" class="card">
            <v-img class="align-end text-white" height="400" :src="item.imagenes[0]" fill>
              <v-card-title class="titulo-card">{{ item.nombre }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">Uso cotidiano </v-card-subtitle>
            <v-card-text>
              <div>
                {{ item.descripcionPrevia }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <BotonCotizar />
              <v-btn color="primary" variant="flat" @click="cambiarVista(item)"> Explorar </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <Especificaciones v-if="mostrar" :dato="dato" @regresar-vista="regresarVista" />
    </div>
  </v-container>
</template>
<style scoped>
.titulo {
  color: #b71c1c;
}
.card {
  height: 100%;
}
.titulo-card {
  color: black;
}
</style>
