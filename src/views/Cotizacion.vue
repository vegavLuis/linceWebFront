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
const tipoBoton = ref('button')
const tipo = ref(false)
// const d = ref([
//   {
//     a: 1,
//     b: 2,
//     c: 3
//   }
// ])
const dat = ref({
  tipoModelo: '',
  isTipo: '',
  anchoDeAsiento: '',
  largoAsieno: '',
  barrenos: '',
  largoTotalAsiento: '',
  estrechamientoAsiento: '',
  isDobles: '',
  estiloFrontal: '',
  alturaAsientoTrasero: '',
  alturaAsientoFrontal: '',
  alturaRespaldo: '',
  tipoRespaldo: '',
  anguloRespaldo: '',
  isImpulsoresManuales: '',
  isExtenciones: '',
  anchoEstribo: '',
  tipoAnchoEstribo: '',
  largoTibiaPeroneIzq: '',
  largoTibiaPeroneDer: '',
  contraEstribo: '',
  disRespaldoACentroGravedad: '',
  disCentroGravedadABujeDelantero: '',
  disBujeDelanteroEstrino: '',
  disBujesDelanteros: '',
  tipoRuedasDelanteras: '',
  tijeras: '',
  medidaTijeras: '',
  separacionRespaldoRueda: '',
  inclinacionRodTraseras: '',
  antivuelcoUnaRueda: '',
  antivuelcoDosRuedas: '',
  tipoEstiloAntiVuelco: '',
  alturaLaterar: '',
  tipoAlturaLateral: '',
  rodamientoTrasero: '',
  color: '',
  otroColor: '',
  segundoColor: '',
  tercerColor: '',
  colorAccesorios: '',
  otroTono: '',
  isFrenos: '',
  tipoFrenos: '',
  isCoderas: '',
  tipoCoderas: ''
})
// const item = ref([
//   {
//     a: 1,
//     datos: [
//       {
//         tipoModelo: '',
//         isTipo: '',
//         anchoDeAsiento: ''
//       }
//     ]
//   },
//   {
//     a: 2,
//     datos: [
//       {
//         a: '',
//         v: '',
//         b: ''
//       }
//     ]
//   },
//   {
//     a: 3,
//     datos: [
//       {
//         q: '',
//         w: '',
//         e: ''
//       }
//     ]
//   },
//   {
//     a: 4,
//     descripcion: 'En breve nos ponemos en contacto'
//   }
// ])
const item = ref([
  {
    a: 1
  },
  {
    a: 2
  },
  {
    a: 3
  },
  {
    a: 4
  }
])

