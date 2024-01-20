<script setup>
import { ref } from 'vue'
import { useOutletStore } from '@/stores/outlet.js'
import { mdiArrowExpandHorizontal, mdiArrowExpandVertical } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
const store = useOutletStore()
const r = ref('http://localhost:3000')
const iconoHorizontal = mdiArrowExpandHorizontal
const iconoVertical = mdiArrowExpandVertical
</script>
<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="12" md="4" v-for="item in store.datos" :key="item.id">
          <v-card class="card">
            <v-card elevation="0">
              <v-img :src="r + item.imagenes[2]" fill height="200"></v-img>
            </v-card>
            <v-divider></v-divider>
            <v-sheet class="d-flex pa-2">
              <v-sheet class="me-auto">
                <p class="titulo">{{ item.marca }}</p>
              </v-sheet>
              <v-sheet>
                <v-rating
                  :model-value="5"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                ></v-rating
              ></v-sheet>
            </v-sheet>
            <v-card-text class="pt-2 pb-1 texto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam necessitatibus
              numquam saepe eos ex voluptatum fugiat facilis quo sint itaque assumenda dicta amet
              officia, omnis in minima? Illum, corporis.
            </v-card-text>
            <v-card-text class="pt-0 pb-1">
              <v-sheet class="d-flex" height="auto">
                <v-sheet class="align-self-center">
                  <svg-icon type="mdi" :path="iconoVertical"></svg-icon>
                </v-sheet>
                <v-sheet>
                  <v-sheet class="ma-1 pa-1 align-self-start" height="50">
                    <p>Altura del asiento frontal: {{ item.alturaAsientoFrontal }}cm</p>
                  </v-sheet>
                  <v-sheet class="ma-1 pa-1 align-self-end">
                    <p>Altura del asiento trasero: {{ item.alturaAsientoTrasero }}cm</p>
                  </v-sheet>
                </v-sheet>
              </v-sheet>
            </v-card-text>
            <v-card-text class="pt-0 pb-1">
              <v-sheet class="d-flex" height="auto">
                <v-sheet class="align-self-center">
                  <svg-icon type="mdi" :path="iconoHorizontal"></svg-icon>
                </v-sheet>
                <v-sheet>
                  <v-sheet class="ma-1 pa-1 align-self-start" height="50">
                    <p>Ancho del asiento: {{ item.anchoAsiento }}cm</p>
                  </v-sheet>
                  <v-sheet class="ma-1 pa-1 align-self-end">
                    <p>Largo del asiento: {{ item.largoAsiento }}cm</p>
                  </v-sheet>
                </v-sheet>
              </v-sheet>
            </v-card-text>
            <v-btn block color="#22C55E" class="text-white" @click="store.abrirProducto(item._id)"
              >Cotizar</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style scoped>
.titulo {
  font-size: 20px;
  font-weight: 500;
  color: #333f51;
}
.card {
  height: 100%;
}
.texto {
  line-height: 1.9;
}
</style>
