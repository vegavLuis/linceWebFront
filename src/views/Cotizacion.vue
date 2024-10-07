<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSillasUsoDiario } from '../stores/usodiario/sillasUsodiario.js'
import { useSillasInfantiles } from '../stores/sillasInfantiles.js'
import { useSillasDeportivas } from '../stores/sillasDeportivas.js'
import { useCotizacionStore } from '../stores/cotizacion.js'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckCircle } from '@mdi/js'

const storeCotizacion = useCotizacionStore()
const dataSillasUsoDiario = useSillasUsoDiario()
const dataSillasInfantiles = useSillasInfantiles()
const dataSillasDeportivas = useSillasDeportivas()
const route = useRoute()

const id = route.params.id
const dataSilla = ref([])
const ima1 = ref('')
const ima2 = ref('')
const ima3 = ref('')
const dialog = ref(false)
const isTipoSilla = ref('')
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
  tipoCojin: '',
  cmsCojin: '',
  otraEspecificacionCojin: '',
  anguloRespaldo: '',
  isImpulsoresManuales: '',
  tipoImpulsoresManuales: '',
  isExtenciones: '',
  anchoEstribo: '',
  tipoAnchoEstribo: '',
  tipoEstribo: '',
  largoTibiaPeroneIzq: '',
  largoTibiaPeroneDer: '',
  contraEstribo: '',
  disRespaldoACentroGravedad: '',
  disCentroGravedadABujeDelantero: '',
  disBujeDelanteroEstribo: '',
  disBujeDelanteroDefensa: '',
  disBujesDelanteros: '',
  tipoRuedasDelanteras: '',
  tipoEstiloDefensa: '',
  tijeras: '',
  medidaTijeras: '',
  separacionRespaldoRueda: '',
  inclinacionRodTraseras: '',
  antiVuelco: '',
  quintaRuedaAntiVuelco: '',
  sextaRueda: '',
  tipoEstiloAntiVuelco: '',
  alturaLaterar: '',
  tipoAlturaLateral: '',
  rodamientoTrasero: '',
  isRodTraSTD: '',
  tipoSentinel: '',
  xCore: '',
  tipoCorima: '',
  tipoCobra: '',
  tipoViper: '',
  isRodTraSPINERGY: '',
  colorSpinergy: '',
  isRodTraCombinado: '',
  tipoAereoImpulsor: '',
  tipoAmarre: '',
  isDobAmarre: '',
  isTipoAmarre: '',
  isTipoAmarreMetros: '',
  tipoClipStrap: '',
  medidaClipStrap: '',
  numPzClipStrap: '',
  color: '',
  otroColor: '',
  segundoColor: '',
  tercerColor: '',
  colorAccesorios: '',
  otroTono: '',
  isFrenos: '',
  tipoFrenos: '',
  isCoderas: '',
  tipoCoderas: '',
  tipoCangureraFD: '',
  isPortaVasosFD: '',
  isTermoPlasticoFD: '',
  istermoAlumnioFD: '',
  tipoProtectorFrontalFD: '',
  protectorDefensa: '',
  proteccionpClipStrapPz: '',
  isKitParcehsFD: '',
  isKitLlavesFD: '',
  isBombaAirePedalFD: '',
  isBombaParaCarroFD: '',
  isBolsaTransportadoraRuedasFD: '',
  tipoLlantasFD: '',
  colorLlantaFD: '',
  isLlanteasExtrasFD: [
    {
      medidia: '',
      numeroPares: ''
    }
  ],
  isCamarasExtrasFD: [
    {
      medidia: '',
      numeroPares: ''
    }
  ],
  parachoqueAntivuelcoFrontalFD: '',
  argollasBandaFD: '',
  botonConCuerdaFD: '',
  numeroPiezasBotonCuedaFD: '',
  distanciaBotonCuerda: ''
})

onMounted(() => {
  storeCotizacion.e1 = 1
})

const buscarSilla = async () => {
  dataSilla.value = dataSillasUsoDiario.data.find((element) => element.nombre == id)
  isTipoSilla.value = 'usoDiario'

  if (dataSilla.value === undefined) {
    dataSilla.value = dataSillasInfantiles.data.find((element) => element.nombre == id)
    isTipoSilla.value = 'sillasInfantiles'
  }
  if (dataSilla.value === undefined) {
    dataSilla.value = dataSillasDeportivas.data.find((element) => element.nombre == id)
    isTipoSilla.value = 'sillasDeportivas'
  }

  ima1.value = dataSilla.value.imagenes[0]
  ima2.value = dataSilla.value.imagenes[1]
  ima3.value = dataSilla.value.imagenes[2]

  dat.value.tipoModelo = dataSilla.value.nombre
}
const revisar = () => {
  if (storeCotizacion.storeUser.user._id === undefined) {
    dialog.value = true
  }
}

