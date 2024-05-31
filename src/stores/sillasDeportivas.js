import { defineStore } from 'pinia'
import { ref } from 'vue'

// fourmax
import fourmaxblackCoffe from '../assets/sillasDeportivas/cuatroMax/blackCoffe.jpg'
import fourmaxtemptress from '../assets/sillasDeportivas/cuatroMax/temptress.jpg'
import fourmaxbrownCoffe from '../assets/sillasDeportivas/cuatroMax/brownCoffe.jpg'
import fourmaxforestGreen from '../assets/sillasDeportivas/cuatroMax/forestGreen.jpg'
import fourmaxwagen from '../assets/sillasDeportivas/cuatroMax/wagen.jpg'
import fourmaxartichoc from '../assets/sillasDeportivas/cuatroMax/artichoc.jpg'
import fourmaxyellowSun from '../assets/sillasDeportivas/cuatroMax/yellowSun.jpg'
import fourmaxmikado from '../assets/sillasDeportivas/cuatroMax/mikado.jpg'
import fourmaxtangelo from '../assets/sillasDeportivas/cuatroMax/tangelo.jpg'
import fourmaxrebecca from '../assets/sillasDeportivas/cuatroMax/rebecca.jpg'
import fourmaxnesse from '../assets/sillasDeportivas/cuatroMax/nesse.jpg'
import fourmaxplum from '../assets/sillasDeportivas/cuatroMax/plum.jpg'
import fourmaxvioleta from '../assets/sillasDeportivas/cuatroMax/violeta.jpg'
import fourmaxamaranth from '../assets/sillasDeportivas/cuatroMax/amaranth.jpg'
import fourmaxmadderLake from '../assets/sillasDeportivas/cuatroMax/madderLake.jpg'
import fourmaxcarmine from '../assets/sillasDeportivas/cuatroMax/carmine.jpg'
import fourmaxfaluRed from '../assets/sillasDeportivas/cuatroMax/faluRed.jpg'
import fourmaxonyx from '../assets/sillasDeportivas/cuatroMax/onyx.jpg'
import fourmaxdavys from '../assets/sillasDeportivas/cuatroMax/davys.jpg'
import fourmaxgraysX11 from '../assets/sillasDeportivas/cuatroMax/graysX11.jpg'
import fourmaxgrays from '../assets/sillasDeportivas/cuatroMax/grays.jpg'
import fourmaxgains from '../assets/sillasDeportivas/cuatroMax/gains.jpg'
import fourmaxkepel from '../assets/sillasDeportivas/cuatroMax/kepel.jpg'
import fourmaxlazuli from '../assets/sillasDeportivas/cuatroMax/lazuli.jpg'
import fourmaxphili from '../assets/sillasDeportivas/cuatroMax/phili.jpg'
import fourmaxarsenico from '../assets/sillasDeportivas/cuatroMax/arsenico.jpg'
import fourmaxotterSpace from '../assets/sillasDeportivas/cuatroMax/otterSpace.jpg'
import fourmaxgunmetal from '../assets/sillasDeportivas/cuatroMax/gunmetal.jpg'
import fourmaxdarkCharcoal from '../assets/sillasDeportivas/cuatroMax/darkCharcoal.jpg'
import fourmaxdarkJungle from '../assets/sillasDeportivas/cuatroMax/darkJungle.jpg'
import fourmaxsmoky from '../assets/sillasDeportivas/cuatroMax/smoky.jpg'
import fourmaxthalo from '../assets/sillasDeportivas/cuatroMax/thalo.jpg'
import fourmaxprussianBlue from '../assets/sillasDeportivas/cuatroMax/prussianBlue.jpg'
import fourmaxyankeesBlue from '../assets/sillasDeportivas/cuatroMax/yankeesBlue.jpg'
import fourmaxindigoR2 from '../assets/sillasDeportivas/cuatroMax/indigoR2.jpg'
import fourmaxindigoR from '../assets/sillasDeportivas/cuatroMax/indigoR.jpg'
import fourmaxcultur from '../assets/sillasDeportivas/cuatroMax/cultur.jpg'
import fourmaxcyberYellow from '../assets/sillasDeportivas/cuatroMax/cyberYellow.jpg'
import fourmaxpurp from '../assets/sillasDeportivas/cuatroMax/purp.jpg'
import fourmaxcatawba from '../assets/sillasDeportivas/cuatroMax/catawba.jpg'
import fourmaxdarkSienna from '../assets/sillasDeportivas/cuatroMax/darkSienna.jpg'
import fourmaxmadder from '../assets/sillasDeportivas/cuatroMax/madder.jpg'

