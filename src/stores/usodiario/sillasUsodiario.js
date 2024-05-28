import { defineStore } from 'pinia'
import { ref } from 'vue'
// AKIVA
import AkivaDarkSienna from '@/assets/sillasUsoDiario/akiva/Akiva_dark_sienna.jpg'
import AkivaMadder from '@/assets/sillasUsoDiario/akiva/Akiva_madder.jpg'
import AkivaAmaranth from '@/assets/sillasUsoDiario/akiva/amaranth.jpg'
import AkivaArsenico from '@/assets/sillasUsoDiario/akiva/Arsenico.jpg'
import AkivaArtichoc from '@/assets/sillasUsoDiario/akiva/Artichoc.jpg'
import AkivaBlackCoffee from '@/assets/sillasUsoDiario/akiva/BlackCoffee.jpg'
import AkivaBrownCoffe from '@/assets/sillasUsoDiario/akiva/BrownCoffe.jpg'
import AkivaCarmine from '@/assets/sillasUsoDiario/akiva/Carmine.jpg'
import AkivaCatawba from '@/assets/sillasUsoDiario/akiva/Catawba.jpg'
import AkivaCultur from '@/assets/sillasUsoDiario/akiva/Cultur.jpg'
import AkivaCyberYellow from '@/assets/sillasUsoDiario/akiva/CyberYellow.jpg'
import AkivaDarkCharcoal from '@/assets/sillasUsoDiario/akiva/DarkCharcoal.jpg'
import AkivaDarkJungle from '@/assets/sillasUsoDiario/akiva/DarkJungle.jpg'
import AkivaDavys from '@/assets/sillasUsoDiario/akiva/Davys.jpg'
import AkivaFaluRed from '@/assets/sillasUsoDiario/akiva/FaluRed.jpg'
import AkivaForestGreen from '@/assets/sillasUsoDiario/akiva/ForestGreen.jpg'
import AkivaGains from '@/assets/sillasUsoDiario/akiva/Gains.jpg'
import AkivaGrayX11 from '@/assets/sillasUsoDiario/akiva/GrayX11.jpg'
import AkivaGunmetal from '@/assets/sillasUsoDiario/akiva/Gunmetal.jpg'
import AkivaIndigoR from '@/assets/sillasUsoDiario/akiva/IndigoR.jpg'
import AkivaKeppel from '@/assets/sillasUsoDiario/akiva/Keppel.jpg'
import AkivaLazuli from '@/assets/sillasUsoDiario/akiva/Lazuli.jpg'
import AkivaMadderLake from '@/assets/sillasUsoDiario/akiva/MadderLake.jpg'
import AkivaGrays from '@/assets/sillasUsoDiario/akiva/Grays.jpg'
import AkivaMikado from '@/assets/sillasUsoDiario/akiva/Mikado.jpg'
import AkivaNesse from '@/assets/sillasUsoDiario/akiva/Nesse.jpg'
import AkivaOnyx from '@/assets/sillasUsoDiario/akiva/Onyx.jpg'
import AkivaOtterSpace from '@/assets/sillasUsoDiario/akiva/OtterSpace.jpg'
import AkivaPhili from '@/assets/sillasUsoDiario/akiva/Phili.jpg'
import AkivaPlum from '@/assets/sillasUsoDiario/akiva/Plum.jpg'
import AkivaPrussianBlue from '@/assets/sillasUsoDiario/akiva/PrussianBlue.jpg'
import AkivaPurp from '@/assets/sillasUsoDiario/akiva/Purp.jpg'
import AkivaRebecca from '@/assets/sillasUsoDiario/akiva/Rebecca.jpg'
import AkivaSmoky from '@/assets/sillasUsoDiario/akiva/Smoky.jpg'
import AkivaTangelo from '@/assets/sillasUsoDiario/akiva/Tangelo.jpg'
import AkivaTemptress from '@/assets/sillasUsoDiario/akiva/Temptress.jpg'
import AkivaThalo from '@/assets/sillasUsoDiario/akiva/Thalo.jpg'
import AkivaVioleta from '@/assets/sillasUsoDiario/akiva/Violeta.jpg'
import AkivaWagen from '@/assets/sillasUsoDiario/akiva/Wagen.jpg'
import AkivaYankeesBlue from '@/assets/sillasUsoDiario/akiva/YankeesBlue.jpg'
import AkivaYellowSun from '@/assets/sillasUsoDiario/akiva/YellowSun.jpg'

