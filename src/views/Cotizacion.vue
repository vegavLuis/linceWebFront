<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSillasUsoDiario } from '../stores/usodiario/sillasUsodiario.js'
import { useSillasInfantiles } from '../stores/sillasInfantiles.js'
import { useSillasDeportivas } from '../stores/sillasDeportivas.js'
import primeraIma from '@/assets/imagenesCotizacion/primera.jpeg'
import segundaIma from '@/assets/imagenesCotizacion/segunda.jpeg'
const dataSillasUsoDiario = useSillasUsoDiario()
const dataSillasInfantiles = useSillasInfantiles()
const dataSillasDeportivas = useSillasDeportivas()
const route = useRoute()

const props = defineProps({
  cotizacion: {
    type: String
  }
})
onMounted(() => {
  p()
})
const idName = ref(route.params.id)
const info = ref({})

const stepper = ref(null)
const page = ref(1)
const item = ref(['Paso 1', 'Paso 2', 'Paso 3'])
// const item = ref([
//   { name: 'Paso 1', value: 1, color: 'red' },
//   { name: 'Paso 2', value: 2 },
//   { name: 'Paso 3', value: 3 }
// ])

const p = () => {
  info.value = dataSillasUsoDiario.data.find((element) => element.nombre == idName.value)
  if (info.value == undefined) {
    info.value = dataSillasInfantiles.data.find((element) => element.nombre == idName.value)
  }
  if (info.value == undefined) {
    info.value = dataSillasDeportivas.data.find((element) => element.nombre == idName.value)
  }
}

