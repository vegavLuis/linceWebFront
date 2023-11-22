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
      imagenes: [{ src: ImagenDynamic1 }],
      info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros, frenos, impulsores, coderas, etc., tienen costo extra por lo que deberán ser cotizadas.`
    }
  ])
  return {
    data
  }
})
