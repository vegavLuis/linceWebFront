<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useSillasInfantiles } from '@/stores/sillasInfantiles.js'
import BotonCotizar from '../BotonCotizar.vue'
const route = useRoute()
const i = useSillasInfantiles()
const idRouter = ref(route.params.id)
const data = ref([])
function numero(n) {
  return n.id == idRouter.value
}
const ima = data.value.imagenes
const itemProps = (ima) => {
  return {
    title: ima.color
    // subtitle: ima.color
  }
}
const select = ref('')

data.value = i.data.find(numero)
onMounted(() => {})
</script>
<template>
  <v-container>
    <v-card color="transparent" elevation="0">
      <v-row>
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-card
            color="transparent"
            height="100%"
            width="100%"
            elevation="0"
            class="d-flex align-start"
          >
            <template v-if="!select.src">
              <v-img :src="data.imagenes[0].src" width="100%" />
            </template>
            <template v-else>
              <v-img :src="select.src" width="100%" />
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h3>Selecciona el color de la silla</h3>
          <v-select
            v-model="select"
            :items="data.imagenes"
            :item-props="itemProps"
            return-object
            single-line
          ></v-select>
          <h2>{{ data.nombre }}</h2>
          <h6 class="descripcion mt-2">{{ data.descripcionPrevia }}</h6>

          <div class="mt-2">
            <h3>CARACTERISTICAS</h3>
            <ul v-for="item in data.especificaciones" :key="item.id">
              <li class="mt-4 ml-6">{{ item.descripcion }}</li>
            </ul>
          </div>
          <v-card-actions class="mt-4">
            <v-spacer></v-spacer>
            <router-link to="/sillas-infantiles"><v-btn>regresar</v-btn></router-link>
            <BotonCotizar variant="flat" />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      color="warning"
      class="text-center d-flex align-center justify-center mt-6"
      height="auto"
    >
      <p class="small">
        {{ data.info }}
      </p>
    </v-card>
  </v-container>
</template>
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