// ezBkb
import ezBkbtemptress from '@/assets/sillasDeportivas/dosEZ/temptress.jpg'
import ezBkbbrownCoffe from '@/assets/sillasDeportivas/dosEZ/brownCoffe.jpg'
import ezBkbforestGreen from '@/assets/sillasDeportivas/dosEZ/forestGreen.jpg'
import ezBkbwagen from '@/assets/sillasDeportivas/dosEZ/wagen.jpg'
import ezBkbartichoc from '@/assets/sillasDeportivas/dosEZ/artichoc.jpg'
import ezBkbyellowSun from '@/assets/sillasDeportivas/dosEZ/yellowSun.jpg'
import ezBkbmikado from '@/assets/sillasDeportivas/dosEZ/mikado.jpg'
import ezBkbtangelo from '@/assets/sillasDeportivas/dosEZ/tangelo.jpg'
import ezBkbrebecca from '@/assets/sillasDeportivas/dosEZ/rebecca.jpg'
import ezBkbnesse from '@/assets/sillasDeportivas/dosEZ/nesse.jpg'
import ezBkbplum from '@/assets/sillasDeportivas/dosEZ/plum.jpg'
import ezBkbvioleta from '@/assets/sillasDeportivas/dosEZ/violeta.jpg'
import ezBkbamaranth from '@/assets/sillasDeportivas/dosEZ/amaranth.jpg'
import ezBkbmadderLake from '@/assets/sillasDeportivas/dosEZ/madderLake.jpg'
import ezBkbcarmine from '@/assets/sillasDeportivas/dosEZ/carmine.jpg'
import ezBkbfaluRed from '@/assets/sillasDeportivas/dosEZ/faluRed.jpg'
import ezBkbonyx from '@/assets/sillasDeportivas/dosEZ/onyx.jpg'
import ezBkbdavys from '@/assets/sillasDeportivas/dosEZ/davys.jpg'
import ezBkbgrayX11 from '@/assets/sillasDeportivas/dosEZ/grayX11.jpg'
import ezBkbgrays from '@/assets/sillasDeportivas/dosEZ/grays.jpg'
import ezBkbgains from '@/assets/sillasDeportivas/dosEZ/gains.jpg'
import ezBkbkepel from '@/assets/sillasDeportivas/dosEZ/kepel.jpg'
import ezBkblazuli from '@/assets/sillasDeportivas/dosEZ/lazuli.jpg'
import ezBkbphili from '@/assets/sillasDeportivas/dosEZ/phili.jpg'
import ezBkbarsenico from '@/assets/sillasDeportivas/dosEZ/arsenico.jpg'
import ezBkbotterSpace from '@/assets/sillasDeportivas/dosEZ/otterSpace.jpg'
import ezBkbgunmetal from '@/assets/sillasDeportivas/dosEZ/gunmetal.jpg'
import ezBkbdarkCharcoal from '@/assets/sillasDeportivas/dosEZ/darkCharcoal.jpg'
import ezBkbdarkJungle from '@/assets/sillasDeportivas/dosEZ/darkJungle.jpg'
import ezBkbsmoky from '@/assets/sillasDeportivas/dosEZ/smoky.jpg'
import ezBkbthalo from '@/assets/sillasDeportivas/dosEZ/thalo.jpg'
import ezBkbprussianBlue from '@/assets/sillasDeportivas/dosEZ/prussianBlue.jpg'
import ezBkbyankeesBlue from '@/assets/sillasDeportivas/dosEZ/yankeesBlue.jpg'
import ezBkbindigoR2 from '@/assets/sillasDeportivas/dosEZ/indigoR2.jpg'
import ezBkbindigoR from '@/assets/sillasDeportivas/dosEZ/indigoR.jpg'
import ezBkbculture from '@/assets/sillasDeportivas/dosEZ/culture.jpg'
import ezBkbcyberYellow from '@/assets/sillasDeportivas/dosEZ/cyberYellow.jpg'
import ezBkbblackCoffe from '@/assets/sillasDeportivas/dosEZ/blackCoffe.jpg'
import ezBkbpurp from '@/assets/sillasDeportivas/dosEZ/purp.jpg'
import ezBkbcatawba from '@/assets/sillasDeportivas/dosEZ/catawba.jpg'
import ezBkbdarkSienna from '@/assets/sillasDeportivas/dosEZ/darkSienna.jpg'
import ezBkbmadder from '@/assets/sillasDeportivas/dosEZ/madder.jpg'

// curveBadminton
import curveBadmintontemptress from '@/assets/sillasDeportivas/curve/temptress.jpg'
import curveBadmintonbrownCoffe from '@/assets/sillasDeportivas/curve/brownCoffe.jpg'
import curveBadmintonforestGreen from '@/assets/sillasDeportivas/curve/forestGreen.jpg'
import curveBadmintonwagen from '@/assets/sillasDeportivas/curve/wagen.jpg'
import curveBadmintonartichoc from '@/assets/sillasDeportivas/curve/artichoc.jpg'
import curveBadmintonyellowSun from '@/assets/sillasDeportivas/curve/yellowSun.jpg'
import curveBadmintonmikado from '@/assets/sillasDeportivas/curve/mikado.jpg'
import curveBadmintontangelo from '@/assets/sillasDeportivas/curve/tangelo.jpg'
import curveBadmintonrebecca from '@/assets/sillasDeportivas/curve/rebecca.jpg'
import curveBadmintonnesse from '@/assets/sillasDeportivas/curve/nesse.jpg'
import curveBadmintonplum from '@/assets/sillasDeportivas/curve/plum.jpg'
import curveBadmintonvioleta from '@/assets/sillasDeportivas/curve/violeta.jpg'
import curveBadmintonamaranth from '@/assets/sillasDeportivas/curve/amaranth.jpg'
import curveBadmintonmadderLake from '@/assets/sillasDeportivas/curve/madderLake.jpg'
import curveBadmintoncarmine from '@/assets/sillasDeportivas/curve/carmine.jpg'
import curveBadmintonfaluRed from '@/assets/sillasDeportivas/curve/faluRed.jpg'
import curveBadmintononyx from '@/assets/sillasDeportivas/curve/onyx.jpg'
import curveBadmintondavys from '@/assets/sillasDeportivas/curve/davys.jpg'
import curveBadmintongrayX11 from '@/assets/sillasDeportivas/curve/grayX11.jpg'
import curveBadmintongrays from '@/assets/sillasDeportivas/curve/grays.jpg'
import curveBadmintongains from '@/assets/sillasDeportivas/curve/gains.jpg'
import curveBadmintonkepel from '@/assets/sillasDeportivas/curve/kepel.jpg'
import curveBadmintonlazuli from '@/assets/sillasDeportivas/curve/lazuli.jpg'
import curveBadmintonphili from '@/assets/sillasDeportivas/curve/phili.jpg'
import curveBadmintonarsenico from '@/assets/sillasDeportivas/curve/arsenico.jpg'
import curveBadmintonotterSpace from '@/assets/sillasDeportivas/curve/otterSpace.jpg'
import curveBadmintongunmetal from '@/assets/sillasDeportivas/curve/gunmetal.jpg'
import curveBadmintondarkCharcoal from '@/assets/sillasDeportivas/curve/darkCharcoal.jpg'
import curveBadmintondarkJungle from '@/assets/sillasDeportivas/curve/darkJungle.jpg'
import curveBadmintonsmoky from '@/assets/sillasDeportivas/curve/smoky.jpg'
import curveBadmintonthalo from '@/assets/sillasDeportivas/curve/thalo.jpg'
import curveBadmintonprussianBlue from '@/assets/sillasDeportivas/curve/prussianBlue.jpg'
import curveBadmintonyankeesBlue from '@/assets/sillasDeportivas/curve/yankeesBlue.jpg'
import curveBadmintonindigoR2 from '@/assets/sillasDeportivas/curve/indigoR2.jpg'
import curveBadmintonindigoR from '@/assets/sillasDeportivas/curve/indigoR.jpg'
import curveBadmintoncultur from '@/assets/sillasDeportivas/curve/cultur.jpg'
import curveBadmintoncyberYellow from '@/assets/sillasDeportivas/curve/cyberYellow.jpg'
import curveBadmintonblackCoffe from '@/assets/sillasDeportivas/curve/blackCoffe.jpg'
import curveBadmintonpurp from '@/assets/sillasDeportivas/curve/purp.jpg'
import curveBadmintoncatawba from '@/assets/sillasDeportivas/curve/catawba.jpg'
import curveBadmintondarkSienna from '@/assets/sillasDeportivas/curve/darkSienna.jpg'
import curveBadmintonmadder from '@/assets/sillasDeportivas/curve/madder.jpg'

