import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import outletApi from '@/api/outlet.js'
import { socket } from '../socket.js'

export const useOutletStore = defineStore('outlet', () => {
  const datos = ref([])
  const router = useRouter()
  const traerData = () => {
    outletApi
      .getOutletAll()
      .then(({ data }) => {
        datos.value = data.data
      })
      .catch((err) => {})
  }
  onMounted(() => {
    traerData()
    socket.on('outlet', () => {
      traerData()
    })
  })
  const abrirProducto = async (item) => {
    router.push('/outlet/' + item)
  }
  return {
    datos,
    abrirProducto
  }
})
