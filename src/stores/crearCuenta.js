import { defineStore } from 'pinia'
import { useNotification } from '@kyvg/vue3-notification'
import CrearCuentaApi from '../api/CrearCuentaApi'

export const useCrearCuentaStore = defineStore('crearCuenta', () => {
  const { notify } = useNotification()

  const enviar = async (items) => {
    items.isUsuario = true
    items.isActivo = true
    if (Object.values(items).includes('')) {
      notify({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        type: 'error'
      })
    } else {
      await CrearCuentaApi.createUser(items)
        .then((result) => {
          // router.push('/login')
          notify({
            title: 'Exito',
            text: 'Cuenta creada con exito, inicia sesion',
            type: 'success'
          })
        })
        .catch((err) => {})
      return { success: true }
    }
  }
  return { enviar }
})