// curveTennis
import curveTennisbrownCoffe from '@/assets/sillasDeportivas/curveTenis/brownCoffe.jpg'
import curveTennistemptress from '@/assets/sillasDeportivas/curveTenis/temptress.jpg'
import curveTennisforestGreen from '@/assets/sillasDeportivas/curveTenis/forestGreen.jpg'
import curveTenniswagen from '@/assets/sillasDeportivas/curveTenis/wagen.jpg'
import curveTennisartichoc from '@/assets/sillasDeportivas/curveTenis/artichoc.jpg'
import curveTennisyellowSun from '@/assets/sillasDeportivas/curveTenis/yellowSun.jpg'
import curveTennismikado from '@/assets/sillasDeportivas/curveTenis/mikado.jpg'
import curveTennistangelo from '@/assets/sillasDeportivas/curveTenis/tangelo.jpg'
import curveTennisrebecca from '@/assets/sillasDeportivas/curveTenis/rebecca.jpg'
import curveTennisnesse from '@/assets/sillasDeportivas/curveTenis/nesse.jpg'
import curveTennisplum from '@/assets/sillasDeportivas/curveTenis/plum.jpg'
import curveTennisvioleta from '@/assets/sillasDeportivas/curveTenis/violeta.jpg'
import curveTennisamaranth from '@/assets/sillasDeportivas/curveTenis/amaranth.jpg'
import curveTennismadderLake from '@/assets/sillasDeportivas/curveTenis/madderLake.jpg'
import curveTenniscarmine from '@/assets/sillasDeportivas/curveTenis/carmine.jpg'
import curveTennisfaluRed from '@/assets/sillasDeportivas/curveTenis/faluRed.jpg'
import curveTennisonyx from '@/assets/sillasDeportivas/curveTenis/onyx.jpg'
import curveTennisdavys from '@/assets/sillasDeportivas/curveTenis/davys.jpg'
import curveTennisgrayX11 from '@/assets/sillasDeportivas/curveTenis/grayX11.jpg'
import curveTennisgrays from '@/assets/sillasDeportivas/curveTenis/grays.jpg'
import curveTennisgains from '@/assets/sillasDeportivas/curveTenis/gains.jpg'
import curveTenniskepel from '@/assets/sillasDeportivas/curveTenis/kepel.jpg'
import curveTennisotterSpace from '@/assets/sillasDeportivas/curveTenis/otterSpace.jpg'
import curveTennisarsenico from '@/assets/sillasDeportivas/curveTenis/arsenico.jpg'
import curveTennislazuli from '@/assets/sillasDeportivas/curveTenis/lazuli.jpg'
import curveTennisphili from '@/assets/sillasDeportivas/curveTenis/phili.jpg'
import curveTennisgunmetal from '@/assets/sillasDeportivas/curveTenis/gunmetal.jpg'
import curveTennisdarkCharcoal from '@/assets/sillasDeportivas/curveTenis/darkCharcoal.jpg'
import curveTennisdarkJungle from '@/assets/sillasDeportivas/curveTenis/darkJungle.jpg'
import curveTennissmoky from '@/assets/sillasDeportivas/curveTenis/smoky.jpg'
import curveTennisthalo from '@/assets/sillasDeportivas/curveTenis/thalo.jpg'
import curveTennisprussianBlue from '@/assets/sillasDeportivas/curveTenis/prussianBlue.jpg'
import curveTennisyankeesBlue from '@/assets/sillasDeportivas/curveTenis/yankeesBlue.jpg'
import curveTennisindigoR2 from '@/assets/sillasDeportivas/curveTenis/indigoR2.jpg'
import curveTennisindigoR from '@/assets/sillasDeportivas/curveTenis/indigoR.jpg'
import curveTenniscultur from '@/assets/sillasDeportivas/curveTenis/cultur.jpg'
import curveTenniscyberYellow from '@/assets/sillasDeportivas/curveTenis/cyberYellow.jpg'
import curveTennisblackCoffe from '@/assets/sillasDeportivas/curveTenis/blackCoffe.jpg'
import curveTennispurp from '@/assets/sillasDeportivas/curveTenis/purp.jpg'
import curveTenniscatawba from '@/assets/sillasDeportivas/curveTenis/catawba.jpg'
import curveTennisdarkSienna from '@/assets/sillasDeportivas/curveTenis/darkSienna.jpg'
import curveTennismadder from '@/assets/sillasDeportivas/curveTenis/madder.jpg'