// import ImagenAkiva2 from '../../assets/sillasUsoDiario/akiva/img2.png'
// import ImagenAkiva3 from '../../assets/sillasUsoDiario/akiva/img3.png'
// import ImagenAkiva4 from '../../assets/sillasUsoDiario/akiva/img4.png'
// import ImagenAkiva5 from '../../assets/sillasUsoDiario/akiva/img5.png'
// import ImagenAkiva6 from '../../assets/sillasUsoDiario/akiva/img6.png'

// LINCE X4
import LinceX4Amaranth from '@/assets/sillasUsoDiario/x4/Amaranth.jpg'
import LinceX4Arsenico from '@/assets/sillasUsoDiario/x4/Arsenico.jpg'
import LinceX4Artichoc from '@/assets/sillasUsoDiario/x4/Artichoc.jpg'
import LinceX4BlackCoffe from '@/assets/sillasUsoDiario/x4/BlackCoffe.jpg'
import LinceX4BrownCoffe from '@/assets/sillasUsoDiario/x4/BrownCoffe.jpg'
import LinceX4Carmine from '@/assets/sillasUsoDiario/x4/Carmine.jpg'
import LinceX4Catawba from '@/assets/sillasUsoDiario/x4/Catawba.jpg'
import LinceX4Cultur from '@/assets/sillasUsoDiario/x4/Cultur.jpg'
import LinceX4CyberYellow from '@/assets/sillasUsoDiario/x4/CyberYellow.jpg'
import LinceX4DarkCharcoal from '@/assets/sillasUsoDiario/x4/DarkCharcoal.jpg'
import LinceX4DarkJungle from '@/assets/sillasUsoDiario/x4/DarkJungle.jpg'
import LinceX4DarkSienna from '@/assets/sillasUsoDiario/x4/DarkSienna.jpg'
import LinceX4Davys from '@/assets/sillasUsoDiario/x4/Davys.jpg'
import LinceX4FaluRed from '@/assets/sillasUsoDiario/x4/FaluRed.jpg'
import LinceX4ForestGreen from '@/assets/sillasUsoDiario/x4/ForestGreen.jpg'
import LinceX4Gains from '@/assets/sillasUsoDiario/x4/Gains.jpg'
import LinceX4GrayX11 from '@/assets/sillasUsoDiario/x4/GrayX11.jpg'
import LinceX4Grays from '@/assets/sillasUsoDiario/x4/Grays.jpg'
import LinceX4Gunmetal from '@/assets/sillasUsoDiario/x4/Gunmetal.jpg'
import LinceX4IndigoR from '@/assets/sillasUsoDiario/x4/IndigoR.jpg'
import LinceX4IndigoR2 from '@/assets/sillasUsoDiario/x4/IndigoR2.jpg'
import LinceX4Kepel from '@/assets/sillasUsoDiario/x4/Kepel.jpg'
import LinceX4Lazuli from '@/assets/sillasUsoDiario/x4/Lazuli.jpg'
import LinceX4MadderLake from '@/assets/sillasUsoDiario/x4/MadderLake.jpg'
import LinceX4Madder from '@/assets/sillasUsoDiario/x4/Madder.jpg'
import LinceX4Mikado from '@/assets/sillasUsoDiario/x4/Mikado.jpg'
import LinceX4Nesse from '@/assets/sillasUsoDiario/x4/Nesse.jpg'
import LinceX4Onyx from '@/assets/sillasUsoDiario/x4/Onyx.jpg'
import LinceX4OtterSpace from '@/assets/sillasUsoDiario/x4/OtterSpace.jpg'
import LinceX4Phili from '@/assets/sillasUsoDiario/x4/Phili.jpg'
import LinceX4Plum from '@/assets/sillasUsoDiario/x4/Plum.jpg'
import LinceX4PrussianBlue from '@/assets/sillasUsoDiario/x4/PrussianBlue.jpg'
import LinceX4Purp from '@/assets/sillasUsoDiario/x4/Purp.jpg'
import LinceX4Rebecca from '@/assets/sillasUsoDiario/x4/Rebecca.jpg'
import LinceX4Smoky from '@/assets/sillasUsoDiario/x4/Smoky.jpg'
import LinceX4Tangelo from '@/assets/sillasUsoDiario/x4/Tangelo.jpg'
import LinceX4Temptress from '@/assets/sillasUsoDiario/x4/Temptress.jpg'
import LinceX4Thalo from '@/assets/sillasUsoDiario/x4/Thalo.jpg'
import LinceX4Violeta from '@/assets/sillasUsoDiario/x4/Violeta.jpg'
import LinceX4Wagen from '@/assets/sillasUsoDiario/x4/Wagen.jpg'
import LinceX4YankeesBlue from '@/assets/sillasUsoDiario/x4/YankeesBlue.jpg'
import LinceX4YellowSun from '@/assets/sillasUsoDiario/x4/YellowSun.jpg'

