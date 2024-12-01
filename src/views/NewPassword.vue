<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import AuthApi from '../api/AuthApi'

const route = useRoute()
const router = useRouter()
const { notify } = useNotification()
const { token } = route.params
const validToken = ref(false)
const show1 = ref(false)
const originalRules = ref({
  required: (value) => !!value || 'Este campo es obligatorio.',
  min: (v) => v.length >= 8 || 'Min 8 caracteres'
})
const item = ref({
  password: ''
})

onMounted(async () => {
  try {
    const { data } = await AuthApi.verifyPasswordResetToken(token)
    validToken.value = true
  } catch (error) {
    notify({
      title: 'Error',
      text: error.response.data.msg,
      type: 'error'
    })
  }
})

const enviar = async ({ password }) => {
  try {
    const { data } = await AuthApi.updatePassword(token, { password })
    notify({
      text: data.msg,
      type: 'success'
    })
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 3000)
  } catch (error) {
    notify({
      title: 'Error',
      text: error.response.data.msg,
      type: 'error'
    })
  }
}
</script>
<template>
  <div>
    <div v-if="validToken">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h3 class="font-weight-bold">Nueva contraseña</h3>
          </v-col>
          <v-col cols="7">
            <p>Ingresa la nueva contraseña</p>
            <v-form @submit.prevent="enviar(item)">
              <v-text-field
                class="my-4"
                density="compact"
                variant="outlined"
                v-model="item.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[originalRules.required, originalRules.min]"
                :type="show1 ? 'text' : 'password'"
                hint="Al menos 8 caracteres"
                label="Contraseña"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-btn color="#0D47A1" block type="submit">Guardar contraseña</v-btn>
              <div width="100%" class="d-flex my-12">
                <router-link to="/crear-cuenta">CREAR CUENTA</router-link>
                <v-spacer></v-spacer>
                <router-link to="/login">INICIAR SESION</router-link>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style scoped></style>