// Dynamic Danza
import dynamictemptress from '@/assets/sillasDeportivas/dynamicDanza/temptress.jpg'
import dynamicbrownCoffe from '@/assets/sillasDeportivas/dynamicDanza/brownCoffe.jpg'
import dynamicforestGreen from '@/assets/sillasDeportivas/dynamicDanza/forestGreen.jpg'
import dynamicwagen from '@/assets/sillasDeportivas/dynamicDanza/wagen.jpg'
import dynamicartichoc from '@/assets/sillasDeportivas/dynamicDanza/artichoc.jpg'
import dynamicyellowSun from '@/assets/sillasDeportivas/dynamicDanza/yellowSun.jpg'
import dynamicmikado from '@/assets/sillasDeportivas/dynamicDanza/mikado.jpg'
import dynamictangelo from '@/assets/sillasDeportivas/dynamicDanza/tangelo.jpg'
import dynamicrebecca from '@/assets/sillasDeportivas/dynamicDanza/rebecca.jpg'
import dynamicnesse from '@/assets/sillasDeportivas/dynamicDanza/nesse.jpg'
import dynamicplum from '@/assets/sillasDeportivas/dynamicDanza/plum.jpg'
import dynamicvioleta from '@/assets/sillasDeportivas/dynamicDanza/violeta.jpg'
import dynamicamaranth from '@/assets/sillasDeportivas/dynamicDanza/amaranth.jpg'
import dynamicmadderLake from '@/assets/sillasDeportivas/dynamicDanza/madderLake.jpg'
import dynamiccarmine from '@/assets/sillasDeportivas/dynamicDanza/carmine.jpg'
import dynamicfaluRed from '@/assets/sillasDeportivas/dynamicDanza/faluRed.jpg'
import dynamiconyx from '@/assets/sillasDeportivas/dynamicDanza/onyx.jpg'
import dynamicdavys from '@/assets/sillasDeportivas/dynamicDanza/davys.jpg'
import dynamicgrayX11 from '@/assets/sillasDeportivas/dynamicDanza/grayX11.jpg'
import dynamicgrays from '@/assets/sillasDeportivas/dynamicDanza/grays.jpg'
import dynamicgains from '@/assets/sillasDeportivas/dynamicDanza/gains.jpg'
import dynamickepel from '@/assets/sillasDeportivas/dynamicDanza/kepel.jpg'
import dynamiclazuli from '@/assets/sillasDeportivas/dynamicDanza/lazuli.jpg'
import dynamicphili from '@/assets/sillasDeportivas/dynamicDanza/phili.jpg'
import dynamicarsenico from '@/assets/sillasDeportivas/dynamicDanza/arsenico.jpg'
import dynamicotterSpace from '@/assets/sillasDeportivas/dynamicDanza/otterSpace.jpg'
import dynamicgunmetal from '@/assets/sillasDeportivas/dynamicDanza/gunmetal.jpg'
import dynamicdarkCharcoal from '@/assets/sillasDeportivas/dynamicDanza/darkCharcoal.jpg'
import dynamicdarkJungle from '@/assets/sillasDeportivas/dynamicDanza/darkJungle.jpg'
import dynamicsmoky from '@/assets/sillasDeportivas/dynamicDanza/smoky.jpg'
import dynamicthalo from '@/assets/sillasDeportivas/dynamicDanza/thalo.jpg'
import dynamicprussianBlue from '@/assets/sillasDeportivas/dynamicDanza/prussianBlue.jpg'
import dynamicyankeesBlue from '@/assets/sillasDeportivas/dynamicDanza/yankeesBlue.jpg'
import dynamicindigoR2 from '@/assets/sillasDeportivas/dynamicDanza/indigoR2.jpg'
import dynamicindigoR from '@/assets/sillasDeportivas/dynamicDanza/indigoR.jpg'
import dynamiccultur from '@/assets/sillasDeportivas/dynamicDanza/cultur.jpg'
import dynamiccyberYellow from '@/assets/sillasDeportivas/dynamicDanza/cyberYellow.jpg'
import dynamicblackCoffe from '@/assets/sillasDeportivas/dynamicDanza/blackCoffe.jpg'
import dynamicpurp from '@/assets/sillasDeportivas/dynamicDanza/purp.jpg'
import dynamiccatawba from '@/assets/sillasDeportivas/dynamicDanza/catawba.jpg'
import dynamicdarkSienna from '@/assets/sillasDeportivas/dynamicDanza/darkSienna.jpg'
import dynamicmadder from '@/assets/sillasDeportivas/dynamicDanza/madder.jpg'

import imagenMx3SillaPista1 from '../assets/sillasDeportivas/mx3SillaPista/img1.png'
import imagenMx3SillaPista2 from '../assets/sillasDeportivas/mx3SillaPista/img2.png'
import imagenMx3SillaPista3 from '../assets/sillasDeportivas/mx3SillaPista/img3.png'
import imagenMx3SillaPista4 from '../assets/sillasDeportivas/mx3SillaPista/img4.png'
import imagenMx3SillaPista5 from '../assets/sillasDeportivas/mx3SillaPista/img5.png'
import imagenMx3SillaPista6 from '../assets/sillasDeportivas/mx3SillaPista/img6.png'
import imagenMx3SillaPista7 from '../assets/sillasDeportivas/mx3SillaPista/img7.png'
import imagenMx3SillaPista8 from '../assets/sillasDeportivas/mx3SillaPista/img8.png'