// import ImagenX41 from '../../assets/sillasUsoDiario/x4/img1.png'
// import ImagenX42 from '../../assets/sillasUsoDiario/x4/img2.png'
// import ImagenX43 from '../../assets/sillasUsoDiario/x4/img3.png'
// import ImagenX44 from '../../assets/sillasUsoDiario/x4/img4.png'

// Confort ZZ
import confortZZtemptress from '@/assets/sillasUsoDiario/confortZZ/temptress.jpg'
import confortZZbrownCoffe from '@/assets/sillasUsoDiario/confortZZ/brownCoffe.jpg'
import confortZZforestGreen from '@/assets/sillasUsoDiario/confortZZ/forestGreen.jpg'
import confortZZwagen from '@/assets/sillasUsoDiario/confortZZ/wagen.jpg'
import confortZZartichoc from '@/assets/sillasUsoDiario/confortZZ/artichoc.jpg'
import confortZZyellowSun from '@/assets/sillasUsoDiario/confortZZ/yellowSun.jpg'
import confortZZmikado from '@/assets/sillasUsoDiario/confortZZ/mikado.jpg'
import confortZZtangelo from '@/assets/sillasUsoDiario/confortZZ/tangelo.jpg'
import confortZZrebecca from '@/assets/sillasUsoDiario/confortZZ/rebecca.jpg'
import confortZZnesse from '@/assets/sillasUsoDiario/confortZZ/nesse.jpg'
import confortZZplum from '@/assets/sillasUsoDiario/confortZZ/plum.jpg'
import confortZZvioleta from '@/assets/sillasUsoDiario/confortZZ/violeta.jpg'
import confortZZamaranth from '@/assets/sillasUsoDiario/confortZZ/amaranth.jpg'
import confortZZmadderLake from '@/assets/sillasUsoDiario/confortZZ/madderLake.jpg'
import confortZZcarmine from '@/assets/sillasUsoDiario/confortZZ/carmine.jpg'
import confortZZfaluRed from '@/assets/sillasUsoDiario/confortZZ/faluRed.jpg'
import confortZZonyx from '@/assets/sillasUsoDiario/confortZZ/onyx.jpg'
import confortZZdavys from '@/assets/sillasUsoDiario/confortZZ/davys.jpg'
import confortZZgrays from '@/assets/sillasUsoDiario/confortZZ/grays.jpg'
import confortZZgrayX11 from '@/assets/sillasUsoDiario/confortZZ/grayX11.jpg'
import confortZZgains from '@/assets/sillasUsoDiario/confortZZ/gains.jpg'
import confortZZkepel from '@/assets/sillasUsoDiario/confortZZ/kepel.jpg'
import confortZZphili from '@/assets/sillasUsoDiario/confortZZ/phili.jpg'
import confortZZlazuli from '@/assets/sillasUsoDiario/confortZZ/lazuli.jpg'
import confortZZarsenico from '@/assets/sillasUsoDiario/confortZZ/arsenico.jpg'
import confortZZotterSpace from '@/assets/sillasUsoDiario/confortZZ/otterSpace.jpg'
import confortZZgunmetal from '@/assets/sillasUsoDiario/confortZZ/gunmetal.jpg'
import confortZZdarkCharcoal from '@/assets/sillasUsoDiario/confortZZ/darkCharcoal.jpg'
import confortZZsmoky from '@/assets/sillasUsoDiario/confortZZ/smoky.jpg'
import confortZZdarkJungle from '@/assets/sillasUsoDiario/confortZZ/darkJungle.jpg'
import confortZZthalo from '@/assets/sillasUsoDiario/confortZZ/thalo.jpg'
import confortZZprussianBlue from '@/assets/sillasUsoDiario/confortZZ/prussianBlue.jpg'
import confortZZyankeesBlue from '@/assets/sillasUsoDiario/confortZZ/yankeesBlue.jpg'
import confortZZindigoR2 from '@/assets/sillasUsoDiario/confortZZ/indigoR2.jpg'
import confortZZindigoR from '@/assets/sillasUsoDiario/confortZZ/indigoR.jpg'
import confortZZcultur from '@/assets/sillasUsoDiario/confortZZ/cultur.jpg'
import confortZZcyberYellow from '@/assets/sillasUsoDiario/confortZZ/cyberYellow.jpg'
import confortZZblackCoffe from '@/assets/sillasUsoDiario/confortZZ/blackCoffe.jpg'
import confortZZdarkSienna from '@/assets/sillasUsoDiario/confortZZ/darkSienna.jpg'
import confortZZcatawba from '@/assets/sillasUsoDiario/confortZZ/catawba.jpg'
import confortZZpurp from '@/assets/sillasUsoDiario/confortZZ/purp.jpg'
import confortZZmadder from '@/assets/sillasUsoDiario/confortZZ/madder.jpg'

