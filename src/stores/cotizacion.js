import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useSillasUsoDiario } from '../stores/usodiario/sillasUsodiario.js'
// import { useSillasInfantiles } from '../stores/sillasInfantiles.js'
// import { useSillasDeportivas } from '../stores/sillasDeportivas.js'
import { useAuthUserStore } from '../stores/authUser.js'
import CotizacionApi from '../api/CotizacionApi.js'

export const useCotizacionStore = defineStore('cotizacion', () => {
  const storeUser = useAuthUserStore()
  //   const dataSillasUsoDiario = useSillasUsoDiario()
  //   const dataSillasInfantiles = useSillasInfantiles()
  //   const dataSillasDeportivas = useSillasDeportivas()
  const route = useRoute()
  const router = useRouter()

  const id = route.params.id
  const dataSilla = ref([])
  const ima1 = ref('')
  const ima2 = ref('')
  const ima3 = ref('')
  const msg = ref('')
  const e1 = ref(1)
  const textNext = ref('Siguiente')
  const tipoBoton = ref('button')
  const tipo = ref(false)

  const dat = ref({
    idUsuario: '',
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
    disBujesDelanteros: '',
    tipoRuedasDelanteras: '',
    tijeras: '',
    medidaTijeras: '',
    separacionRespaldoRueda: '',
    inclinacionRodTraseras: '',
    antiVuelco: '',
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
    tipoCoderas: '',
    tipoCangureraFD: '',
    isPortaVasosFD: '',
    isTermoPlasticoFD: '',
    istermoAlumnioFD: '',
    tipoProtectorFrontalFD: '',
    numPiezasProtectorFrontalFD: '',
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
    numeroPiezasBotonCuedaFD: ''
  })

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

  const ant = () => {
    e1.value--
    if (e1.value === 1) {
      textNext.value = 'Sigueinte'
    } else if (e1.value === 2) {
      textNext.value = 'Sigueinte'
    }
  }

  const pre = async (d) => {
    e1.value++
    if (e1.value === 3) {
      textNext.value = 'Enviar'
      if (storeUser.user._id === undefined) {
        e1.value = 1
        router.push('/login')
        return
      }
    } else if (e1.value === 4) {
      tipoBoton.value = 'submit'
      await en(d)
      tipo.value = true
    }
  }

  //   const buscarSilla = async () => {
  //     dataSilla.value = dataSillasUsoDiario.data.find((element) => element.nombre == id)

  //     if (dataSilla.value === undefined) {
  //       dataSilla.value = dataSillasInfantiles.data.find((element) => element.nombre == id)
  //     }
  //     if (dataSilla.value === undefined) {
  //       dataSilla.value = dataSillasDeportivas.data.find((element) => element.nombre == id)
  //     }

  //     ima1.value = dataSilla.value.imagenes[0]
  //     ima2.value = dataSilla.value.imagenes[1]
  //     ima3.value = dataSilla.value.imagenes[2]
  //   }

  //   buscarSilla()

  const r = () => {}

  const en = async (dat) => {
    dat.idUsuario = storeUser.user._id
    await CotizacionApi.createCotizacion(dat)
      .then(({ data }) => {
        msg.value = data.msg
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    id,
    storeUser,
    dataSilla,
    ima1,
    ima2,
    ima3,
    e1,
    textNext,
    tipoBoton,
    tipo,
    dat,
    item,
    msg,
    ant,
    pre,
    en
  }
})
