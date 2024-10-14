<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import CrearCuenta from './CrearCuenta.vue'
const store = useAuthStore()
const item = ref({
  email: '',
  password: ''
})
const dialog = ref(false)
onMounted(() => [])
</script>
<template>
  <div class="form">
    <v-card width="55%">
      <v-form @submit.prevent="store.handleSubmit(item)">
        <v-container>
          <h1 class="text-center mb-6 mt-6">Login</h1>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Correo"
                required
                class="mb-6"
                v-model="item.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Contraseña"
                type="password"
                required
                class="mb-6"
                v-model="item.password"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="text-center mt-6 d-flex justify-center">
            No tienes cuenta?
            <span class="ml-2">
              <router-link to="/crear-cuenta"> Crear cuenta </router-link>
            </span>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <router-link to="/olvide-password">Olvide mi contraseña</router-link>
          </p>
          <v-btn block class="mt-6" type="submit">Ingresar</v-btn>
        </v-container>
      </v-form>
    </v-card>

    <v-dialog v-model="dialog" :overlay="true" max-width="50%" transition="dialog-transition">
      <v-card><CrearCuenta /></v-card>
    </v-dialog>
  </div>
</template>
<style scoped>
.form {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 12px;
}
</style>
