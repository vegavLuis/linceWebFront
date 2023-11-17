<script setup>
import { ref, onMounted } from 'vue'
import { useAppTerminiosCondiciones } from '../stores/terminosCondiciones/app'
const datos = ref([])

onMounted(() => {
  datos.value = useAppTerminiosCondiciones()
})
</script>
<template>
  <h1 class="titulo text-center pt-6 pb-4">TÉRMINOS Y CONDICIONES ADICIONALES DE VENTA</h1>
  <v-container>
    <v-divider :thickness="2" color="black" class="border-opacity-100"></v-divider>
    <h3 class="light text-center pt-6">TÉRMINOS Y CONDICIONES</h3>
    <p class="text-justify pt-4 parrafo">
      Los términos y condiciones que a continuación se establecen se considerarán incorporados a
      todas las órdenes, cotizaciones, facturas o recibos de pedidos de industrias Lince Por ROE-MEX
      S.A. de C.V. Si usted es un comprador de productos al amparo de una Orden de Pedido de
      Industrias Lince Por ROE-MEX S.A. de C.V., por favor revise e imprima una copia de este
      documento para su archivo.
    </p>
    <v-card
      v-for="item in datos.data"
      :key="item.id"
      class="mt-6"
      elevation="0"
      color="transparent"
    >
      <h4 class="light text-decoration-underline">{{ item.id }}. {{ item.nombre }}</h4>
      <div class="mt-2">
        <li v-for="itemLista in item.lista" :key="item.id" class="parrafo light ml-4">
          {{ itemLista.nombre }}
        </li>
      </div>
    </v-card>
    <div v-for="itemterminos in datos.terminos" :key="itemterminos.titulo">
      <h3 class="light text-center pt-6">{{ itemterminos.titulo }}</h3>
      <div class="mt-2">
        <li
          v-for="itemListaTerminos in itemterminos.lista"
          :key="itemListaTerminos.nombre"
          class="parrafo light ml-4"
        >
          {{ itemListaTerminos.nombre }}
        </li>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.titulo {
  color: #490036;
}
.parrafo {
  line-height: 2.2;
}
.light {
  font-weight: 300;
}
.lista {
  background: white;
}
</style>