const formulario = ref({
  ancho: '',
  largo: '',
  largoTotal: '',
  estrechamiento: '',
  dobles: '',
  estiloFrontalV: '',
  y: '',
  alturaAsientoParteTrasera: '',
  alturaAsientoParteFrontal: '',
  alturaRespaldo: '',
  anguloRespaldo: '',
  anchoDelEstriboInterior: '',
  largoTibaPerone: '',
  contraEscribo: '',
  distanciaRespaldoAcentroDeGravedad: '',
  distanciaRespaldoAcentroBujeDel: '',
  distanciaBujeDelanteroEscribo: '',
  fijaSextaRueda: '',
  quintaRueda: '',
  alturaLateral: '',
  tipoDeRueda: '',
  tipoDeRodamiento: '',
  rayosCruzados: '',
  medidas: '',
  color: ''
})
</script>
<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <v-card height="auto">
          <v-img :src="primeraIma" v-if="page == 1" cover />
          <v-img :src="segundaIma" v-if="page == 2" cover />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <div class="con">
          <v-form class="con">
            <v-stepper
              editable
              :items="item"
              ref="stepper"
              v-model="page"
              bg-color="#D2D2D2"
              height="100%"
            >
              <template v-slot:item.1>
                <div class="d-flex text-center">
                  <h4 class="font-weight-bold">Medidas</h4>
                  <v-spacer></v-spacer>
                  <h4 class="font-weight-bold">Modelo:<br />{{ info.nombre }}</h4>
                </div>
                <v-row>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Ancho:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.ancho"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Largo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Largo total:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largoTotal"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Estrechamiento:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.estrechamiento"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Dobles:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.dobles"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Estilo Frontal V:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.estiloFrontalV"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Y:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.y"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de asiento parte trasera:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaAsientoParteTrasera"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de asiento parte Frontal:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaAsientoParteFrontal"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de respaldo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaRespaldo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <v-radio-group v-model="formulario.anguloRespaldo" inline>
                      <div class="d-flex align-center">
                        <label>Angulo de respaldo:</label>
                        <v-radio label="0°" value="0"></v-radio>
                        <v-radio label="3°" value="3"></v-radio>
                        <v-radio label="5°" value="5"></v-radio>
                        <v-radio label="6°" value="6"></v-radio>
                        <v-radio label="7°" value="7"></v-radio>
                        <v-radio label="9°" value="9"></v-radio>
                        <v-radio label="12°" value="12"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Ancho del estribo (Interior):</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.anchoDelEstriboInterior"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Largo de tibia y perone:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largoTibaPerone"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Contra escribo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.contraEscribo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de respaldo acentro de gravedad:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaRespaldoAcentroDeGravedad"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de respaldo acentro :G. A buje Del.:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaRespaldoAcentroBujeDel"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de bije delantero al escribo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaBujeDelanteroEscribo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:item.2>
                <div class="d-flex text-center">
                  <h4 class="font-weight-bold">Ruedas</h4>
                  <v-spacer></v-spacer>
                  <h4 class="font-weight-bold">Modelo:<br />{{ info.nombre }}</h4>
                </div>
                <v-row no-gutters>
                  <v-col cols="12">
                    <label>5ta Rueda antivuelto:</label>
                    <v-radio-group v-model="formulario.fijaSextaRueda" inline>
                      <div class="d-flex align-center">
                        <v-radio label="(Fija) 6ta rueda" value="(Fija) 6ta rueda"></v-radio>
                        <v-radio label="(Fija)" value="Fija"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12">
                    <label>5ta Rueda antivuelto:</label>
                    <v-radio-group v-model="formulario.quintaRueda" inline>
                      <div class="d-flex align-center">
                        <v-radio label="(Movible)" value="Movible"></v-radio>
                        <v-radio label="(Fijos)" value="Fijos"></v-radio>
                        <v-radio label="(Atornillado)" value="Atornillados"></v-radio>
                        <v-radio label="(Telas)" value="Telas"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12">
                    <label>Altura lateral:</label>
                    <v-text-field
                      class="ml-2"
                      hide-details
                      v-model="formulario.alturaLateral"
                      variant="solo"
                      density="compact"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group v-model="formulario.tipoDeRueda" inline>
                      <div class="d-flex align-center">
                        <v-radio label="Alumnio" value="Aluminio"></v-radio>
                        <v-radio label="Fibra de carbono" value="Fibra de carbono"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center justify-center">
                    <div>
                      <v-radio-group v-model="formulario.tipoDeRodamiento" class="d-flex" inline>
                        <div class="d-flex align-center">
                          <label class="font-weight-black">RODAMIENTO TRASERO:</label>
                          <v-radio value="STD">
                            <template v-slot:label>
                              <div class="font-weight-black">STD</div>
                            </template>
                          </v-radio>
                          <v-radio value="SPINERGY">
                            <template v-slot:label>
                              <div class="font-weight-black">SPINERGY</div>
                            </template>
                          </v-radio>
                        </div>
                      </v-radio-group>
                    </div>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center justify-center">
                    <div>
                      <v-radio-group v-model="formulario.rayosCruzados" inline>
                        <div class="d-flex align-center">
                          <v-radio
                            label="RAYOS CRUAZADOS SOLO RODAMIENTO STD"
                            value="RAYOS CRUAZADOS"
                          ></v-radio>
                        </div>
                      </v-radio-group>
                    </div>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center justify-center">
                    <div>
                      <v-radio-group v-model="formulario.medidas">
                        <v-radio value="24 X1 3/8">
                          <template v-slot:label>
                            <div>
                              24 X1 3/8
                              <span>(25-540)</span>
                            </div>
                          </template>
                        </v-radio>
                        <v-radio value="25 X 1">
                          <template v-slot:label>
                            <div>
                              25 X 1
                              <span>(25-559)</span>
                            </div>
                          </template>
                        </v-radio>
                        <v-radio value="26 X 1 3/8">
                          <template v-slot:label>
                            <div>
                              26 X 1 3/8
                              <span>(25-590)</span>
                            </div>
                          </template>
                        </v-radio>
                        <v-radio value="27 X 1">
                          <template v-slot:label>
                            <div>
                              27 X 1
                              <span>(23X700)</span>
                            </div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <label class="font-weight-black">Color:</label>
                    <v-radio-group v-model="formulario.color" class="d-flex" inline>
                      <div class="d-flex align-center">
                        <v-radio label="Negro" value="Negro"></v-radio>
                        <v-radio label="Blanco" value="Blanco"></v-radio>
                        <v-radio label="Verde" value="Verde"></v-radio>
                        <v-radio label="Amarillo" value="Amarillo"></v-radio>
                        <v-radio label="Rojo" value="Rojo"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:item.3> ... </template>

              <template v-slot:actions>
                <div class="d-flex justify-end">
                  <v-btn
                    @click="stepper.prev()"
                    :disabled="page === 1"
                    class="mt-12 mr-4"
                    color="#EFEFEF"
                  >
                    Atras
                  </v-btn>
                  <v-btn
                    v-if="page < item.length"
                    @click="stepper.next()"
                    :disabled="page === item.length"
                    class="mt-12 mr-4"
                    color="#FA0000"
                  >
                    Continuar
                  </v-btn>
                  <v-btn v-else color="success" type="submit" class="mt-12 mr-4">Done</v-btn>
                </div>
              </template>
            </v-stepper>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <!-- <v-card color="green" width="100%" height="auto">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="hidden-sm-and-down">
          <v-card color="red" width="100%" height="auto">
            <v-img :src="primeraIma" v-if="page == 1" height="1000" />
            <img :src="segundaIma" v-if="page == 2" class="imag" />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="blue" height="auto">
            <v-stepper
              editable
              :items="item"
              ref="stepper"
              v-model="page"
              bg-color="#D2D2D2"
              height="auto"
            >
              <template v-slot:item.1>
                <div class="d-flex text-center">
                  <p>Medidas</p>
                  <v-spacer></v-spacer>
                  <p>Modelo:<br />{{ info.nombre }}</p>
                </div>
                <v-row>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Ancho:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.ancho"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Largo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="d-flex align-center">
                      <label>Largo total:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largoTotal"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Estrechamiento:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.estrechamiento"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Dobles:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.dobles"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Estilo Frontal V:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.estiloFrontalV"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Y:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.y"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de asiento parte trasera:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaAsientoParteTrasera"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de asiento parte Frontal:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaAsientoParteFrontal"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Altura de respaldo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.alturaRespaldo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <v-radio-group v-model="formulario.anguloRespaldo" inline>
                      <div class="d-flex align-center">
                        <label>Angulo de respaldo:</label>
                        <v-radio label="0°" value="0"></v-radio>
                        <v-radio label="3°" value="3"></v-radio>
                        <v-radio label="5°" value="5"></v-radio>
                        <v-radio label="6°" value="6"></v-radio>
                        <v-radio label="7°" value="7"></v-radio>
                        <v-radio label="9°" value="9"></v-radio>
                        <v-radio label="12°" value="12"></v-radio>
                      </div>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Ancho del estribo (Interior):</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.anchoDelEstriboInterior"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Largo de tibia y perone:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.largoTibaPerone"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center">
                      <label>Contra escribo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.contraEscribo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de respaldo acentro de gravedad:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaRespaldoAcentroDeGravedad"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de respaldo acentro :G. A buje Del.:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaRespaldoAcentroBujeDel"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12">
                    <div class="d-flex align-center">
                      <label>Distancia de bije delantero al escribo:</label>
                      <v-text-field
                        class="ml-2"
                        hide-details
                        v-model="formulario.distanciaBujeDelanteroEscribo"
                        variant="solo"
                        density="compact"
                        clearable
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:item.2>
                <v-card title="Step Two" flat color="#D2D2D2">
                  <v-text-field
                    v-model="formulario.apellidoPaterno"
                    label="First name"
                  ></v-text-field>
                </v-card>
              </template>

              <template v-slot:item.3>
                <v-card title="Step Three" flat>
                  <v-text-field
                    v-model="formulario.apellidoMaterno"
                    label="First name"
                  ></v-text-field>
                </v-card>
              </template>

              <template v-slot:actions>
                <v-btn @click="stepper.prev()" variant="outlined" :disabled="page === 1">
                  Previous
                </v-btn>
                <v-btn
                  v-if="page < item.length"
                  @click="stepper.next()"
                  :disabled="page === item.length"
                >
                  Siguiente
                </v-btn>
                <v-btn v-else color="success" type="submit">Done</v-btn>
              </template>
            </v-stepper>
          </v-card>
        </v-col>
      </v-row>
    </v-card> -->
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
