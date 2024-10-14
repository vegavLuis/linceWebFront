<script setup>
import { ref } from 'vue'
import AuthApi from '../api/AuthApi'
import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

const originalRules = ref({
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Correo no valido.'
  }
})
const item = ref({
  email: ''
})
function limpiar() {
  item.value = {
    email: ''
  }
}
const enviar = async ({ email }) => {
  try {
    const { data } = await AuthApi.forgotPassword({ email })
    console.log(data.msg)
    notify({
      title: 'Enviado',
      text: data.msg,
      type: 'success'
    })
    limpiar()
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
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h3 class="font-weight-bold">Olvide mi contraseña</h3>
        </v-col>
        <v-col cols="7">
          <p>Recupera el accceso a tu cuenta</p>
          <v-form @submit.prevent="enviar(item)">
            <v-text-field
              :rules="[originalRules.email]"
              v-model="item.email"
              variant="outlined"
              label="Correo"
              required
              class="my-4"
            ></v-text-field>
            <v-btn color="#0D47A1" block type="submit">Enviar instrucciones</v-btn>
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
</template>
<style scoped></style>
