import { defineStore } from 'pinia'
import { ref } from 'vue'

import imagne4max1 from '../assets/sillasDeportivas/cuatroMax/img1.png'
import imagne4max2 from '../assets/sillasDeportivas/cuatroMax/img2.png'
import imagne4max3 from '../assets/sillasDeportivas/cuatroMax/img3.png'
import imagne4max4 from '../assets/sillasDeportivas/cuatroMax/img4.png'
import imagne4max5 from '../assets/sillasDeportivas/cuatroMax/img5.png'
import imagne4max6 from '../assets/sillasDeportivas/cuatroMax/img6.png'
import imagne4max7 from '../assets/sillasDeportivas/cuatroMax/img7.png'
import imagne4max8 from '../assets/sillasDeportivas/cuatroMax/img8.png'
import imagen2EZ1 from '../assets/sillasDeportivas/dosEZ/img1.png'
import imagen2EZ2 from '../assets/sillasDeportivas/dosEZ/img2.png'
import imagen2EZ3 from '../assets/sillasDeportivas/dosEZ/img3.png'
import imagen2EZ4 from '../assets/sillasDeportivas/dosEZ/img4.png'
import imagen2EZ5 from '../assets/sillasDeportivas/dosEZ/img5.png'
import imagenCurve1 from '../assets/sillasDeportivas/curve/img1.png'
import imagenCurve2 from '../assets/sillasDeportivas/curve/img2.png'
import imagenCurve3 from '../assets/sillasDeportivas/curve/img3.png'
import imagenCurve4 from '../assets/sillasDeportivas/curve/img4.png'
import imagenCurve5 from '../assets/sillasDeportivas/curve/img5.png'
import imagencurveTenis1 from '../assets/sillasDeportivas/curveTenis/img1.png'
import imagencurveTenis2 from '../assets/sillasDeportivas/curveTenis/img2.png'
import imagencurveTenis3 from '../assets/sillasDeportivas/curveTenis/img3.png'
import imagencurveTenis4 from '../assets/sillasDeportivas/curveTenis/img4.png'
import imagencurveTenis5 from '../assets/sillasDeportivas/curveTenis/img5.png'
import imagenDynamicDanza1 from '../assets/sillasDeportivas/dynamicDanza/img1.png'
import imagenDynamicDanza2 from '../assets/sillasDeportivas/dynamicDanza/img2.png'
import imagenDynamicDanza3 from '../assets/sillasDeportivas/dynamicDanza/img3.png'
import imagenDynamicDanza4 from '../assets/sillasDeportivas/dynamicDanza/img4.png'
import imagenDynamicDanza5 from '../assets/sillasDeportivas/dynamicDanza/img5.png'
import imagenDynamicDanza6 from '../assets/sillasDeportivas/dynamicDanza/img6.png'
import imagenDynamicDanza7 from '../assets/sillasDeportivas/dynamicDanza/img7.png'
import imagenDynamicDanza8 from '../assets/sillasDeportivas/dynamicDanza/img8.png'
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
        { src: imagne4max1 },
        { src: imagne4max2 },
        { src: imagne4max3 },
        { src: imagne4max4 },
        { src: imagne4max5 },
        { src: imagne4max6 },
        { src: imagne4max7 },
        { src: imagne4max8 }
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
        { src: imagen2EZ1 },
        { src: imagen2EZ2 },
        { src: imagen2EZ3 },
        { src: imagen2EZ4 },
        { src: imagen2EZ5 }
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
        { src: imagenCurve1 },
        { src: imagenCurve2 },
        { src: imagenCurve3 },
        { src: imagenCurve4 },
        { src: imagenCurve5 }
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
        { src: imagencurveTenis1 },
        { src: imagencurveTenis2 },
        { src: imagencurveTenis3 },
        { src: imagencurveTenis4 },
        { src: imagencurveTenis5 }
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
        { src: imagenDynamicDanza1 },
        { src: imagenDynamicDanza2 },
        { src: imagenDynamicDanza3 },
        { src: imagenDynamicDanza4 },
        { src: imagenDynamicDanza5 },
        { src: imagenDynamicDanza6 },
        { src: imagenDynamicDanza7 },
        { src: imagenDynamicDanza8 }
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