const disabled = (n) => {
  e1.value === 1
    ? 'prev'
    : e1.value === item.value
      ? 'next'
      : e1.value === 3 || e1.value === 4
        ? (textNext.value = 'Enviar')
        : (textNext.value = 'Siguiente')
}
const ant = () => {
  e1.value--
  if (e1.value === 1) {
    textNext.value = 'Sigueinte'
  } else if (e1.value === 2) {
    textNext.value = 'Sigueinte'
  }
}
const pre = (d) => {
  e1.value++
  if (e1.value === 3) {
    textNext.value = 'Enviar'
  } else if (e1.value === 4) {
    tipoBoton.value = 'submit'
    en(d)
    tipo.value = true
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

const en = (dat) => {
  console.log('estos', dat)
}
</script>
<template>
  <div class="mr-2 ml-2">
    <v-row>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <v-card height="auto" elevation="0">
          <img :src="ima1.src" v-if="e1 == 1" class="imag" />
          <img :src="ima2.src" v-if="e1 == 2" class="imag" />
          <img :src="ima3.src" v-if="e1 == 3" class="imag" />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-stepper v-model="e1">
          <template v-slot:default="{ prev, next }">
            <v-stepper-header>
              <template v-for="n in item" :key="n">
                <v-stepper-item :complete="e1 > n.a" :step="n.a" :value="n.a"></v-stepper-item>

                <v-divider v-if="n !== item" :key="n.a"></v-divider>
              </template>
            </v-stepper-header>

            <v-form @submit.prevent="">
              <v-stepper-window>
                <v-stepper-window-item v-for="n in item" :key="n.a" :value="n.a">
                  <v-card color="" height="auto" elevation="0">
                    <v-row>
                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Ancho de asiento</strong>
                        </p>
                        <v-radio-group v-model="dat.anchoDeAsiento" inline>
                          <v-radio label="1-1/4” Tubo" value="1-1/4"></v-radio>
                          <v-radio label="1-1/2” Tubo" value="1-1/2"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="6" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong> Largo del asiento</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.largoAsieno"></v-text-field>
                      </v-col>
                      <v-col cols="6" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong> Barrenos N/C</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.barrenos"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Largo total del asiento</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.largoTotalAsiento"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Estrechamiento asiento</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.estrechamientoAsiento"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>dobles</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.isDobles"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Estilo frontal</strong>
                        </p>
                        <v-radio-group v-model="dat.estiloFrontal" inline>
                          <v-radio label="“V”" value="V"></v-radio>
                          <v-radio label="“Y”" value="Y"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de asiento parte trasera</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.alturaAsientoTrasero"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de asiento parte frontal</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.alturaAsientoFrontal"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de respaldo</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.alturaRespaldo"
                        ></v-text-field>
                        <v-radio-group v-model="dat.tipoRespaldo" inline>
                          <v-radio label="Fijo N/C" value="Fijo N/C"></v-radio>
                          <v-radio label="Plegable" value="Plegable"></v-radio>
                          <v-radio label="Estandar" value="Estandar"></v-radio>
                          <v-radio label="Bandas" value="Bandas"></v-radio>
                          <v-radio label="Ergonomico" value="Ergonomico"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Angulo del respaldo</strong>
                        </p>
                        <v-radio-group v-model="dat.anguloRespaldo" inline>
                          <v-radio label="0º" value="0"></v-radio>
                          <v-radio label="3º" value="3"></v-radio>
                          <v-radio label="6º" value="6"></v-radio>
                          <v-radio label="9º" value="9"></v-radio>
                          <v-radio label="11º" value="11"></v-radio>
                        </v-radio-group>
                        <p class="text-medium-emphasis">
                          <strong>Impulsores manuales</strong>
                        </p>
                        <v-radio-group v-model="dat.isImpulsoresManuales" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <p class="text-medium-emphasis">
                          <strong>Extenciones</strong>
                        </p>
                        <v-radio-group v-model="dat.isExtenciones" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Ancho de estribo </strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.anchoEstribo"></v-text-field>
                        <v-radio-group v-model="dat.tipoAnchoEstribo" inline>
                          <v-radio label="Ajustable (std)" value="Ajustable (std)"></v-radio>
                          <v-radio label="Especial" value="Especial"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="4" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Largo de tibia y perone Izq.</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.largoTibiaPeroneIzq"
                        ></v-text-field>
                      </v-col>
                      <v-col cosl="4" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Largo de tibia y perone Der.</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.largoTibiaPeroneDer"
                        ></v-text-field>
                      </v-col>
                      <v-col cosl="4" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Contra estribo</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.contraEstribo"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia de respaldo a centro de gravedad</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.disRespaldoACentroGravedad"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia de centro de grav. A buje delantero</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.disCentroGravedadABujeDelantero"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia de buje delantero al estribo</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.disBujeDelanteroEstrino"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia entre bujes delanteros</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.disBujesDelanteros"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Ruedas delanteras</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoRuedasDelanteras" inline>
                          <v-radio label="Plasticas" value="Plasticas"></v-radio>
                          <v-radio label="Aluminio" value="Aluminio"></v-radio>
                          <v-radio label="Luz" value="Luz"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Tijeras</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoRuedasDelanteras" inline>
                          <v-radio label="1 Brazo" value="1 Brazo"></v-radio>
                          <v-radio label="2 Brazos" value="2 Brazos"></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.medidaTijeras" inline>
                          <v-radio label="3”" value="3"></v-radio>
                          <v-radio label="4”" value="4"></v-radio>
                          <v-radio label="4 ½”" value="4 ½"></v-radio>
                          <v-radio label="5”" value="5"></v-radio>
                          <v-radio label="6 ¼” (Sin luz)" value="6 ¼"></v-radio>
                          <v-radio label="7“ (sin Luz)" value="7"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Separación entre respaldo y la rueda</strong>
                        </p>
                        <v-radio-group v-model="dat.separacionRespaldoRueda" inline>
                          <v-radio label="1”" value="1"></v-radio>
                          <v-radio label="1 ½”" value="1 ½"></v-radio>
                          <v-radio label="2”" value="2"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Inclinación Rod. traseras.</strong>
                        </p>
                        <v-radio-group v-model="dat.inclinacionRodTraseras" inline>
                          <v-radio label="3º (std)" value="3"></v-radio>
                          <v-radio label="7º" value="7"></v-radio>
                          <v-radio label="9º" value="9"></v-radio>
                          <v-radio label="12º" value="12"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Anti-vuelco una rueda $ 1,500.00 (movible)</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.antivuelcoUnaRueda"
                        ></v-text-field>
                        <p class="text-medium-emphasis">
                          <strong>Anti-vuelco doble $ 2,150.00 (movible)</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.antivuelcoDosRuedas"
                        ></v-text-field>
                        <v-radio-group v-model="dat.tipoEstiloAntiVuelco" inline>
                          <v-radio label="Estilo en “V”" value="Estilo en V"></v-radio>
                          <v-radio label="Recta" value="Recta"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Altura lateral</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.alturaLaterar"></v-text-field>
                        <v-radio-group v-model="dat.tipoAlturaLateral" inline>
                          <v-radio label="Fijos" value="Fijos"></v-radio>
                          <v-radio label="Atornillados" value="Atornillados"></v-radio>
                          <v-radio label="Aluminio" value="Aluminio"></v-radio>
                          <v-radio label="Fibra de carbono" value="Fibra de carbono"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Rodamiento Trasero:</strong>
                        </p>
                        <v-radio-group v-model="dat.rodamientoTrasero" inline>
                          <v-radio label="20”" value="20"></v-radio>
                          <v-radio label="22”" value="22"></v-radio>
                          <v-radio label="24”" value="24"></v-radio>
                          <v-radio label="25”" value="25"></v-radio>
                          <v-radio label="26”" value="26"></v-radio>
                          <v-radio label="27” (700c 23x622)" value="27"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Color</strong>
                        </p>
                        <v-radio-group v-model="dat.color" inline>
                          <v-radio label="Negro" value="Negro"></v-radio>
                          <v-radio label="Blanco" value="Blanco"></v-radio>
                          <v-radio label="Verde" value="Verde"></v-radio>
                          <v-radio label="Amarillo" value="Amarillo"></v-radio>
                          <v-radio label="Aluminio" value="Aluminio"></v-radio>
                          <v-radio label="Rojo" value="Rojo"></v-radio>
                          <v-radio label="Mandarina" value="Mandarina"></v-radio>
                          <v-radio label="Violeta" value="Violeta"></v-radio>
                          <v-radio label="Gris rata" value="Gris rata"></v-radio>
                          <v-radio label="Azul" value="Azul"></v-radio>
                          <v-radio label="Oro" value="Oro"></v-radio>
                          <v-radio label="Buganbilia" value="Buganbilia"></v-radio>
                          <v-radio label="Morado" value="Morado"></v-radio>
                          <v-radio label="Candy" value="Candy"></v-radio>
                          <v-radio label="Sparkle" value="Sparkle"></v-radio>
                          <v-radio label="Brillo" value="Brillo"></v-radio>
                          <v-radio label="Mate" value="Mate"></v-radio>
                          <v-radio label="Dorman" value="Dorman"></v-radio>
                        </v-radio-group>
                        <p class="text-medium-emphasis">
                          <strong>Otro Color</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.otroColor"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>2do color $ 1,000.00</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.segundoColor"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>3er color $ 2,000.00</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.tercerColor"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Color d accesorios std..N/C</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.colorAccesorios"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Otro tono $ 800.00</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.otroTono"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Frenos</strong>
                        </p>
                        <v-radio-group v-model="dat.isFrenos" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.tipoFrenos" inline>
                          <v-radio label="Plastico $ 900.00" value="Plastico"></v-radio>
                          <v-radio label="Alum. $1200.00" value="Aluminio"></v-radio>
                          <v-radio label="Tijera $ 1,200.00" value="Tijera"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Coderas</strong>
                        </p>
                        <v-radio-group v-model="dat.isCoderas" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.tipoCoderas" inline>
                          <v-radio label="C/Almoadilla $ 000.00" value="C/Almoadilla"></v-radio>
                          <v-radio label="C/Grip $ N/C" value="C/Grip"></v-radio>
                          <v-radio label="Desmontables" value="Desmontables"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-stepper-actions>
                    <template v-slot:next>
                      <v-btn @click="pre(dat)" :type="tipoBoton" :disabled="tipo">{{
                        textNext
                      }}</v-btn>
                    </template>
                    <template v-slot:prev>
                      <v-btn @click="ant()" type="button" :disabled="e1 == 1">Anterior</v-btn>
                    </template>
                  </v-stepper-actions>
                </v-stepper-window-item>
              </v-stepper-window>
            </v-form>
          </template>
        </v-stepper>
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
