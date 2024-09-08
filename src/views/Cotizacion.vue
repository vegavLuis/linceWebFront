<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSillasUsoDiario } from '../stores/usodiario/sillasUsodiario.js'
import { useSillasInfantiles } from '../stores/sillasInfantiles.js'
import { useSillasDeportivas } from '../stores/sillasDeportivas.js'
// import {
//   VStepper,
//   VStepperItem,
//   VStepperHeader,
//   VStepperWindow,
//   VStepperWindowItem,
//   VStepperActions
// } from 'vuetify/labs/VStepper'

const dataSillasUsoDiario = useSillasUsoDiario()
const dataSillasInfantiles = useSillasInfantiles()
const dataSillasDeportivas = useSillasDeportivas()
const route = useRoute()

const id = route.params.id
const dataSilla = ref([])
const ima1 = ref('')
const ima2 = ref('')
const ima3 = ref('')
const e1 = ref(1)
const textNext = ref('Siguiente')
const d = ref([
  {
    a: 1,
    b: 2,
    c: 3
  }
])
const item = ref([
  {
    a: 1,
    datos: [
      {
        tipoModelo: '',
        isTipo: '',
        anchoDeAsiento: ''
      }
    ]
  },
  {
    a: 2,
    datos: [
      {
        tipoModelo: '',
        isTipo: '',
        anchoDeAsiento: ''
      }
    ]
  },
  {
    a: 3,
    datos: [
      {
        tipoModelo: '',
        isTipo: '',
        anchoDeAsiento: ''
      }
    ]
  },
  {
    a: 4,
    descripcion: 'En breve nos ponemos en contacto'
  }
])

const disabled = () => {
  e1.value === 1
    ? 'prev'
    : e1.value === item.value
      ? 'next'
      : e1.value === 3 || e1.value === 4
        ? (textNext.value = 'Enviar')
        : (textNext.value = 'Siguiente')

  if (e1.value === 4) {
    en()
  }
}
const buscarSilla = async () => {
  dataSilla.value = dataSillasUsoDiario.data.find((element) => element.nombre == id)

  if (dataSilla.value === undefined) {
    dataSilla.value = dataSillasInfantiles.data.find((element) => element.nombre == id)
  }
  if (dataSilla.value === undefined) {
    dataSilla.value = dataSillasDeportivas.data.find((element) => element.nombre == id)
  }

  ima1.value = dataSilla.value.imagenes[0]
  ima2.value = dataSilla.value.imagenes[1]
  ima3.value = dataSilla.value.imagenes[2]
}
buscarSilla()
// onMounted(async () => {
//   await
// })

const en = () => {
  console.log('esesese')
}
</script>
<template>
  <div class="mr-2 ml-2">
    <v-row>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <v-card height="auto">
          <img :src="ima1.src" v-if="e1 == 1" class="imag" />
          <img :src="ima2.src" v-if="e1 == 2" class="imag" />
          <img :src="ima3.src" v-if="e1 == 3" class="imag" />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-form class="con" @submit.prevent="">
          <v-stepper v-model="e1">
            <template v-slot:default="{ prev, next }">
              <v-stepper-header>
                <template v-for="n in item" :key="n">
                  <v-stepper-item :complete="e1 > n.a" :step="n.a" :value="n.a"></v-stepper-item>

                  <v-divider v-if="n !== item" :key="n.a"></v-divider>
                </template>
              </v-stepper-header>

              <v-stepper-window>
                <v-stepper-window-item v-for="n in item" :key="n.a" :value="n.a">
                  <v-card color="" height="200">
                    {{ n }}
                    <p>{{ d[0].a }}</p>
                  </v-card>
                </v-stepper-window-item>
              </v-stepper-window>

              <!-- <v-stepper-actions :disabled="disabled()" @click:next="next" @click:prev="prev"> -->
              <!-- </v-stepper-actions> -->
              <v-stepper-actions
                :disabled="disabled()"
                @click:next="next"
                :next-text="textNext"
                prev-text="Anterior"
                @click:prev="prev"
              >
              </v-stepper-actions>
            </template>
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.imag {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
}
.con {
  height: 100%;
}
</style>
