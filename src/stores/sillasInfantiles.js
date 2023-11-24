import { defineStore } from 'pinia'
import { ref } from 'vue'
import imagenNitroInfantil1 from '../assets/sillasInfantiles/nitroInfantil/img1.png'
import imagenNitroInfantil2 from '../assets/sillasInfantiles/nitroInfantil/img2.png'
import imagenNitroInfantil3 from '../assets/sillasInfantiles/nitroInfantil/img3.png'
import imagenNitroInfantil4 from '../assets/sillasInfantiles/nitroInfantil/img4.png'
import imagenPcInfantil1 from '../assets/sillasInfantiles/pcInfantil/img1.png'
import imagenPcInfantil2 from '../assets/sillasInfantiles/pcInfantil/img2.png'
import imagenPcInfantil3 from '../assets/sillasInfantiles/pcInfantil/img3.png'
import imagenPcInfantil4 from '../assets/sillasInfantiles/pcInfantil/img4.png'
import imagenPcInfantil5 from '../assets/sillasInfantiles/pcInfantil/img5.png'
import imagenAkivaJuvenil1 from '../assets/sillasInfantiles/akivaJuvenil/img1.png'
import imagenAkivaJuvenil2 from '../assets/sillasInfantiles/akivaJuvenil/img2.png'
import imagenAkivaJuvenil3 from '../assets/sillasInfantiles/akivaJuvenil/img3.png'
import imagenAkivaJuvenil4 from '../assets/sillasInfantiles/akivaJuvenil/img4.png'
import imagenAkivaJuvenil5 from '../assets/sillasInfantiles/akivaJuvenil/img5.png'

export const useSillasInfantiles = defineStore('sillasInfantiles', () => {
  const data = ref([
    {
      id: 1,
      nombre: `Lince Nitro Infantil`,
      descripcionPrevia: `Lince Nitro Infantil tiene un diseño vanguardista en “LL” o  “LC”. Por su estructura tiene mayor  resistencia y durabilidad en menos espacio. Es fácil de transportar y su ingenioso sistema protector de ropa deslizable mantendrá limpio tu atuendo en toda ocasión. Especialmente diseñada para brindar una mayor movilidad a los pequeños.`,
      especificaciones: [
        { descripcion: `Centro de gravedad fijo o ajustable.` },
        { descripcion: `Estilo en doble “LL” o “LC”.` },
        { descripcion: `Respaldo acojinado.` },
        { descripcion: `Banda para pantorrillas.` },
        { descripcion: `Respaldo plegable.` },
        { descripcion: `De 9.5 a 11 kilos completa.` },
        { descripcion: `7 kilos sin ruedas traseras.` },
        { descripcion: `Centro de gravedad fijo o ajustable.` },
        { descripcion: `3 grados de inclinación ruedas traseras.` },
        { descripcion: `Estructura de aluminio aeronáutico 6061 T-6.` },
        { descripcion: `Rodamiento trasero desmontable con rayos de acero inoxidable.` },
        { descripcion: `Rodamiento delanteros de 5 pulg. rin de plástico llanta trasparente.` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        }
      ],
      imagenes: [
        { src: imagenNitroInfantil1 },
        { src: imagenNitroInfantil2 },
        { src: imagenNitroInfantil3 },
        { src: imagenNitroInfantil4 }
      ],
      info: `*Las imagenes son ilustrativas, el tipo de rodamiento trasero así como frenos, impulsores, coderas, etc, tienen costo extra por lo que deberan ser cotizadas`
    },
    {
      id: 2,
      nombre: `Lince PC Infantil`,
      descripcionPrevia: `Especial para niños diagnosticados con Parálisis Cerebral`,
      especificaciones: [
        { descripcion: `Respaldo acojinado.` },
        { descripcion: `Banda para pantorrillas.` },
        { descripcion: `Respaldo plegable.` },
        { descripcion: `Estructura de aluminio aeronáutico 6061 T-6.` },
        {
          descripcion: `Aplicación de pintura Powder Coating, colores a elección de la Gama de Colores Roe-Mex.`
        }
      ],
      imagenes: [
        { src: imagenPcInfantil1 },
        { src: imagenPcInfantil2 },
        { src: imagenPcInfantil3 },
        { src: imagenPcInfantil4 },
        { src: imagenPcInfantil5 }
      ],
      info: `*Las imágenes son ilustrativas, el tipo de rodamientos traseros así como frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas. Los frenos , impulsores, coderas o tipo rodamientos tienen costo extra`
    },
    {
      id: 3,
      nombre: `Lince Akiva juvenil`,
      descripcionPrevia: `Gran diseño y sencillez fabricada especialmente para pequeños. Lince Akiva Infantil se distingue por su marco tobusto, que la hace ligera, resistente y muy segura. Sin lugar a dudas una gran opcion para acompañar en la vida activa de un jovencito`,
      especificaciones: [
        { descripcion: `Construida con tubo de 1¼ de pulg. de aluminio aeronáutico 6061-T6` },
        { descripcion: `Peso de 7 a 9 KG` },
        { descripcion: `Respaldo plegable` },
        { descripcion: `Modelo vanguardista en "L"` },
        { descripcion: `Protectores de ropa desilizables` },
        { descripcion: `Reposapiés en "U" con ajustable de altura` },
        { descripcion: `Rodamientos traseros de 24 pulg.` },
        { descripcion: `Vestidura acojinada repelente al agua` },
        { descripcion: `Rodamiento delantero de 5 pulg. rin de plastico llanta transparente` },
        {
          descripcion: `Fabricada acorde a las características fidiometricas y tipo de lesión de la persona`
        },
        {
          descripcion: `Aplicacion de pintura Powder Coating, colores a elección de la Gama de colores Roe-Mex`
        }
      ],
      imagenes: [
        { src: imagenAkivaJuvenil1 },
        { src: imagenAkivaJuvenil2 },
        { src: imagenAkivaJuvenil3 },
        { src: imagenAkivaJuvenil4 },
        { src: imagenAkivaJuvenil5 }
      ],
      info: `*Las imagenes son ilustrativas, el tipo de rodamientos traseros así como de frenos, impulsores coderas, etc, tienen costo extra por lo que deberán ser cotizadas. Los frenos, impulsores, coderas o tipo rodamientos tienen costo extra`
    }
  ])
  return {
    data
  }
})
