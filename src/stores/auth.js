// import { ref } from "vue";
import { defineStore } from 'pinia'
import AuthAPI from '../api/AuthApi.js'
import { useRouter } from 'vue-router'
// import { useNotification } from '@kyvg/vue3-notification'
import { useAuthUserStore } from './authUser.js'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const r = useAuthUserStore()
  //   const { notify } = useNotification()

  const handleSubmit = async (formdata) => {
    try {
      const {
        data: { token }
      } = await AuthAPI.login(formdata)
      localStorage.setItem('AUTH_TOKEN', token)
      r.traerData()
      router.push({ name: 'home' })
    } catch (error) {
      console.log(error.response.data.msg)
      //   notify({
      //     title: 'Error',
      //     text: error.response.data.msg,
      //     type: 'error'
      //   })
    }
  }
  return {
    handleSubmit
  }
})