buscarSilla()
revisar()
</script>
<template>
  <div class="mr-2 ml-2">
    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        text="Inicia sesion para poder enviar una cotizacion"
        title="Iniciar Sesion"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <v-card height="auto" elevation="0">
          <img :src="ima1.src" v-if="storeCotizacion.e1 == 1" class="imag" />
          <img :src="ima2.src" v-if="storeCotizacion.e1 == 2" class="imag" />
          <img :src="ima3.src" v-if="storeCotizacion.e1 == 3" class="imag" />
          <img :src="ima3.src" v-if="storeCotizacion.e1 == 4" class="imag" />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-stepper v-model="storeCotizacion.e1">
          <template v-slot:default="{ prev, next }">
            <v-stepper-header>
              <template v-for="n in storeCotizacion.item" :key="n">
                <v-stepper-item
                  :complete="storeCotizacion.e1 > n.a"
                  :step="n.a"
                  :value="n.a"
                ></v-stepper-item>

                <v-divider v-if="n !== storeCotizacion.item" :key="n.a"></v-divider>
              </template>
            </v-stepper-header>

            <v-form @submit.prevent="">
              <v-stepper-window>
                <v-stepper-window-item v-for="n in storeCotizacion.item" :key="n.a" :value="n.a">
                  <v-card color="" height="auto" elevation="0">
                    <v-row>
                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Modelos con suspencion</strong>
                        </p>
                        <v-radio-group v-model="dat.isTipo" inline>
                          <v-radio label="Completa" value="Completa"></v-radio>
                          <v-radio label="Solo Cuadro" value="Solo Cuadro"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Ancho de asiento</strong>
                        </p>
                        <v-radio-group
                          v-model="dat.anchoDeAsiento"
                          inline
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <v-radio label="1-1/4” Tubo" value="1-1/4"></v-radio>
                          <v-radio label="1-1/2” Tubo" value="1-1/2"></v-radio>
                        </v-radio-group>
                        <v-text-field
                          v-else="isTipoSilla === 'sillasDeportivas'"
                          variant="outlined"
                          v-model="dat.anchoDeAsiento"
                          type="Number"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong> Largo del asiento</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.largoAsieno"
                          type="Number"
                        ></v-text-field>
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
                          type="Number"
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
                          <v-radio
                            v-show="isTipoSilla === 'sillasDeportivas'"
                            label="“LL”"
                            value="LL"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de asiento parte trasera</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.alturaAsientoTrasero"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de asiento parte frontal</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.alturaAsientoFrontal"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Altura de respaldo</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.alturaRespaldo"
                        ></v-text-field>
                        <v-radio-group v-model="dat.tipoRespaldo" inline>
                          <!-- <v-radio label="Fijo N/C" value="Fijo N/C"></v-radio>
                          <v-radio label="Plegable" value="Plegable"></v-radio>
                          <v-radio label="Estandar" value="Estandar"></v-radio>
                          <v-radio label="Bandas" value="Bandas"></v-radio>
                          <v-radio label="Ergonomico" value="Ergonomico"></v-radio> -->
                          <v-radio label="Estandar $ N/C" value="Estandar $ N/C"></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Bandas $ 250.00"
                            value="Bandas $ 250.00"
                          ></v-radio>
                          <v-radio
                            v-else="isTipoSilla.value === 'sillasDeportivas'"
                            label="Bandas $ 20.00 usd"
                            value="Bandas $ 20.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Ergonomico"
                            value="Ergonomico"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Ergonomico $ 55.00 usd"
                            value="Ergonomico"
                          ></v-radio>
                          <v-radio label="ROHO $ 12,000.00" value="12000"></v-radio>
                          <v-radio label="Corto" value="Corto"></v-radio>
                          <v-radio label="Alto" value="Alto"></v-radio>
                          <v-radio label="Contorno STD" value="Contorno STD"></v-radio>
                          <v-radio label="Mediano" value="Mediano"></v-radio>
                          <v-radio label="Largo" value="Largo"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col v-if="n.a === 1 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>Cojin</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoCojin" inline>
                          <v-radio label="Suave" value="Suave"></v-radio>
                          <v-radio label="Firme" value="Firme"></v-radio>
                        </v-radio-group>
                        <p class="text-medium-emphasis">
                          <strong>Cms.</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.cmsCojin"
                        ></v-text-field>
                        <p class="text-medium-emphasis">
                          <strong>Otra especificacion</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          v-model="dat.otraEspecificacionCojin"
                        ></v-text-field>
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
                        <v-radio-group v-model="dat.tipoImpulsoresManuales" inline>
                          <v-radio label="Corto atornillado" value="Corto atornillado"></v-radio>
                          <v-radio label="Largo Atornillado" value="Largo Atornillado"></v-radio>
                          <v-radio label="Modelo en “L”" value="Modelo en “L”"></v-radio>
                          <v-radio label="Modelo en “T”" value="Modelo en “T”"></v-radio>
                          <v-radio label="Retractil $ 4,500.00" value="4500"></v-radio>
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
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.anchoEstribo"
                        ></v-text-field>
                        <v-radio-group v-model="dat.tipoAnchoEstribo" inline>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Ajustable (std)"
                            value="Ajustable (std)"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="STD Ajustable N/C"
                            value="STD Ajustable N/C"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="Fijo $ 30.00 usd"
                            value="Fijo $ 30.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Especial"
                            value="Especial"
                          ></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.tipoEstribo" inline>
                          <v-radio label="Aluminio N/C" value="Aluminio"></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Titanio $ 1,050.00"
                            value="1050"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="Titanio $ 55.00 usd"
                            value="Titanio $ 55.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="C/Placa Alum. $ 150.00"
                            value="150"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="C/Placa Aluminio $ 5.00 usd"
                            value="C/Placa Aluminio $ 5.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Carbono $ 500.00"
                            value=""
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="Carbono $ 35.00 usd"
                            value="Carbono $ 35.00 usd"
                          ></v-radio>
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
                          type="Number"
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
                          type="Number"
                          v-model="dat.disRespaldoACentroGravedad"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia de centro de grav. A buje delantero</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.disCentroGravedadABujeDelantero"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 1 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>Distancia de buje delantero al estribo</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.disBujeDelanteroEstribo"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>Distancia de buje delantero a defensa</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.disBujeDelanteroDefensa"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Distancia entre bujes delanteros</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.disBujesDelanteros"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 1 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>Ruedas delanteras</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoRuedasDelanteras" inline>
                          <v-radio label="Plasticas" value="Plasticas"></v-radio>
                          <v-radio label="Aluminio" value="Aluminio"></v-radio>
                          <v-radio label="Luz" value="Luz"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>Ruedas delanteras</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoRuedasDelanteras" inline>
                          <v-radio label="2”" value="2”"></v-radio>
                          <v-radio label="3”" value="3”"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>Estilo defensa</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoEstiloDefensa" inline>
                          <v-radio label="Redonda" value="Redonda"></v-radio>
                          <v-radio label="Recta" value="Recta"></v-radio>
                          <v-radio label="Octagonal" value="Octagonal"></v-radio>
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
                          <v-radio label="3”" value="3”"></v-radio>
                          <v-radio label="4”" value="4”"></v-radio>
                          <v-radio label="4 ½”" value="4 ½”"></v-radio>
                          <v-radio label="5”" value="5"></v-radio>
                          <v-radio label="6 ¼” (Sin luz)" value="6 ¼” (Sin luz)"></v-radio>
                          <v-radio label="7“ (sin Luz)" value="7” (sin Luz)"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Separación entre respaldo y la rueda</strong>
                        </p>
                        <v-radio-group v-model="dat.separacionRespaldoRueda" inline>
                          <v-radio label="1”" value="1”"></v-radio>
                          <v-radio label="1 ½”" value="1 ½”"></v-radio>
                          <v-radio label="2”" value="2”"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 1">
                        <p class="text-medium-emphasis">
                          <strong>Inclinación Rod. traseras.</strong>
                        </p>
                        <v-radio-group v-model="dat.inclinacionRodTraseras" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <v-radio label="3º (std)" value="3º (std)"></v-radio>
                            <v-radio label="7º" value="7º"></v-radio>
                            <v-radio label="9º" value="9º"></v-radio>
                            <v-radio label="12º" value="12º"></v-radio>
                          </div>
                          <div v-if="isTipoSilla === 'sillasDeportivas'">
                            <v-radio label="13º" value="13º"></v-radio>
                            <v-radio label="15º" value="15º"></v-radio>
                            <v-radio label="16º" value="16º"></v-radio>
                            <v-radio label="17º" value="17º"></v-radio>
                            <v-radio label="18º" value="18º"></v-radio>
                            <v-radio label="20º" value="20º"></v-radio>
                          </div>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <v-radio-group v-model="dat.antiVuelco" inline>
                          <v-radio
                            label="Anti-vuelco una rueda $ 1,500.00"
                            value="Anti-vuelco una rueda $ 1,500.00"
                          ></v-radio>
                          <v-radio label="Doble. $ 2150.00" value="Doble. $ 2150.00"></v-radio>
                        </v-radio-group>
                        <!-- <p class="text-medium-emphasis">
                          <strong>Anti-vuelco una rueda $ 1,500.00 (movible)</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.antiVuelco"></v-text-field>
                        <p class="text-medium-emphasis">
                          <strong>Anti-vuelco doble $ 2,150.00 (movible)</strong>
                        </p> -->
                        <!-- <v-text-field
                          variant="outlined"
                          v-model="dat.antivuelcoDosRuedas"
                        ></v-text-field> -->
                        <v-radio-group v-model="dat.tipoEstiloAntiVuelco" inline>
                          <v-radio label="Estilo en “V”" value="Estilo en V"></v-radio>
                          <v-radio label="Recta" value="Recta"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>5ta Rueda antivuelco</strong>
                        </p>
                        <v-radio-group v-model="dat.quintaRuedaAntiVuelco" inline>
                          <v-radio label="Fija N/C" value="Fija N/C"></v-radio>
                          <v-radio
                            label="Removible $ 95.00 usd"
                            value="Removible $ 95.00 usd"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2 && isTipoSilla === 'sillasDeportivas'">
                        <p class="text-medium-emphasis">
                          <strong>6ta Rueda </strong>
                        </p>
                        <v-radio-group v-model="dat.quintaRuedaAntiVuelco" inline>
                          <v-radio label="Solo fija" value="Solo fija"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Altura lateral</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.alturaLaterar"
                        ></v-text-field>
                        <v-radio-group v-model="dat.tipoAlturaLateral" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <v-radio label="Fijos" value="Fijos"></v-radio>
                            <v-radio label="Atornillados" value="Atornillados"></v-radio>
                            <v-radio label="Aluminio" value="Aluminio"></v-radio>
                            <v-radio
                              label="F. de Carbono $ 1,500.00"
                              value="F. de Carbono $ 1,500.00"
                            ></v-radio>
                            <v-radio label="Solo lamina" value="Solo lamina"></v-radio>
                            <v-radio label="Deslisable" value="Deslisable"></v-radio>
                            <v-radio
                              label="Fijo C/filo tubo $ 245.00"
                              value="Fijo C/filo tubo $ 245.00"
                            ></v-radio>
                          </div>
                          <div v-if="isTipoSilla === 'sillasDeportivas'">
                            <v-radio
                              label="Fijo Alum. C/filo tubo"
                              value="Fijo Alum. C/filo tubo"
                            ></v-radio>
                            <v-radio label="Solo lamina" value="Solo lamina"></v-radio>
                            <v-radio label="Atornillado" value="Atornillado"></v-radio>
                            <v-radio label="Aluminio" value="Aluminio"></v-radio>
                            <v-radio label="Fibra de Carbono" value="Fibra de Carbono"></v-radio>
                          </div>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Rodamiento Trasero:</strong>
                        </p>
                        <v-radio-group v-model="dat.rodamientoTrasero" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <v-radio label="20”" value="20”"></v-radio>
                            <v-radio label="22”" value="22”"></v-radio>
                            <v-radio label="24”" value="24”"></v-radio>
                            <v-radio label="25”" value="25”"></v-radio>
                            <v-radio label="26”" value="26”"></v-radio>
                            <v-radio label="27” (700c 23x622)" value="27” (700c 23x622)"></v-radio>
                            <v-radio label="Ejes de ½” N/C" value="Ejes de ½” N/C"></v-radio>
                            <v-radio
                              label="Ejes de 5/8” (Set baleros y recibidores) $ 1,200.00"
                              value="Ejes de 5/8"
                            ></v-radio>
                          </div>
                          <div>
                            <v-radio label="24”" value="24”"></v-radio>
                            <v-radio label="25”" value="25”"></v-radio>
                            <v-radio label="26”" value="26”"></v-radio>
                            <v-radio label="700c" value="700c"></v-radio>
                            <v-radio label="Ejes de ½” N/C" value="Ejes de ½” N/C"></v-radio>
                            <v-radio
                              label="Ejes de 5/8” (Set baleros y recibidores) $ 60.00 usd"
                              value="Ejes de 5/8” (Set baleros y recibidores) $ 60.00 usd"
                            ></v-radio>
                          </div>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>STD</strong>
                        </p>
                        <v-radio-group v-model="dat.isRodTraSTD" inline>
                          <v-radio label="Rayos Inox. Recto" value="Rayos Inox. Recto"></v-radio>
                          <v-radio label="Cruzado" value="Cruzado"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>SENTINEL</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoSentinel">
                          <v-radio
                            label="12 rayos inox. $ 6000.00"
                            value="12 rayos inox. $ 6000.00"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>X-Core $ 18,000.00</strong>
                        </p>
                        <v-radio-group v-model="dat.xCore" inline>
                          <v-radio label="Negra" value="Negra"></v-radio>
                          <v-radio label="Amarilla" value="Amarilla"></v-radio>
                          <v-radio label="Roja" value="Roja"></v-radio>
                          <v-radio label="Roja" value="Roja"></v-radio>
                          <v-radio label="Azul" value="Azul"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>CORIMA Carbono 4 brazos $ 32,000.00</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoCorima">
                          <v-radio label="SOLO 24”" value="SOLO 24”"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>COBRA $ 10,500.00</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoCobra">
                          <v-radio label="SOLO 24”" value="SOLO 24”"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>VIPER $ 12,500.00</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoViper">
                          <v-radio label="SOLO 24”" value="SOLO 24”"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>SPINERGY</strong>
                        </p>
                        <v-radio-group v-model="dat.isRodTraSPINERGY" inline>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="XLX (std. Para uso cotidiano)"
                            value="XLX (std. Para uso cotidiano)"
                          ></v-radio>
                          <v-radio label="SLX (RECTO)" value="SLX (RECTO)"></v-radio>
                          <v-radio label="XSLX (CRUZADO)" value="XSLX (CRUZADO)"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Color Spinergy</strong>
                        </p>
                        <v-radio-group v-model="dat.colorSpinergy" inline>
                          <v-radio label="Blanco" value="Blanco"></v-radio>
                          <v-radio
                            label="Negro $ 1050.00 usd"
                            value="Negro $ 1050.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Negro $ 19,500.00"
                            value="Negro $ 19,500.00"
                          ></v-radio>
                          <v-radio
                            label="Combinado $ 60.00 usd"
                            value="Combinado $ 60.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Combinado $ 1,200.00"
                            value="Combinado $ 1,200.00"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Aereo impulsor</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoAereoImpulsor" inline>
                          <v-radio label="Cerrado" value="Cerrado"></v-radio>
                          <v-radio label="Abierto" value="Abierto"></v-radio>
                          <v-radio
                            v-if="
                              n.a === 2 &&
                              (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                            "
                            label="Plastificado $ 950.00"
                            value="Plastificado $ 950.00"
                          ></v-radio>
                          <v-radio
                            v-if="
                              n.a === 2 &&
                              (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                            "
                            label="Tipo Timon $ 1,300.00"
                            value="Tipo Timon $ 1,300.00"
                          ></v-radio>
                          <v-radio
                            v-if="
                              n.a === 2 &&
                              (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                            "
                            label="Cubre Aro de vinil $ 800.00 24”"
                            value="Cubre Aro de vinil $ 800.00 24”"
                          ></v-radio>
                          <v-radio
                            v-if="
                              n.a === 2 &&
                              (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                            "
                            label="Cubre Aro de vinil $ 800.00 25”"
                            value="Cubre Aro de vinil $ 800.00 25”"
                          ></v-radio>
                          <v-radio label="6-Cejas" value="6-Cejas"></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="12-Cejas $ 30.00 usd"
                            value="12-Cejas $ 30.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="12-cejas $ 600.00"
                            value="12-cejas $ 600.00"
                          ></v-radio>
                          <v-radio label="S/cortar cejas N/C" value="S/cortar cejas N/C"></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="Corte de cejas $ 6.00 usd"
                            value="Corte de cejas $ 6.00 usd"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Corte de cejas$ 120.00"
                            value="Corte de cejas$ 120.00"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p class="text-medium-emphasis">
                          <strong>Amarres</strong>
                        </p>
                        <v-radio-group v-model="dat.tipoAmarre" inline>
                          <v-radio label="Pantorrilla N/C" value="Pantorrilla N/C"></v-radio>
                          <v-radio label="Ingle" value="Ingle"></v-radio>
                          <v-radio label="Ingle" value="Ingle"></v-radio>
                          <v-radio label="Femur" value="Femur"></v-radio>
                          <v-radio label="Pies" value="Pies"></v-radio>
                          <v-radio label="Tronco" value="Tronco"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <v-radio-group v-model="dat.isDobAmarre" inline>
                          <v-radio label="Sencilla" value="Sencilla"></v-radio>
                          <v-radio label="Doble" value="Doble"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <v-radio-group v-model="dat.isTipoAmarre" inline>
                          <v-radio label="Velcro STD" value="Velcro STD"></v-radio>
                          <v-radio label="C/Hebilla" value="C/Hebilla"></v-radio>
                        </v-radio-group>
                        <p class="text-medium-emphasis">
                          <strong>Metros</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.isTipoAmarreMetros"
                        ></v-text-field>
                      </v-col>

                      <div v-if="n.a === 2">
                        <v-col cols="12">
                          <p class="text-medium-emphasis">
                            <strong>Clip Strap</strong>
                          </p>
                          <v-radio-group v-model="dat.tipoClipStrap" inline>
                            <v-radio label="Sencillo" value="Sencillo"></v-radio>
                            <v-radio label="Doble" value="Doble"></v-radio>
                          </v-radio-group>
                        </v-col>

                        <v-col
                          cols="12"
                          v-if="
                            dat.tipoClipStrap === 'Sencillo' && isTipoSilla === 'sillasDeportivas'
                          "
                        >
                          <p class="text-medium-emphasis">
                            <strong>Medida</strong>
                          </p>
                          <v-radio-group v-model="dat.medidaClipStrap">
                            <v-radio label="6” $ 40.00usd" value="6” $ 40.00usd"></v-radio>
                            <v-radio label="8” $ 40.00usd" value="8” $ 40.00usd"></v-radio>
                            <v-radio label="10” $ 45.00usd" value="10” $ 45.00usd"></v-radio>
                            <v-radio label="12” $ 45.00usd" value="12” $ 45.00usd"></v-radio>
                          </v-radio-group>
                        </v-col>

                        <v-col
                          cols="12"
                          v-if="dat.tipoClipStrap === 'Doble' && isTipoSilla === 'sillasDeportivas'"
                        >
                          <p class="text-medium-emphasis">
                            <strong>Medida</strong>
                          </p>
                          <v-radio-group v-model="dat.medidaClipStrap">
                            <v-radio label="6” $ 75.00usd" value="6” $ 75.00usd"></v-radio>
                            <v-radio label="8” $ 75.00usd" value="8” $ 75.00usd"></v-radio>
                            <v-radio label="10” $ 45.00usd" value="10” $ 45.00usd"></v-radio>
                            <v-radio label="12” $ 85.00usd" value="12” $ 85.00usd"></v-radio>
                          </v-radio-group>
                        </v-col>

                        <v-col
                          cols="12"
                          v-if="
                            (dat.tipoClipStrap === 'Secilla' && isTipoSilla === 'usoDiario') ||
                            isTipoSilla === 'sillasInfantiles'
                          "
                        >
                          <p class="text-medium-emphasis">
                            <strong>Medida</strong>
                          </p>
                          <v-radio-group v-model="dat.medidaClipStrap">
                            <v-radio label="6” $ 775.00" value="6” $ 775.00"></v-radio>
                            <v-radio label="8” $ 775.00" value="8” $ 775.00"></v-radio>
                            <v-radio label="10” $ 850.00" value="10” $ 850.00"></v-radio>
                            <v-radio label="12” $ 850.00" value="12” $ 850.00"></v-radio>
                          </v-radio-group>
                        </v-col>

                        <v-col
                          cols="12"
                          v-if="dat.tipoClipStrap === 'Sencillo' || dat.tipoClipStrap === 'Doble'"
                        >
                          <p class="text-medium-emphasis">
                            <strong>Numero de piezas</strong>
                          </p>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.numPzClipStrap"
                            type="Number"
                          ></v-text-field>
                        </v-col>
                      </div>

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
                        <p
                          class="text-medium-emphasis"
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <strong>2do color $ 1,000.00</strong>
                        </p>
                        <p class="text-medium-emphasis" v-if="isTipoSilla === 'sillasDeportivas'">
                          <strong>2do color $ 50.00 usd</strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.segundoColor"></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 2">
                        <p
                          class="text-medium-emphasis"
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <strong>3er color $ 2,000.00</strong>
                        </p>
                        <p class="text-medium-emphasis" v-if="isTipoSilla === 'sillasDeportivas'">
                          <strong>3er color $ 100.00 usd</strong>
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
                        <p
                          class="text-medium-emphasis"
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <strong>Otro tono $ 800.00</strong>
                        </p>
                        <p class="text-medium-emphasis" v-if="isTipoSilla === 'sillasDeportivas'">
                          <strong>Otro tono $ 40.00 usd </strong>
                        </p>
                        <v-text-field variant="outlined" v-model="dat.otroTono"></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
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

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 2 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
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

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 3 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <p class="text-medium-emphasis">
                          <strong>Cangureras: </strong>
                        </p>
                        <v-radio-group v-model="dat.tipoCangureraFD" inline>
                          <v-radio
                            label="Chica $ 300.00 (Un cierre)"
                            value="Chica $ 300.00 (Un cierre)"
                          ></v-radio>
                          <v-radio
                            label="Medidana $ 350.00 (Dos cierres)"
                            value="Medidana $ 350.00 (Dos cierres)"
                          ></v-radio>
                          <v-radio
                            label="Grande $ 400.00 (Tres cierres)"
                            value="Grande $ 400.00 (Tres cierres)"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="6"
                        v-if="
                          n.a === 3 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <v-radio-group v-model="dat.isPortaVasosFD" inline>
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Porta vasos $ 200.00</strong>
                          </p>
                          <v-radio value="Porta vasos $ 200.00"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="6" v-if="n.a === 3 && isTipoSilla === 'sillasDeportivas'">
                        <v-radio-group v-model="dat.isPortaVasosFD" inline>
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Porta vasos $ 10.00 usd</strong>
                          </p>
                          <v-radio value="Porta vasos $ 10.00 usd"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="6"
                        v-if="
                          n.a === 3 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <v-radio-group v-model="dat.isTermoPlasticoFD" inline>
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Porta vasos $ 200.00</strong>
                          </p>
                          <v-radio value="Termo plastico $ 200.00."></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        cols="12"
                        v-if="
                          n.a === 3 &&
                          (isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles')
                        "
                      >
                        <v-radio-group v-model="dat.istermoAlumnioFD" inline>
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Termo Alum. $ 000.00</strong>
                          </p>
                          <v-radio value="Termo Alum. $ 000.00"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3 && isTipoSilla === 'sillasDeportivas'">
                        <v-radio-group v-model="dat.istermoAlumnioFD" inline>
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Termo $ 5.00 usd</strong>
                          </p>
                          <v-radio value="Termo $ 5.00 usd"></v-radio>
                        </v-radio-group>
                      </v-col>

                      <!-- <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Protectores frontales </strong>
                        </p>
                        <v-radio-group v-model="dat.tipoProtectorFrontalFD" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <v-radio label="Tela $ 140.00" value="Tela $ 140.00"></v-radio>
                            <v-radio label="Piel $ 210.00" value="Piel $ 210.00"></v-radio>
                            <v-radio
                              label="Proccion defensa Aulada $ 190.00"
                              value="Proccion defensa Aulada $ 190.00"
                            ></v-radio>
                            <v-radio
                              label="Protecion P/Clip Strap $ 25.00 pza."
                              value="Protecion P/Clip Strap $ 25.00 pza."
                            ></v-radio>
                          </div>
                          <div>
                            <v-radio label="label" value="value"></v-radio>
                          </div>
                        </v-radio-group>
                        <label
                          class="text-medium-emphasis"
                          v-if="
                            dat.tipoProtectorFrontalFD === 'Protecion P/Clip Strap $ 25.00 pza.'
                          "
                        >
                          <strong>Numero de piezas </strong>
                        </label>
                        <v-text-field
                          v-if="
                            dat.tipoProtectorFrontalFD === 'Protecion P/Clip Strap $ 25.00 pza.'
                          "
                          variant="outlined"
                          type="Number"
                          v-model="dat.numPiezasProtectorFrontalFD"
                        ></v-text-field>
                      </v-col> -->

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Protectores frontales </strong>
                        </p>
                        <v-radio-group v-model="dat.tipoProtectorFrontalFD" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <v-radio label="Tela $ 140.00" value="Tela $ 140.00"></v-radio>
                            <v-radio label="Piel $ 210.00" value="Piel $ 210.00"></v-radio>
                            <v-radio label="Piel $ 210.00" value="Piel $ 210.00"></v-radio>
                          </div>
                          <div v-if="isTipoSilla === 'sillasDeportivas'">
                            <v-radio label="Tela $ 7.00usd" value="Tela $ 7.00usd"></v-radio>
                            <v-radio label="Piel $ 6.00usd" value="Piel $ 6.00usd"></v-radio>
                          </div>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Proccion defensa</strong>
                        </p>
                        <v-radio-group v-model="dat.protectorDefensa" inline>
                          <v-radio
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                            label="Aulada $ 190.00"
                            value="Aulada $ 190.00"
                          ></v-radio>
                          <v-radio
                            v-if="isTipoSilla === 'sillasDeportivas'"
                            label="Aulada $ 5.00 usd"
                            value="Aulada $ 5.00 usd"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p
                          class="text-medium-emphasis"
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <strong>Proccion defensa $ 25.00 pza.</strong>
                        </p>
                        <p class="text-medium-emphasis" v-if="isTipoSilla === 'sillasDeportivas'">
                          <strong>Protecion P/Clip Strap $ 2.00 usd pza.</strong>
                        </p>
                        <p class="text-medium-emphasis">
                          <strong>Numero de piezas</strong>
                        </p>
                        <v-text-field
                          variant="outlined"
                          type="Number"
                          v-model="dat.proteccionpClipStrapPz"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <v-radio-group
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          v-model="dat.isKitParcehsFD"
                          inline
                        >
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Kit de parches $ 000.00</strong>
                          </p>
                          <v-radio value="Kit de parches $ 000.00"></v-radio>
                        </v-radio-group>
                        <v-radio-group
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          v-model="dat.isKitLlavesFD"
                          inline
                        >
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Kit de llaves $ 000.00</strong>
                          </p>
                          <v-radio value="Kit de llaves $ 000.00"></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.isBombaAirePedalFD" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Bomba de aire de pedal $ 490.00</strong>
                            </p>
                            <v-radio value="Bomba de aire de pedal $ 490.00"></v-radio>
                          </div>
                          <div v-if="isTipoSilla === 'sillasDeportivas'">
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Bomba de aire de pedal $ 30.00 usd</strong>
                            </p>
                            <v-radio value="Bomba de aire de pedal $ 30.00 usd"></v-radio>
                          </div>
                        </v-radio-group>
                        <v-radio-group
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          v-model="dat.isBombaParaCarroFD"
                          inline
                        >
                          <p class="text-medium-emphasis d-flex align-center">
                            <strong>Bomba para carro $ 000.00</strong>
                          </p>
                          <v-radio value="Bomba para carro $ 000.00"></v-radio>
                        </v-radio-group>
                        <v-radio-group v-model="dat.isBolsaTransportadoraRuedasFD" inline>
                          <div
                            v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          >
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Bolsa transportadora ruedas $ 1,650.00</strong>
                            </p>
                            <v-radio value="Bolsa transportadora ruedas $ 1,650.00"></v-radio>
                          </div>
                          <div v-if="isTipoSilla === 'sillasDeportivas'">
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Bolsa transportadora ruedas $ 110.00 usd</strong>
                            </p>
                            <v-radio value="Bolsa transportadora ruedas $ 110.00 usd"></v-radio>
                          </div>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Llantas: </strong>
                          <v-radio-group v-model="dat.tipoLlantasFD" inline>
                            <v-radio label="Primo" value="Primo"></v-radio>
                            <v-radio label="Kenda" value="Kenda"></v-radio>
                            <v-radio label="IRC" value="IRC"></v-radio>
                            <v-radio label="Shwalbe" value="Shwalbe"></v-radio>
                            <v-radio label="Shwalbe" value="Shwalbe"></v-radio>
                          </v-radio-group>
                          <v-radio-group v-model="dat.colorLlantaFD" inline>
                            <v-radio label="Gris" value="Gris"></v-radio>
                            <v-radio label="Roja" value="Roja"></v-radio>
                            <v-radio label="Azul" value="Azul"></v-radio>
                            <v-radio label="Amarilla" value="Amarilla"></v-radio>
                          </v-radio-group>
                        </p>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Llantas Extras</strong>
                        </p>
                        <v-radio-group v-model="dat.isLlanteasExtrasFD" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <div v-if="dat.isLlanteasExtrasFD === 'Si'">
                          <p class="text-medium-emphasis">
                            <strong>Numero Llantas ”</strong>
                          </p>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.isLlanteasExtrasFD.medidia"
                          ></v-text-field>
                          <p class="text-medium-emphasis">
                            <strong>Numero Pares</strong>
                          </p>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.isLlanteasExtrasFD.numeroPares"
                          ></v-text-field>
                        </div>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Camaras Extras</strong>
                        </p>
                        <v-radio-group v-model="dat.isCamarasExtrasFD" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <div v-if="dat.isCamarasExtrasFD === 'Si'">
                          <p class="text-medium-emphasis">
                            <strong>Numero Camara ”</strong>
                          </p>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.isCamarasExtrasFD.medidia"
                          ></v-text-field>
                          <p class="text-medium-emphasis">
                            <strong>Numero Pares</strong>
                          </p>
                          <v-text-field
                            variant="outlined"
                            v-model="dat.isCamarasExtrasFD.numeroPares"
                          ></v-text-field>
                        </div>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 3">
                        <p class="text-medium-emphasis">
                          <strong>Extras Soldables </strong>
                        </p>
                        <div
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <v-radio-group v-model="dat.parachoqueAntivuelcoFrontalFD" inline>
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Kit de parches $ 000.00</strong>
                            </p>
                            <v-radio value="Parachoque (antivuelco frontal) $ 250.00"></v-radio>
                          </v-radio-group>
                        </div>
                        <div
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                        >
                          <v-radio-group v-model="dat.argollasBandaFD" inline>
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Argollas Banda $ 200.00 (Pzas 2)</strong>
                            </p>
                            <v-radio value="Parachoque (antivuelco frontal) $ 250.00"></v-radio>
                          </v-radio-group>
                        </div>
                        <div v-if="isTipoSilla === 'sillasDeportivas'">
                          <v-radio-group v-model="dat.argollasBandaFD" inline>
                            <p class="text-medium-emphasis d-flex align-center">
                              <strong>Argollas Banda $ 100.00 usd (Pzas 2)</strong>
                            </p>
                            <v-radio value="Argollas Banda $ 100.00 usd (Pzas 2)"></v-radio>
                          </v-radio-group>
                        </div>
                        <p
                          v-if="isTipoSilla === 'usoDiario' || isTipoSilla === 'sillasInfantiles'"
                          class="text-medium-emphasis"
                        >
                          <strong>Boton C/cuerda $ 100.00 Pza </strong>
                        </p>
                        <p v-if="isTipoSilla === 'sillasDeportivas'" class="text-medium-emphasis">
                          <strong>Boton C/cuerda $ 5.00 usd Pza</strong>
                        </p>
                        <v-radio-group v-model="dat.botonConCuerdaFD" inline>
                          <v-radio label="Si" value="Si"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <div v-if="dat.botonConCuerdaFD == 'Si'">
                          <label
                            ><p class="text-medium-emphasis d-flex align-center">
                              <strong>Numero de Piezas</strong>
                            </p></label
                          >
                          <v-text-field
                            variant="outlined"
                            v-model="dat.numeroPiezasBotonCuedaFD"
                          ></v-text-field>
                        </div>
                        <p class="text-medium-emphasis" v-if="dat.botonConCuerdaFD == 'Si'">
                          <strong>Distancias</strong>
                        </p>
                        <v-text-field
                          type="String"
                          variant="outlined"
                          v-model="dat.distanciaBotonCuerda"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" v-if="n.a === 4">
                        <v-card
                          color="green"
                          height="250px"
                          class="d-flex flex-column align-center justify-center"
                        >
                          <h5 class="my-4">
                            {{ storeCotizacion.msg }}
                          </h5>
                          <svg-icon
                            type="mdi"
                            :path="mdiCheckCircle"
                            size="70"
                            class="d-block my-4"
                          ></svg-icon>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-stepper-actions>
                    <template v-slot:next>
                      <v-btn
                        @click="storeCotizacion.pre(dat)"
                        :type="storeCotizacion.tipoBoton"
                        :disabled="storeCotizacion.tipo"
                        >{{ storeCotizacion.textNext }}</v-btn
                      >
                    </template>
                    <template v-slot:prev>
                      <v-btn
                        @click="storeCotizacion.ant()"
                        type="button"
                        :disabled="storeCotizacion.e1 == 1"
                        >Anterior</v-btn
                      >
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