import ImagenShockwave1 from '../../assets/sillasUsoDiario/shockwave/img1.png'
import ImagenShockwave2 from '../../assets/sillasUsoDiario/shockwave/img2.png'
import ImagenShockwave3 from '../../assets/sillasUsoDiario/shockwave/img3.png'
import ImagenShockwave4 from '../../assets/sillasUsoDiario/shockwave/img4.png'
import ImagenShockwave5 from '../../assets/sillasUsoDiario/shockwave/img5.png'
import ImagenShockwave6 from '../../assets/sillasUsoDiario/shockwave/img6.png'
import ImagenShockwave7 from '../../assets/sillasUsoDiario/shockwave/img7.png'
import ImagenShockwave8 from '../../assets/sillasUsoDiario/shockwave/img8.png'
import ImagenShockwave9 from '../../assets/sillasUsoDiario/shockwave/img9.png'

import ImagenSky1 from '../../assets/sillasUsoDiario/sky/img1.png'
import ImagenSky2 from '../../assets/sillasUsoDiario/sky/img2.png'
import ImagenSky3 from '../../assets/sillasUsoDiario/sky/img3.png'
import ImagenSky4 from '../../assets/sillasUsoDiario/sky/img4.png'
import ImagenDynamic1 from '../../assets/sillasUsoDiario/dynamic/img1.png'
import ImagenDynamic2 from '../../assets/sillasUsoDiario/dynamic/img2.png'
import ImagenDynamic3 from '../../assets/sillasUsoDiario/dynamic/img3.png'
import ImagenDynamic4 from '../../assets/sillasUsoDiario/dynamic/img4.png'
import ImagenDynamic5 from '../../assets/sillasUsoDiario/dynamic/img5.png'
import ImagenDynamic6 from '../../assets/sillasUsoDiario/dynamic/img6.png'
import ImagenDynamic7 from '../../assets/sillasUsoDiario/dynamic/img7.png'
import ImagenDynamic8 from '../../assets/sillasUsoDiario/dynamic/img8.png'
import ImagenDynamic9 from '../../assets/sillasUsoDiario/dynamic/img9.png'
import ImagenDynamic10 from '../../assets/sillasUsoDiario/dynamic/img10.png'
import ImagenDynamic11 from '../../assets/sillasUsoDiario/dynamic/img11.png'
import ImagenDynamic12 from '../../assets/sillasUsoDiario/dynamic/img12.png'
import ImagenExplorer1 from '../../assets/sillasUsoDiario/explorer/img1.png'
import ImagenExplorer2 from '../../assets/sillasUsoDiario/explorer/img2.png'
import ImagenExplorer3 from '../../assets/sillasUsoDiario/explorer/img3.png'
import ImagenExplorer4 from '../../assets/sillasUsoDiario/explorer/img4.png'
import ImagenExplorer5 from '../../assets/sillasUsoDiario/explorer/img5.png'
import ImagenExplorer6 from '../../assets/sillasUsoDiario/explorer/img6.png'
import ImagenExplorer7 from '../../assets/sillasUsoDiario/explorer/img7.png'
import ImagenExplorer8 from '../../assets/sillasUsoDiario/explorer/img8.png'
import ImagenExplorer9 from '../../assets/sillasUsoDiario/explorer/img9.png'

