import { defineStore } from 'pinia'
import { ref } from 'vue'
import ImagenAkiva1 from '../../assets/sillasUsoDiario/akiva/img1.png'
import ImagenAkiva2 from '../../assets/sillasUsoDiario/akiva/img2.png'
import ImagenAkiva3 from '../../assets/sillasUsoDiario/akiva/img3.png'
import ImagenAkiva4 from '../../assets/sillasUsoDiario/akiva/img4.png'
import ImagenAkiva5 from '../../assets/sillasUsoDiario/akiva/img5.png'
import ImagenAkiva6 from '../../assets/sillasUsoDiario/akiva/img6.png'
import ImagenX41 from '../../assets/sillasUsoDiario/x4/img1.png'
import ImagenX42 from '../../assets/sillasUsoDiario/x4/img2.png'
import ImagenX43 from '../../assets/sillasUsoDiario/x4/img3.png'
import ImagenX44 from '../../assets/sillasUsoDiario/x4/img4.png'
import ImagenConfortZZ1 from '../../assets/sillasUsoDiario/confortZZ/img1.png'
import ImagenConfortZZ2 from '../../assets/sillasUsoDiario/confortZZ/img2.png'
import ImagenConfortZZ3 from '../../assets/sillasUsoDiario/confortZZ/img3.png'
import ImagenConfortZZ4 from '../../assets/sillasUsoDiario/confortZZ/img4.png'
import ImagenConfortZZ5 from '../../assets/sillasUsoDiario/confortZZ/img5.png'
import ImagenConfortZZ6 from '../../assets/sillasUsoDiario/confortZZ/img6.png'
import ImagenConfortZZ7 from '../../assets/sillasUsoDiario/confortZZ/img7.png'
import ImagenConfortZZ8 from '../../assets/sillasUsoDiario/confortZZ/img8.png'
import ImagenShockwave1 from '../../assets/sillasUsoDiario/shockwave/img1.png'
import ImagenShockwave2 from '../../assets/sillasUsoDiario/shockwave/img2.png'
import ImagenShockwave3 from '../../assets/sillasUsoDiario/shockwave/img3.png'
import ImagenShockwave4 from '../../assets/sillasUsoDiario/shockwave/img4.png'
import ImagenShockwave5 from '../../assets/sillasUsoDiario/shockwave/img5.png'
import ImagenShockwave6 from '../../assets/sillasUsoDiario/shockwave/img6.png'
import ImagenShockwave7 from '../../assets/sillasUsoDiario/shockwave/img7.png'
import ImagenShockwave8 from '../../assets/sillasUsoDiario/shockwave/img8.png'
import ImagenShockwave9 from '../../assets/sillasUsoDiario/shockwave/img9.png'

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
        { src: ImagenAkiva1 },
        { src: ImagenAkiva2 },
        { src: ImagenAkiva3 },
        { src: ImagenAkiva4 },
        { src: ImagenAkiva5 },
        { src: ImagenAkiva6 }
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
      imagenes: [{ src: ImagenX41 }, { src: ImagenX42 }, { src: ImagenX43 }, { src: ImagenX44 }],
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
        { src: ImagenConfortZZ1 },
        { src: ImagenConfortZZ2 },
        { src: ImagenConfortZZ3 },
        { src: ImagenConfortZZ4 },
        { src: ImagenConfortZZ5 },
        { src: ImagenConfortZZ6 },
        { src: ImagenConfortZZ7 },
        { src: ImagenConfortZZ8 }
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
    }
  ])
  return {
    data
  }
})
