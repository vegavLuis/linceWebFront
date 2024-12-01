import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import AuthAPI from '../api/AuthApi.js'
import { useRouter } from 'vue-router'

export const useAuthUserStore = defineStore('authUser', () => {
  const user = ref({})
  const roles = ref([])
  const router = useRouter()
  const mostrar = ref(false)
  const nombreCompleto = ref('')

  const traerData = async () => {
    try {
      const { data } = await AuthAPI.auth()
      user.value = data
      data.roles.forEach((element) => {
        roles.value.push(element.descripcion)
      })
      nombreCompleto.value = data.nombre + ' ' + data.apellidoPaterno + ' ' + data.apellidoMaterno
      mostrar.value = true
    } catch (error) {}
  }

  onMounted(() => {
    traerData()
  })

  const cerrarSesion = () => {
    localStorage.removeItem('AUTH_TOKEN')
    user.value = {}
    mostrar.value = false
    router.push({ name: 'home' })
    location.reload()
  }

  const getUserName = computed(() => (user.value?.name ? user.value?.name : ''))

  return {
    cerrarSesion,
    traerData,
    user,
    getUserName,
    roles,
    mostrar,
    nombreCompleto
  }
})
