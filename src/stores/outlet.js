import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import outletApi from '@/api/outlet.js'

export const useOutletStore = defineStore('outlet', () => {
  const datos = ref([])
  const router = useRouter()
  const traerData = () => {
    outletApi
      .getOutletAll()
      .then(({ data }) => {
        datos.value = data.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  onMounted(() => {
    traerData()
  })
  const abrirProducto = async (item) => {
    router.push('/outlet/' + item)
  }
  return {
    datos,
    abrirProducto
  }
})
