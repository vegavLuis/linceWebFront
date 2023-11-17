import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppTerminiosCondiciones = defineStore('appTerminiosCondiciones', () => {
  const data = ref([
    {
      id: 1,
      nombre: 'TÉRMINOS Y CONDICIONES DE VENTA:',
      lista: [
        {
          nombre: `Solo se emitirán facturas dentro del mes corriente, 72 hrs. despúes de la fecha de facturación ya no habrá refacturación`
        },
        {
          nombre: `En venta de accesorios y refacciones el pago es del 100% para realizar la entrega.`
        },
        {
          nombre: `Se requiere de un anticipo mínimo del 50% para poder poner su pedido de silla de ruedas en lista de fabricación.`
        },
        {
          nombre: `Al pagar el 50% de anticipo solo cuenta con tres días hábiles para solicitar una modificación a lo acordado en la factura, pedido u orden de compra.`
        },
        {
          nombre: `Todo cambio solicitado por el cliente, posterior a los tres días,  generará cambios en la fecha de entrega, así como costos extras en el presupuesto original, que deberán ser saldados a la entrega. `
        },
        {
          nombre: `Cambios solicitados una vez fabricada la estructura, generará un costo adicional del 20% sobre el valor de la misma.`
        },
        {
          nombre: `El cliente deberá enviar su comprobante de pago o anticipo, escaneado o fotografíado de manera legible, para que este sea considerado.`
        },
        {
          nombre: `El cliente acepta que las medidas de la silla tomadas por personal de Industrias Lince por ROE-MEX S.A. de C.V. son las correctas.`
        },
        {
          nombre: `Industrias Lince por ROE-MEX S.A. de C.V. ni su personal se hará responsable de sillas con errores en medidas que hayan sido tomadas por personal ajeno a la empresa.`
        }
      ]
    },
    {
      id: 2,
      nombre: 'FECHAS DE ENTREGA:',
      lista: [
        {
          nombre: `El tiempo de entrega es de 6 a 8 semanas a partir del pago o anticipo del 50% (Aplica solo sillas de ruedas marca LINCE)`
        },
        {
          nombre: `Las fechas de entrega son consideradas a partir del día hábil siguiente al pago o anticipo del 50%`
        },
        {
          nombre: `Las fechas de entrega son aproximadas y estimadas y no estan garantizadas.`
        },
        {
          nombre: `El tiempo de entrega está sujeto a disponibilidad de material de importación ya sea en refacciones, accesorios o en material  necesario para la fabricación de sillas de ruedas.`
        }
      ]
    },
    {
      id: 3,
      nombre: 'CANCELACIONES:',
      lista: [
        {
          nombre: `En facturas, después de 72 hrs. de expedida sí se requiere cancelar por datos erróneos esto generará un cargo de timbrado por $250.00`
        },
        {
          nombre: `La cancelación de cualquier orden de compra o pedido generará una PENALIZACIÓN de 20% del monto total cotizado.`
        }
      ]
    },
    {
      id: 4,
      nombre: 'ENTREGA:',
      lista: [
        {
          nombre: `Una vez que el producto sea entregado por el vendedor al comprador, este deberá inspeccionar inmediatamente su silla de ruedas, refacciones o accesorios, con el fin de verificar cantidades o posibles daños, detalles u omisiones. Si el comprador encuentra algo que reportar, deberá notificárlo al vendedor antes de salir con el producto, de lo contrario se tomará como CONFORMIDAD.`
        },
        {
          nombre: `Sin excepción todo pedido será entregado síempre y cuándo esté saldado.`
        },
        {
          nombre: `Una vez que el vendedor notifique al comprador que su pedido está listo, contará con un periodo de 15 días naturales para la entrega o recolección del mismo`
        },
        {
          nombre: `Pasados los 15 días naturales del periodo de recolección, su pedido generará gastos de almacenamiento por día.`
        }
      ]
    },
    {
      id: 5,
      nombre: 'ENVÍO:',
      lista: [
        {
          nombre: `EL flete corre por cuenta del comprador.`
        },
        {
          nombre: `Solo se enviará por medio de las compañías de paquetería con las que Industrias Lince por ROE-MEX S.A. de C.V. tenga convenio.`
        },
        {
          nombre: `En caso que el cliente sugiera o requiere el envío a través de otra compañía, este deberá enviar una guía prepago, y solo será aceptada si dicha empresa de paquetería realiza recolección a domicilio`
        },
        {
          nombre: `Las empresas de mensajería tienen la opción de asegurar el envío, sí el cliente acepta el cargo, su mercancía viajará asegurada, de lo contrario Industrias Lince por ROE-MEX S.A. de C.V.  así como la empresa de mensajería no se hara responsable por daños en su producto.`
        },
        {
          nombre: `Una vez que los productos sean entregados por la empresa de mensajería, el comprador deberá hacer una inspección  del producto por daños o cantidades recibidas y contará con 48 hrs. para notificarle al VENDEDOR alguna inconformidad al correo electrónico sillaslince@gmail.com o al WhatsApp. (+52)55 8102 0704, acompañado de fotografías y/o videos que evidenciè y sustente su reporte, con una descripción.`
        }
      ]
    },
    {
      id: 6,
      nombre: 'GARANTíA:',
      lista: [
        {
          nombre: `En sillas de ruedas marca LINCE la garantía es de 3 años en su estructura, no incluye ruedas traseras y/o delanteras así como cualquier otro accesorio.`
        },
        {
          nombre: `La garantía está sujeta a la póliza entregada con cada silla, en caso de no contar con ella, será necesario acreditar la propiedad mediante recibo, remisión o factura.`
        },
        {
          nombre: `Sin excepción, NO hay garantía en reparaciones de ningún tipo.`
        }
      ]
    }
  ])
  const terminos = ref([
    {
      titulo: 'TÉRMINOS Y CONDICIONES DE REPARACIÓN',
      lista: [
        {
          nombre: `Todo rodamiento o pieza que no se requiera para el servicio o reparación que el cliente decida dejar dentro de nuestras instalaciones será BAJO SU RESPONSABILIDAD.`
        },
        {
          nombre: `Después de 45 días NO nos responsabilizamos por las reparaciones o sillas no recogidas así como daños en las mismas por almacenamiento.`
        },
        {
          nombre: `Las reparaciones están sujetas a disponibilidad del personal, así como de la materia prima, por lo tanto en la mayoría de los casos no se podrá entregar el mismo día. `
        }
      ]
    }
  ])
  return {
    data,
    terminos
  }
})