import imagenThunder1 from '../assets/sillasDeportivas/thunder/img1.png'
import imagenThunder2 from '../assets/sillasDeportivas/thunder/img2.png'
import imagenThunder3 from '../assets/sillasDeportivas/thunder/img3.png'
import imagenThunder4 from '../assets/sillasDeportivas/thunder/img4.png'
import imagenThunder5 from '../assets/sillasDeportivas/thunder/img5.png'
import imagenThunder6 from '../assets/sillasDeportivas/thunder/img6.png'

export const useSillasDeportivas = defineStore('sillasDeportivas', () => {
  const data = ref([
    {
      id: 1,
      nombre: 'Lince 4Max Básquetbol',
      descripcionPrevia: `Diseñada para dar el máximo rendimiento en el deporte ráfaga y respaldada por la experiencia de atleta parlimpico jugador de los Mavericks de Dallas Wheelchair. La Lince 4Max de ROE-MEX es tu mejor opción para destacar en el basketball.`,
      especificaciones: [
        {
          descripcion:
            'Se fabrica de acuerdo a las necesidades y medidas antropométricas de cada atleta.'
        },
        { descripcion: 'Estructura elaborada en duraluminio aeronáutico 6061-T6.' },
        { descripcion: 'Aerodinámica. Su diseño permite un desplazamiento ágil y rápido.' },
        { descripcion: 'Ligera, 7 kilos de peso en estructura y de 9 a 11 kilos con rodamientos.' },
        {
          descripcion: 'Quinta o sexta rueda (antivuelco) fija que proporciona mayor estabilidad.'
        },
        { descripcion: 'Ejes de ensamble rápido de acero inoxidable.' },
        { descripcion: 'Rodamiento trasero desmontable de aluminio.' },
        { descripcion: 'Inclinación de ruedas traseras 12 a 20 grados.' },
        { descripcion: 'Rodamiento delanteros de 3”.' },
        { descripcion: 'Centro de gravedad fijo.' },
        { descripcion: 'Vestidura acojinada.' },
        { descripcion: 'Laterales fijos.' },
        { descripcion: 'Banda para pantorrillas.' },
        { descripcion: 'Respaldo fijo.' }
      ],
      imagenes: [
        { src: fourmaxblackCoffe, color: 'Black Coffe' },
        { src: fourmaxtemptress, color: 'Temptress' },
        { src: fourmaxbrownCoffe, color: 'Brown Coffe' },
        { src: fourmaxforestGreen, color: 'Forest Green' },
        { src: fourmaxwagen, color: 'Wagen' },
        { src: fourmaxartichoc, color: 'Artichoc' },
        { src: fourmaxyellowSun, color: 'Yellow Sun' },
        { src: fourmaxmikado, color: 'Mikado' },
        { src: fourmaxtangelo, color: 'Tangelo' },
        { src: fourmaxrebecca, color: 'Rebecca' },
        { src: fourmaxnesse, color: 'Nesse' },
        { src: fourmaxplum, color: 'Plum' },
        { src: fourmaxvioleta, color: 'Violeta' },
        { src: fourmaxamaranth, color: 'Amaranth' },
        { src: fourmaxmadderLake, color: 'Madder Lake' },
        { src: fourmaxcarmine, color: 'Carmine' },
        { src: fourmaxfaluRed, color: 'Falu Red' },
        { src: fourmaxonyx, color: 'Onyx' },
        { src: fourmaxdavys, color: `Dav's` },
        { src: fourmaxgraysX11, color: 'Grays X11' },
        { src: fourmaxgrays, color: 'Grays' },
        { src: fourmaxgains, color: 'Gains' },
        { src: fourmaxkepel, color: 'Kepel' },
        { src: fourmaxlazuli, color: 'Lazuli' },
        { src: fourmaxphili, color: 'Phili' },
        { src: fourmaxarsenico, color: 'Arsenico' },
        { src: fourmaxotterSpace, color: 'Otter Space' },
        { src: fourmaxgunmetal, color: 'Gunmetal' },
        { src: fourmaxdarkCharcoal, color: 'Dark Charcoal' },
        { src: fourmaxdarkJungle, color: 'Dark Jungle' },
        { src: fourmaxsmoky, color: 'Smoky' },
        { src: fourmaxthalo, color: 'Thalo' },
        { src: fourmaxprussianBlue, color: 'Prussian Blue' },
        { src: fourmaxyankeesBlue, color: 'Yankees Blue' },
        { src: fourmaxindigoR2, color: 'Indigo R2' },
        { src: fourmaxindigoR, color: 'Indigo R' },
        { src: fourmaxcultur, color: 'Cultur' },
        { src: fourmaxcyberYellow, color: 'Cyber Yellow' },
        { src: fourmaxpurp, color: 'Purp' },
        { src: fourmaxcatawba, color: 'Catawba' },
        { src: fourmaxdarkSienna, color: 'Dark Sienna' },
        { src: fourmaxmadder, color: 'Madder' }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 2,
      nombre: `Lince 2EZ Básquetbol`,
      descripcionPrevia: `Resistente y ligera, la silla de ruedas Lince 2EZ para baloncesto presenta un diseño vanguardista que la hacen destacar en cualquier cancha.`,
      especificaciones: [
        {
          descripcion: `Se hace acorde a las necesidades y medidas antropometricas del atleta.`
        },
        {
          descripcion: `Estructura elaborada en duraluminio aeronáutico 6061-T6.`
        },
        {
          descripcion: `Aerodinámica. Su diseño permite un desplazamiento ágil y rápido.`
        },
        {
          descripcion: `Ligera, 7 kilos de peso en estructura y de 9 a11 kilos con rodamientos.`
        },
        {
          descripcion: `Quinta o sexta rueda (antivuelco) fija que proporciona mayor estabilidad.`
        },
        { descripcion: `Ejes de ensamble rápido de acero inoxidable.` },
        { descripcion: `Rodamiento trasero desmontable de aluminio.` },
        { descripcion: `Inclinación de ruedas traseras 12 a 20 grados.` },
        { descripcion: `Rodamientos delanteros de 3”.` },
        { descripcion: `Centro de gravedad fijo.` },
        { descripcion: `Vestidura acojinada.` },
        { descripcion: `Laterales sólidos.` },
        { descripcion: `Banda para pantorrillas.` }
      ],
      imagenes: [
        { src: ezBkbtemptress, color: 'Temptress' },
        { src: ezBkbbrownCoffe, color: 'Brown Coffe' },
        { src: ezBkbforestGreen, color: 'Forest Green' },
        { src: ezBkbwagen, color: 'Wagen' },
        { src: ezBkbartichoc, color: 'Artichoc' },
        { src: ezBkbyellowSun, color: 'Yellow Sun' },
        { src: ezBkbmikado, color: 'Mikado' },
        { src: ezBkbtangelo, color: 'Tangelo' },
        { src: ezBkbrebecca, color: 'Rebecca' },
        { src: ezBkbnesse, color: 'Nesse' },
        { src: ezBkbplum, color: 'Plum' },
        { src: ezBkbvioleta, color: 'Violeta' },
        { src: ezBkbamaranth, color: 'Amaranth' },
        { src: ezBkbmadderLake, color: 'Madder Lake' },
        { src: ezBkbcarmine, color: 'Carmine' },
        { src: ezBkbfaluRed, color: 'Falu Red' },
        { src: ezBkbonyx, color: 'Onyx' },
        { src: ezBkbdavys, color: 'Davys' },
        { src: ezBkbgrayX11, color: 'Gray X11' },
        { src: ezBkbgrays, color: 'Grays' },
        { src: ezBkbgains, color: 'Gains' },
        { src: ezBkbkepel, color: 'Kepel' },
        { src: ezBkblazuli, color: 'Lazuli' },
        { src: ezBkbphili, color: 'Phili' },
        { src: ezBkbarsenico, color: 'Arsenico' },
        { src: ezBkbotterSpace, color: 'Otter Space' },
        { src: ezBkbgunmetal, color: 'Gunmetal' },
        { src: ezBkbdarkCharcoal, color: 'Dark Charcoal' },
        { src: ezBkbdarkJungle, color: 'Dark Jungle' },
        { src: ezBkbsmoky, color: 'Smoky' },
        { src: ezBkbthalo, color: 'Thalo' },
        { src: ezBkbprussianBlue, color: 'Prussian Blue' },
        { src: ezBkbyankeesBlue, color: 'Yankees Blue' },
        { src: ezBkbindigoR2, color: 'Indigo R2' },
        { src: ezBkbindigoR, color: 'Indigo R' },
        { src: ezBkbculture, color: 'Culture' },
        { src: ezBkbcyberYellow, color: 'Cyber Yellow' },
        { src: ezBkbblackCoffe, color: 'Black Coffe' },
        { src: ezBkbpurp, color: 'Purp' },
        { src: ezBkbcatawba, color: 'Catawba' },
        { src: ezBkbdarkSienna, color: 'Dark Sienna' },
        { src: ezBkbmadder, color: 'Madder' }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 3,
      nombre: `Lince Curve Bádminton`,
      descripcionPrevia: `Ligera, ágil, fácil de maniobrar. Ideal para dar el mejor desempeño en este deporte. Con ruedas antivuelco delanteras que sobresalen del cuadro, dos soportes traseros antivuelco que se extienden y una amplia distancia entre ejes de las ruedas giratorias garantiza una estabilidad absoluta. Estas características, en combinación con un gran diseño, y su estructura en aluminio aeronáutico 6061T-6 aseguran una excelente maniobrabilidad y características de aceleración óptimas.`,
      especificaciones: [
        { descripcion: `Fabricada de acuerdo a la medida u y tipo de lesión de cada atleta.` },
        { descripcion: `Estructura elaborada en duraluminio aeronáutico 6061-T6.` },
        { descripcion: `Vestidura acojinada en tres pieza.` },
        { descripcion: `Ruedas delanteras y traseras de 3" gel` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        }
      ],
      imagenes: [
        { src: curveBadmintontemptress, color: 'Temptress' },
        { src: curveBadmintonbrownCoffe, color: 'Brown Coffe' },
        { src: curveBadmintonforestGreen, color: 'forest Green' },
        { src: curveBadmintonwagen, color: 'Wagen' },
        { src: curveBadmintonartichoc, color: 'Artichoc' },
        { src: curveBadmintonyellowSun, color: 'Yellow Sun' },
        { src: curveBadmintonmikado, color: 'Mikado' },
        { src: curveBadmintontangelo, color: 'Tangelo' },
        { src: curveBadmintonrebecca, color: 'Rebecca' },
        { src: curveBadmintonnesse, color: 'Nesse' },
        { src: curveBadmintonplum, color: 'Plum' },
        { src: curveBadmintonvioleta, color: 'Violeta' },
        { src: curveBadmintonamaranth, color: 'Amaranth' },
        { src: curveBadmintonmadderLake, color: 'Madder Lake' },
        { src: curveBadmintoncarmine, color: 'Carmine' },
        { src: curveBadmintonfaluRed, color: 'Falu Red' },
        { src: curveBadmintononyx, color: 'Onyx' },
        { src: curveBadmintondavys, color: 'Davys' },
        { src: curveBadmintongrayX11, color: 'Gray X11' },
        { src: curveBadmintongrays, color: 'Grays' },
        { src: curveBadmintongains, color: 'Gains' },
        { src: curveBadmintonkepel, color: 'Kepel' },
        { src: curveBadmintonlazuli, color: 'Lazuli' },
        { src: curveBadmintonphili, color: 'Phili' },
        { src: curveBadmintonarsenico, color: 'Arsenico' },
        { src: curveBadmintonotterSpace, color: 'Otter Space' },
        { src: curveBadmintongunmetal, color: 'Gunmetal' },
        { src: curveBadmintondarkCharcoal, color: 'Dark Charcoal' },
        { src: curveBadmintondarkJungle, color: 'Dark Jungle' },
        { src: curveBadmintonsmoky, color: 'Smoky' },
        { src: curveBadmintonthalo, color: 'Thalo' },
        { src: curveBadmintonprussianBlue, color: 'Prussian Blue' },
        { src: curveBadmintonyankeesBlue, color: 'Yankees Blue' },
        { src: curveBadmintonindigoR2, color: 'Indigo R2' },
        { src: curveBadmintonindigoR, color: 'Indigo R' },
        { src: curveBadmintoncultur, color: 'Cultur' },
        { src: curveBadmintoncyberYellow, color: 'Cyber Yellow' },
        { src: curveBadmintonblackCoffe, color: 'Black Coffe' },
        { src: curveBadmintonpurp, color: 'Purp' },
        { src: curveBadmintoncatawba, color: 'Catawba' },
        { src: curveBadmintondarkSienna, color: 'Dark Sienna' },
        { src: curveBadmintonmadder, color: 'Madder' }
      ],
      info: `*Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 4,
      nombre: `Lince Curve  Tenis`,
      descripcionPrevia: `La mejor opción para el optimo desempeño en el deporte blanco. La esencia, elegancia y poderío del tenis está en su estructura. Ultra ligera y versátil, por su diseño y estructura le permiten al deportista desplazarse con agilidad y rapidez. Para cualquier tipo de lesión la Lince Curve Tenis es la mejor opción con modelos de 5 ruedas para mayor estabilidad además de contar con la opción de adquirir un soporte frontal rígido o Clip Strap, para mejorar su rendimiento y estabilidad.`,
      especificaciones: [
        { descripcion: `Fabricada de acuerdo a la medida u y tipo de lesión de cada atleta.` },
        { descripcion: `Estructura elaborada en duraluminio aeronáutico 6061-T6.` },
        { descripcion: `Vestidura acojinada en tres pieza.` },
        { descripcion: `Ruedas delanteras y traseras de 3" gel` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        }
      ],
      imagenes: [
        { src: curveTennisbrownCoffe, color: 'Brown Coffe' },
        { src: curveTennistemptress, color: 'Temptress' },
        { src: curveTennisforestGreen, color: 'Forest Green' },
        { src: curveTenniswagen, color: 'Wagen' },
        { src: curveTennisartichoc, color: 'Artichoc' },
        { src: curveTennisyellowSun, color: 'YellowSun' },
        { src: curveTennismikado, color: 'Mikado' },
        { src: curveTennistangelo, color: 'Tangelo' },
        { src: curveTennisrebecca, color: 'Rebecca' },
        { src: curveTennisnesse, color: 'Nesse' },
        { src: curveTennisplum, color: 'Plum' },
        { src: curveTennisvioleta, color: 'Violeta' },
        { src: curveTennisamaranth, color: 'Amaranth' },
        { src: curveTennismadderLake, color: 'Madder Lake' },
        { src: curveTenniscarmine, color: 'carmine' },
        { src: curveTennisfaluRed, color: 'Falu Red' },
        { src: curveTennisonyx, color: 'Onyx' },
        { src: curveTennisdavys, color: 'Davys' },
        { src: curveTennisgrayX11, color: 'Gray X11' },
        { src: curveTennisgrays, color: 'Grays' },
        { src: curveTennisgains, color: 'Gains' },
        { src: curveTenniskepel, color: 'Kepel' },
        { src: curveTennisotterSpace, color: 'Otter Space' },
        { src: curveTennisarsenico, color: 'Arsenico' },
        { src: curveTennislazuli, color: 'lazuli' },
        { src: curveTennisphili, color: 'Phili' },
        { src: curveTennisgunmetal, color: 'Gunmetal' },
        { src: curveTennisdarkCharcoal, color: 'Dark Charcoal' },
        { src: curveTennisdarkJungle, color: 'Dark Jungle' },
        { src: curveTennissmoky, color: 'Smoky' },
        { src: curveTennisthalo, color: 'Thalo' },
        { src: curveTennisprussianBlue, color: 'Prussian Blue' },
        { src: curveTennisyankeesBlue, color: 'Yankees Blue' },
        { src: curveTennisindigoR2, color: 'Indigo R2' },
        { src: curveTennisindigoR, color: 'Indigo R' },
        { src: curveTenniscultur, color: 'Cultur' },
        { src: curveTenniscyberYellow, color: 'Cyber Yellow' },
        { src: curveTennisblackCoffe, color: 'Black Coffe' },
        { src: curveTennispurp, color: 'Purp' },
        { src: curveTenniscatawba, color: 'Catawba' },
        { src: curveTennisdarkSienna, color: 'Dark Sienna' },
        { src: curveTennismadder, color: 'Madder' }
      ],
      info: `*Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 5,
      nombre: `Lince Dynamic Danza`,
      descripcionPrevia: `Elegante y versatil. Lúcete en la pista con la nueva Lince Dynamic Danza, su diseño simple y elegante le proporciona una gran agilidad y ligereza. Cuenta con 5ª rueda antivuelco, con la opción de fija o removible`,
      especificaciones: [
        { descripcion: `Fabricada de acuerdo a la medida u y tipo de lesión de cada atleta.` },
        { descripcion: `Estructura elaborada en duraluminio aeronáutico 6061-T6.` },
        { descripcion: `Vestidura acojinada en tres pieza.` },
        { descripcion: `Inclinación de ruedas traseras de 5º a 9º` },
        { descripcion: `Con 5ta rueda fija o desmontable` },
        { descripcion: `Ruedas delanteras y trasera de 3" gel` },
        { descripcion: `Respaldo fijo.` },
        { descripcion: `Estribo ajustable` },
        { descripcion: `Laterales soldados a la estructura` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        }
      ],
      imagenes: [
        { src: dynamictemptress, color: 'Temptress' },
        { src: dynamicbrownCoffe, color: 'Brown Coffe' },
        { src: dynamicforestGreen, color: 'Forest Green' },
        { src: dynamicwagen, color: 'Wagen' },
        { src: dynamicartichoc, color: 'Artichoc' },
        { src: dynamicyellowSun, color: 'Yellow Sun' },
        { src: dynamicmikado, color: 'Mikado' },
        { src: dynamictangelo, color: 'Tangelo' },
        { src: dynamicrebecca, color: 'Rebecca' },
        { src: dynamicnesse, color: 'Nesse' },
        { src: dynamicplum, color: 'Plum' },
        { src: dynamicvioleta, color: 'Violeta' },
        { src: dynamicamaranth, color: 'Amaranth' },
        { src: dynamicmadderLake, color: 'Madder Lake' },
        { src: dynamiccarmine, color: 'Carmine' },
        { src: dynamicfaluRed, color: 'Falu Red' },
        { src: dynamiconyx, color: 'Onyx' },
        { src: dynamicdavys, color: `Davy's` },
        { src: dynamicgrayX11, color: 'Gray X11' },
        { src: dynamicgrays, color: 'Grays' },
        { src: dynamicgains, color: 'Gains' },
        { src: dynamickepel, color: 'Kepel' },
        { src: dynamiclazuli, color: 'Lazuli' },
        { src: dynamicphili, color: 'Phili' },
        { src: dynamicarsenico, color: 'Arsenico' },
        { src: dynamicotterSpace, color: 'Otter Space' },
        { src: dynamicgunmetal, color: 'Gunmetal' },
        { src: dynamicdarkCharcoal, color: 'Dark Charcoal' },
        { src: dynamicdarkJungle, color: 'Dark Jungle' },
        { src: dynamicsmoky, color: 'Smoky' },
        { src: dynamicthalo, color: 'Thalo' },
        { src: dynamicprussianBlue, color: 'Prussian Blue' },
        { src: dynamicyankeesBlue, color: 'YankeesBlue' },
        { src: dynamicindigoR2, color: 'Indigo R2' },
        { src: dynamicindigoR, color: 'Indigo R' },
        { src: dynamiccultur, color: 'cultur' },
        { src: dynamiccyberYellow, color: 'Cyber Yellow' },
        { src: dynamicblackCoffe, color: 'Black Coffe' },
        { src: dynamicpurp, color: 'Purp' },
        { src: dynamiccatawba, color: 'Catawba' },
        { src: dynamicdarkSienna, color: 'Dark Sienna' },
        { src: dynamicmadder, color: 'Madder' }
      ],
      info: `*Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 6,
      nombre: `Lince MX3 Silla de Pista`,
      descripcionPrevia: `Ligera y muy resistente; La Lince MX3 es la silla ideal para comenzar a brillar en el atletismo. Estructura en aluminio aeronáutico 6061T-6.`,
      especificaciones: [
        {
          descripcion: `Rodamientos traseros estándar de rayos o CORIMA fibra de carbon con tubulares 700c Panaracer`
        },
        {
          descripcion: `Rodamiento delantero estándar de rayos o CORIMA fibra de carbon con tubular 20” Panaracer`
        },
        {
          descripcion: `Personalizable de acuerdo a medida y tipo de lesión del velocista o maratonista`
        },
        { descripcion: `Direccion con pistón derecha o izquierda` },
        { descripcion: `Freno con horquilla Shimano` },
        { descripcion: `Reposa pies opcional ajustable` },
        { descripcion: `Terminado en pintura electrostática` }
      ],
      imagenes: [
        { src: imagenMx3SillaPista1 },
        { src: imagenMx3SillaPista2 },
        { src: imagenMx3SillaPista3 },
        { src: imagenMx3SillaPista4 },
        { src: imagenMx3SillaPista5 },
        { src: imagenMx3SillaPista6 },
        { src: imagenMx3SillaPista7 },
        { src: imagenMx3SillaPista8 }
      ],
      info: `Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    },
    {
      id: 7,
      nombre: `Lince Thunder Bicicleta de mano`,
      descripcionPrevia: `La bicicleta de mano Lince Thunder le proporciona un diseño aerodinámico que se traduce en velocidad. Ideal para competencia profesional o simplemente para disfrutar de la vida, le ofrece una posición cómoda que se puede ajustar para las necesidades del usuario. Con el impulso hacia el frente se utiliza de la fuerza abdominal, así como de brazos, hombros y los músculos de pecho.`,
      especificaciones: [
        { descripcion: `Se fabrica bajo medidas y características del deportista.` },
        { descripcion: `Estructura elaborada en duraluminio 6061-T6.` },
        { descripcion: `Componentes Shimano y Sram` },
        { descripcion: `Doble Freno ubicado en el impulsor y en parte del cuadro.` },
        { descripcion: `Aerodinámica.` },
        { descripcion: `Vestidura.` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        { descripcion: `Rodamientos traseros con eje de ensamble rápido (push).` },
        { descripcion: `Rueda frontal con bloqueador.` },
        { descripcion: `Crank (pedales de impulso)de 19.5 cm. hasta 22 cm.` },
        { descripcion: `Protección de estrella.` },
        { descripcion: `27  Velocidades.` },
        { descripcion: `Respaldo ajustable de 70 a 90 grados.` }
      ],
      imagenes: [
        { src: imagenThunder1 },
        { src: imagenThunder2 },
        { src: imagenThunder3 },
        { src: imagenThunder4 },
        { src: imagenThunder5 },
        { src: imagenThunder6 }
      ],
      info: `Las imágenes son ilustrativas, el tipo de rodamientos traseros así como el estilo de la Hand Bike (L) o (V) tiene costo adicional por lo que deberá ser cotizado. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
    }
  ])
  return {
    data
  }
})
