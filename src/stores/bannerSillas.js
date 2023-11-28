import { defineStore } from 'pinia'
import { ref } from 'vue'
import imagen1 from '../assets/bannerSillas/1.webp'
import imagen2 from '../assets/bannerSillas/2.webp'
import imagen3 from '../assets/bannerSillas/3.webp'
import imagen4 from '../assets/bannerSillas/4.webp'
import imagen5 from '../assets/bannerSillas/5.webp'
import fondoImagen1 from '../assets/bannerSillas/fondo.webp'
import fondoImagen2 from '../assets/bannerSillas/fondo2.webp'
import fondoImagen3 from '../assets/bannerSillas/fondo3.webp'
import fondoImagen4 from '../assets/bannerSillas/fondo4.webp'
import fondoImagen5 from '../assets/bannerSillas/fondo5.webp'
import imagenMx3SillaPista1 from '../assets/sillasDeportivas/mx3SillaPista/img1.png'
import imagenMx3SillaPista2 from '../assets/sillasDeportivas/mx3SillaPista/img2.png'
import imagenMx3SillaPista3 from '../assets/sillasDeportivas/mx3SillaPista/img3.png'
import imagenMx3SillaPista4 from '../assets/sillasDeportivas/mx3SillaPista/img4.png'
import imagenMx3SillaPista5 from '../assets/sillasDeportivas/mx3SillaPista/img5.png'
import imagenMx3SillaPista6 from '../assets/sillasDeportivas/mx3SillaPista/img6.png'
import imagenMx3SillaPista7 from '../assets/sillasDeportivas/mx3SillaPista/img7.png'
import imagenMx3SillaPista8 from '../assets/sillasDeportivas/mx3SillaPista/img8.png'
import ImagenSky1 from '../assets/sillasUsoDiario/sky/img1.png'
import ImagenSky2 from '../assets/sillasUsoDiario/sky/img2.png'
import ImagenSky3 from '../assets/sillasUsoDiario/sky/img3.png'
import ImagenSky4 from '../assets/sillasUsoDiario/sky/img4.png'
import ImagenShockwave1 from '../assets/sillasUsoDiario/shockwave/img1.png'
import ImagenShockwave2 from '../assets/sillasUsoDiario/shockwave/img2.png'
import ImagenShockwave3 from '../assets/sillasUsoDiario/shockwave/img3.png'
import ImagenShockwave4 from '../assets/sillasUsoDiario/shockwave/img4.png'
import ImagenShockwave5 from '../assets/sillasUsoDiario/shockwave/img5.png'
import ImagenShockwave6 from '../assets/sillasUsoDiario/shockwave/img6.png'
import ImagenShockwave7 from '../assets/sillasUsoDiario/shockwave/img7.png'
import ImagenShockwave8 from '../assets/sillasUsoDiario/shockwave/img8.png'
import ImagenShockwave9 from '../assets/sillasUsoDiario/shockwave/img9.png'
import ImagenExplorer1 from '../assets/sillasUsoDiario/explorer/img1.png'
import ImagenExplorer2 from '../assets/sillasUsoDiario/explorer/img2.png'
import ImagenExplorer3 from '../assets/sillasUsoDiario/explorer/img3.png'
import ImagenExplorer4 from '../assets/sillasUsoDiario/explorer/img4.png'
import ImagenExplorer5 from '../assets/sillasUsoDiario/explorer/img5.png'
import ImagenExplorer6 from '../assets/sillasUsoDiario/explorer/img6.png'
import ImagenExplorer7 from '../assets/sillasUsoDiario/explorer/img7.png'
import ImagenExplorer8 from '../assets/sillasUsoDiario/explorer/img8.png'
import ImagenExplorer9 from '../assets/sillasUsoDiario/explorer/img9.png'
import imagen2EZ1 from '../assets/sillasDeportivas/dosEZ/img1.png'
import imagen2EZ2 from '../assets/sillasDeportivas/dosEZ/img2.png'
import imagen2EZ3 from '../assets/sillasDeportivas/dosEZ/img3.png'
import imagen2EZ4 from '../assets/sillasDeportivas/dosEZ/img4.png'
import imagen2EZ5 from '../assets/sillasDeportivas/dosEZ/img5.png'

export const useBannerSillas = defineStore('bannerSillas', () => {
  const datos = ref([
    {
      src: imagen1,
      nombre: 'Lince',
      subnombre: 'MX3',
      fondo: fondoImagen1,
      info: [
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
        }
      ]
    },
    {
      src: imagen2,
      nombre: 'Lince',
      subnombre: 'Sky',
      fondo: fondoImagen2,
      info: [
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
        }
      ]
    },
    {
      src: imagen3,
      nombre: 'LINCE',
      subnombre: 'Shockwabe',
      fondo: fondoImagen3,
      info: [
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
      ]
    },
    {
      src: imagen4,
      nombre: 'LINCE',
      subnombre: 'Explorer',
      fondo: fondoImagen4,
      info: [
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
      ]
    },
    {
      src: imagen5,
      nombre: 'LINCE',
      subnombre: '2EZ BKB',
      fondo: fondoImagen5,
      info: [
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
            { src: imagen2EZ1 },
            { src: imagen2EZ2 },
            { src: imagen2EZ3 },
            { src: imagen2EZ4 },
            { src: imagen2EZ5 }
          ],
          info: `* Las imágenes son ilustrativas, el tipo de rodamientos traseros así como amarres clip strap, protectores de estructura, etc., tienen costo extra por lo que deberán ser cotizadas. Los rodamientos de fibra de carbón o accesorios tienen costo extra`
        }
      ]
    }
  ])
  return {
    datos
  }
})
