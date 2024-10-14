<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

import AuthApi from '../api/AuthApi'

const route = useRoute()
const router = useRouter()

const { token } = route.params

onMounted(async () => {
  try {
    const { data } = await AuthApi.verificarCuenta(token)
    notify({
      title: 'Exito',
      text: data,
      type: 'success'
    })
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 5000)
  } catch (error) {
    notify({
      title: 'Error',
      text: error.response.data.msg,
      type: 'error'
    })
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 5000)
  }
})
</script>
<template>
  <div>
    <h3>Verificar cuenta</h3>
  </div>
</template>
<style></style>