export const useSillasUsoDiario = defineStore('sillasUsoDiario', () => {
  const data = ref([
    {
      id: 1,
      nombre: 'Lince Akiva',
      descripcionPrevia: `Con un gran diseño y sencillez la Lince Akiva se distingue por su marco rígido y robusto, que la hace ligera y muy resistente. Es una gran opción para una vida activa.`,
      especificaciones: [
        { descripcion: 'Construida con tubo de 1" 1/2 de pulg. de aluminio aeronáutico 6061-T6.' },
        { descripcion: 'Capacidad de carga 120 kg' },
        { descripcion: 'Respaldo plegable y ajustable en altura e inclinación.' },
        { descripcion: 'Modelo vanguardista en “L”.' },
        { descripcion: 'Protectores de ropa deslizables en aluminio.' },
        { descripcion: 'Reposapiés en “U” con ajuste de altura.' },
        { descripcion: 'Rodamientos traseros de 24" o 25" pulg. 3 grados de inclinación' },
        { descripcion: 'Centro de gravedad ajustable o fijo.' },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas espuma de alta densidad`
        }
      ],
      imagenes: [
        { src: AkivaDarkSienna, color: 'Dark siena' },
        { src: AkivaMadder, color: 'Madder' },
        { src: AkivaAmaranth, color: 'Amaranth' },
        { src: AkivaArsenico, color: 'Arsenico' },
        { src: AkivaArtichoc, color: 'Artichoc' },
        { src: AkivaBlackCoffee, color: 'Black Coffe' },
        { src: AkivaBrownCoffe, color: 'Brown Coffe' },
        { src: AkivaCarmine, color: 'Carmine' },
        { src: AkivaCatawba, color: 'Catawba' },
        { src: AkivaCultur, color: 'Cultur' },
        { src: AkivaCyberYellow, color: 'Cyber Yellow' },
        { src: AkivaDarkCharcoal, color: 'Dark Charcoal' },
        { src: AkivaDarkJungle, color: 'Dark Jungle' },
        { src: AkivaDavys, color: 'Davys' },
        { src: AkivaFaluRed, color: 'FaluRed' },
        { src: AkivaForestGreen, color: 'Forest Green' },
        { src: AkivaGains, color: 'Gains' },
        { src: AkivaGrayX11, color: 'Gray x11' },
        { src: AkivaGunmetal, color: 'Gunmetal' },
        { src: AkivaIndigoR, color: 'Indigo R' },
        { src: AkivaKeppel, color: 'Keppel' },
        { src: AkivaLazuli, color: 'Lazuli' },
        { src: AkivaMadderLake, color: 'Madder Lake' },
        { src: AkivaGrays, color: 'Grays' },
        { src: AkivaMikado, color: 'Mikado' },
        { src: AkivaNesse, color: 'Nesse' },
        { src: AkivaOnyx, color: 'Onyx' },
        { src: AkivaOtterSpace, color: 'Otter Space' },
        { src: AkivaPhili, color: 'Phili' },
        { src: AkivaPlum, color: 'Plum' },
        { src: AkivaPrussianBlue, color: 'Prussian Blue' },
        { src: AkivaPurp, color: 'Purp' },
        { src: AkivaRebecca, color: 'Rebecca' },
        { src: AkivaSmoky, color: 'Smoky' },
        { src: AkivaTangelo, color: 'Tangelo' },
        { src: AkivaTemptress, color: 'Temptress' },
        { src: AkivaThalo, color: 'Thalo' },
        { src: AkivaVioleta, color: 'Violeta' },
        { src: AkivaWagen, color: 'Wagen' },
        { src: AkivaYankeesBlue, color: 'Yankees Blue' },
        { src: AkivaYellowSun, color: 'Yellow Sun' }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 2,
      nombre: 'Lince X4',
      descripcionPrevia: `Si nunca antes has usado una silla de ruedas Lince X4 es tu mejor elección, olvídate de las clásicas sillas ortopédicas que pesan más de 20 kilogramos.
      Los rodamientos traseros son desmontables, peso total menor a 9 kilogramos.
      Centro de gravedad ajustable:
      1 pulg. adelante / 1.5 pulg. atrás.`,
      especificaciones: [
        { descripcion: 'Construida con tubo de 1 pulg. de aluminio aeronáutico 6061-T6. ' },
        { descripcion: 'Capacidad de carga 135 kg' },
        { descripcion: 'Respaldo plegable y ajustable en altura e inclinación.' },
        { descripcion: 'Protectores de ropa deslizables en aluminio.' },
        { descripcion: 'Reposapiés en “U” con ajuste de altura.' },
        { descripcion: 'Rodamientos traseros de 24" o 25" pulg. 3 grados de inclinación' },
        { descripcion: 'Centro de gravedad ajustable o fijo' },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas. espuma de alta densidad`
        },
        {
          descripcion: `Rodamiento delantero de 4 o 5 pulg. rin de plástico.`
        },
        {
          descripcion: `Fabricada acorde a las características fisiometricas y tipo de lesión de la persona. (personalizada)`
        },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        {
          descripcion: `Peso de estructura desde 7 kg. sin rodamientos ni accesorios`
        }
      ],
      imagenes: [
        { src: LinceX4Amaranth, color: 'Amaranth' },
        { src: LinceX4Arsenico, color: 'Arsenico' },
        { src: LinceX4Artichoc, color: 'Artichoc' },
        { src: LinceX4BlackCoffe, color: 'Black Coffe' },
        { src: LinceX4BrownCoffe, color: 'Brown Coffe' },
        { src: LinceX4Carmine, color: 'Carmine' },
        { src: LinceX4Catawba, color: 'Catawba' },
        { src: LinceX4Cultur, color: 'Cultur' },
        { src: LinceX4CyberYellow, color: 'Cyber Yellow' },
        { src: LinceX4DarkCharcoal, color: 'Dark Charcoal' },
        { src: LinceX4DarkJungle, color: 'Dark Jungle' },
        { src: LinceX4DarkSienna, color: 'Dark Sienna' },
        { src: LinceX4Davys, color: "Davy's" },
        { src: LinceX4FaluRed, color: 'Falu Red' },
        { src: LinceX4ForestGreen, color: 'Forest Green' },
        { src: LinceX4Gains, color: 'Gains' },
        { src: LinceX4GrayX11, color: 'Gray X11' },
        { src: LinceX4Grays, color: 'Grays' },
        { src: LinceX4Gunmetal, color: 'Gunmetal' },
        { src: LinceX4IndigoR, color: 'Indigo R' },
        { src: LinceX4IndigoR2, color: 'Indigo R2' },
        { src: LinceX4Kepel, color: 'Kepel' },
        { src: LinceX4Lazuli, color: 'Lazuli' },
        { src: LinceX4MadderLake, color: 'Madder Lake' },
        { src: LinceX4Madder, color: 'Madder' },
        { src: LinceX4Mikado, color: 'Mikado' },
        { src: LinceX4Nesse, color: 'Nesse' },
        { src: LinceX4Onyx, color: 'Onyx' },
        { src: LinceX4OtterSpace, color: 'Otter Space' },
        { src: LinceX4Phili, color: 'Phili' },
        { src: LinceX4Plum, color: 'Plum' },
        { src: LinceX4PrussianBlue, color: 'Prussian Blue' },
        { src: LinceX4Purp, color: 'Purp' },
        { src: LinceX4Rebecca, color: 'Rebecca' },
        { src: LinceX4Smoky, color: 'Smoky' },
        { src: LinceX4Tangelo, color: 'Tangelo' },
        { src: LinceX4Temptress, color: 'Temptress' },
        { src: LinceX4Thalo, color: 'Thalo' },
        { src: LinceX4Violeta, color: 'Violeta' },
        { src: LinceX4Wagen, color: 'Wagen' },
        { src: LinceX4YankeesBlue, color: 'Yankees Blue' },
        { src: LinceX4YellowSun, color: 'Yellow Sun' }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 3,
      nombre: 'Confort ZZ',
      descripcionPrevia: `Proporciona máxima comodidad por su amortiguador que evita sentir el golpeteo en zonas empedradas o al bajar desniveles. Óptima en espacios reducidos, su estructura en aluminio aeronáutico la hace resistente y ligera.`,
      especificaciones: [
        { descripcion: 'Construida con tubo de 1 pulg. de aluminio aeronáutico 6061-T6.' },
        { descripcion: 'Capacidad de carga 135 kg' },
        { descripcion: 'Respaldo plegable y ajustable en altura e inclinación.' },
        { descripcion: 'Con amortiguador central.' },
        { descripcion: 'Protectores de ropa deslizables en aluminio.' },
        { descripcion: 'Reposapiés en “U” con ajuste de altura.' },
        { descripcion: 'Rodamientos traseros de 24" o 25" pulg. 3 grados de inclinación.' },
        { descripcion: 'Centro de gravedad fijo' },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas. espuma de alta densidad`
        },
        { descripcion: 'Rodamiento delantero de 4 o 5 pulg. rin de plástico.' },
        {
          descripcion: `Fabricada acorde a las características fisiometricas y tipo de lesión de la persona. (personalizada)`
        },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        {
          descripcion: `Peso de estructura desde 9 kg. sin rodamientos ni accesorios`
        }
      ],
      imagenes: [
        { src: confortZZtemptress, color: 'Temptress' },
        { src: confortZZbrownCoffe, color: 'Brown Coffe' },
        { src: confortZZforestGreen, color: 'Forest Green' },
        { src: confortZZwagen, color: 'Wagen' },
        { src: confortZZartichoc, color: 'Artichoc' },
        { src: confortZZyellowSun, color: 'Yellow Sun' },
        { src: confortZZmikado, color: 'Mikado' },
        { src: confortZZtangelo, color: 'Tangelo' },
        { src: confortZZrebecca, color: 'Rebecca' },
        { src: confortZZnesse, color: 'Nesse' },
        { src: confortZZplum, color: 'Plum' },
        { src: confortZZvioleta, color: 'Violeta' },
        { src: confortZZamaranth, color: 'Amaranth' },
        { src: confortZZmadderLake, color: 'Madder Lake' },
        { src: confortZZcarmine, color: 'Carmine' },
        { src: confortZZfaluRed, color: 'Falu Red' },
        { src: confortZZonyx, color: 'Onyx' },
        { src: confortZZdavys, color: `Davy's` },
        { src: confortZZgrays, color: 'Grays' },
        { src: confortZZgrayX11, color: 'Gray x11' },
        { src: confortZZgains, color: 'Gains' },
        { src: confortZZkepel, color: 'Kepel' },
        { src: confortZZphili, color: 'Phili' },
        { src: confortZZlazuli, color: 'Lazuli' },
        { src: confortZZarsenico, color: 'Arsenico' },
        { src: confortZZotterSpace, color: 'Otter Space' },
        { src: confortZZgunmetal, color: 'Gunmetal' },
        { src: confortZZdarkCharcoal, color: 'Dark Charcoal' },
        { src: confortZZsmoky, color: 'Smoky' },
        { src: confortZZdarkJungle, color: 'Dark Jungle' },
        { src: confortZZthalo, color: 'Thalo' },
        { src: confortZZprussianBlue, color: 'Prussian Blue' },
        { src: confortZZyankeesBlue, color: 'Yankees Blue' },
        { src: confortZZindigoR2, color: 'Indigo R2' },
        { src: confortZZindigoR, color: 'Indigo R' },
        { src: confortZZcultur, color: 'Cultur' },
        { src: confortZZcyberYellow, color: 'Cyber Yellow' },
        { src: confortZZblackCoffe, color: 'Black Coffe' },
        { src: confortZZdarkSienna, color: 'Dark Sienna' },
        { src: confortZZcatawba, color: 'Catawba' },
        { src: confortZZpurp, color: 'Purp' },
        { src: confortZZmadder, color: 'Madder' }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 4,
      nombre: 'Lince Shockwave',
      descripcionPrevia: `Combina elegancia y confort. En Industrias Lince hemos desarrollado la silla de ruedas más innovadora y ligera del mercado. Siguiendo el patrón en “L” dotada de suspensión trasera ofrece el confort necesario para cuidar la salud.`,
      especificaciones: [
        { descripcion: `Construida con tubo de 1 1/2 pulg. de aluminio aeronáutico 6061-T6.` },
        { descripcion: `Capacidad de carga 120 kg` },
        { descripcion: `Respaldo plegable y ajustable en altura e inclinación.` },
        { descripcion: `Con amortiguador central.` },
        { descripcion: `Protectores de ropa deslizables en aluminio.` },
        { descripcion: `Reposapiés en “U” con ajuste de altura.` },
        { descripcion: `Rodamientos traseros de 24" o 25" pulg. 3" de inclinación` },
        { descripcion: `Centro de gravedad fijo` },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas espuma de alta densidad`
        },
        { descripcion: `Rodamiento delantero de 4 o 5 pulg. rin de plástico.` },
        {
          descripcion: `Fabricada acorde a las características fisiometricas y tipo de lesión de la persona. (personalizada)`
        },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        { descripcion: `Peso de estructura desde 8 kg. sin rodamientos ni accesorios` }
      ],
      imagenes: [
        { src: ImagenShockwave1 },
        { src: ImagenShockwave2 },
        { src: ImagenShockwave3 },
        { src: ImagenShockwave4 },
        { src: ImagenShockwave5 },
        { src: ImagenShockwave6 },
        { src: ImagenShockwave7 },
        { src: ImagenShockwave8 },
        { src: ImagenShockwave9 }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 5,
      nombre: 'Lince Sky',
      descripcionPrevia: `Compañera ideal para todas las ocasiones. Simple, ligera, práctica y versátil condiseño minimalista pero muy resiente. La más ligera de las sillas de uso cotidiano.`,
      especificaciones: [
        { descripcion: `Construida con tubo de 1 1/8 pulg. de aluminio aeronáutico 6061-T6.` },
        { descripcion: `Capacidad de carga 115 kg` },
        { descripcion: `Respaldo plegable y ajustable en altura e inclinación` },
        { descripcion: `Modelo vanguardista en “L”.` },
        { descripcion: `Protectores de ropa deslizables en aluminio.` },
        { descripcion: `Reposapiés en “U” con ajuste de altura.` },
        { descripcion: `Rodamientos traseros de 24" o 25" pulg.` },
        { descripcion: `Centro de gravedad ajustable o fijo.` },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas. espuma de alta densidad`
        },
        { descripcion: `Rodamiento delantero de 4 o 5 pulg. rin de plástico.` },
        {
          descripcion: `Fabricada acorde a las características fisiometricas y tipo de lesión de la persona. (personalizada)`
        },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        { descripcion: `Peso de estructura desde 6.5 kg. sin rodamientos ni accesorios` }
      ],
      imagenes: [
        { src: ImagenSky1 },
        { src: ImagenSky2 },
        { src: ImagenSky3 },
        { src: ImagenSky4 }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 6,
      nombre: 'Lince Dynamic',
      descripcionPrevia: `Luce espectacular con nuevo y elegante diseño. Una de las más ágiles y ligeras del mercado, tan versátil que es ideal para disfrutar de un agradable paseo cotidiano o para practicar danza deportiva.`,
      especificaciones: [
        {
          descripcion: `Construida con tubo de 1 1/2 pulg. parte inferior y 1 pulg. superior (asiento) de aluminio aeronáutico 6061-T6.`
        },
        { descripcion: `Capacidad de carga 110 kg.` },
        { descripcion: `Respaldo fijo y ajustable en altura.` },
        { descripcion: `Protectores de ropa fijos soldados a la estructura` },
        { descripcion: `Reposapiés en “U” con ajuste de altura.` },
        { descripcion: `Rodamientos traseros de 24" o 25" pulg.` },
        { descripcion: `Centro de gravedad fijo` },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas. espuma de alta densidad`
        },
        { descripcion: `Rodamiento delantero de 4 o 5 pulg. rin de plástico.` },
        {
          descripcion: `Fabricada acorde a las características fisiometricas y tipo de lesión de la persona. (personalizada)`
        },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        { descripcion: `Peso de estructura desde 6 kg. sin rodamientos ni accesorios` }
      ],
      imagenes: [
        { src: ImagenDynamic1 },
        { src: ImagenDynamic2 },
        { src: ImagenDynamic3 },
        { src: ImagenDynamic4 },
        { src: ImagenDynamic5 },
        { src: ImagenDynamic6 },
        { src: ImagenDynamic7 },
        { src: ImagenDynamic8 },
        { src: ImagenDynamic9 },
        { src: ImagenDynamic10 },
        { src: ImagenDynamic11 },
        { src: ImagenDynamic12 }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    },
    {
      id: 7,
      nombre: 'Lince Explorer',
      descripcionPrevia: `Forma parte de la linea  semi-personalizada, ofrece versatilidad para hacer frente a cualquier actividad y disfrutar de su vida diaria. Por su diseño ergonómico  es la opción para quien tiene lesiones medulares, desde torácica T9 lumbares o también para lesiones como Polio o Mielo.`,
      especificaciones: [
        { descripcion: `Construida con tubo de 1 pulg. de aluminio aeronáutico 6061-T6.` },
        { descripcion: `Capacidad de carga 135 kg` },
        { descripcion: `Respaldo fijo y ajustable en altura` },
        { descripcion: `Protectores de ropa fijos atornillados a la estructura` },
        { descripcion: `Reposapiés en “U” con ajuste de altura.` },
        { descripcion: `Rodamientos traseros de 24" pulg. con llanta 24"X 1 3/8` },
        { descripcion: `Centro de gravedad fijo` },
        {
          descripcion: `Vestidura acojinada repelente al agua, cojín de 2 pulgadas espuma de alta densidad`
        },
        { descripcion: `Rodamiento delantero de 4 o 5 pulg. rin de plástico.` },
        { descripcion: `Fabricada en talla chica, mediana o grande, (semi personalizada).` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        },
        { descripcion: `Peso de estructura desde 7 kg. sin rodamientos ni accesorios` }
      ],
      imagenes: [
        { id: 1, src: ImagenExplorer1 },
        { id: 2, src: ImagenExplorer2 },
        { id: 3, src: ImagenExplorer3 },
        { id: 4, src: ImagenExplorer4 },
        { id: 5, src: ImagenExplorer5 },
        { id: 6, src: ImagenExplorer6 },
        { id: 7, src: ImagenExplorer7 },
        { id: 9, src: ImagenExplorer8 },
        { id: 10, src: ImagenExplorer9 }
      ],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    }
  ])
  return {
    data
  }
})
