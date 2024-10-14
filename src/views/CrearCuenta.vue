<script setup>
import { ref } from 'vue'
import { useCrearCuentaStore } from '../stores/crearCuenta.js'
import { useRouter } from 'vue-router'

const storeCuenta = useCrearCuentaStore()
const router = useRouter()

const items = ref({
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  telefono: '',
  email: '',
  password: '',
  isUsuario: '',
  edad: '',
  peso: '',
  estatura: '',
  calle: '',
  colonia: '',
  numeroExteriror: '',
  numeroInterior: '',
  municipioDelegacion: '',
  estado: '',
  codigoPostal: '',
  discapacidad: '',
  tallaPantalon: '',
  otrInformacion: ''
})
const originalRules = {
  required: (value) => !!value || 'Este campo es obligatorio.',
  min: (v) => v.length >= 8 || 'Min 8 caracteres',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Correo no valido.'
  }
}

const rules = ref({ ...originalRules })

const limpiar = () => {
  items.value = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    email: '',
    password: '',
    isUsuario: '',
    edad: '',
    peso: '',
    estatura: '',
    calle: '',
    colonia: '',
    numeroExteriror: '',
    numeroInterior: '',
    municipioDelegacion: '',
    estado: '',
    codigoPostal: '',
    discapacidad: '',
    tallaPantalon: '',
    otrInformacion: ''
  }
  rules.value = { ...originalRules }
}

const handleSubmit = async (items) => {
  // Asegúrate de que enviar devuelva un objeto con una propiedad `success`
  const result = await storeCuenta.enviar(items)
  if (result.success) {
    limpiar()
    router.push({
      name: 'vistaMensaje',
      query: {
        mensaje:
          'Para completar tu registro, necesitamos que valides tu dirección de correo electrónico.'
      }
    })
  }
}
const show1 = ref(false)
</script>
<template>
  <div class="d-flex justify-center">
    <v-card max-width="50%" class="py-8 px-8" elevation="4">
      <h4 class="my-4 font-weight-bold">Registrate</h4>
      <v-form @submit.prevent="handleSubmit(items)">
        <v-row>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Nombre"
              v-model="items.nombre"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Apellido Paterno"
              v-model="items.apellidoPaterno"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Apellido Materno"
              v-model="items.apellidoMaterno"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Telefono"
              v-model="items.telefono"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.email]"
              density="compact"
              variant="outlined"
              clearable
              label="Correo"
              v-model="items.email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              density="compact"
              variant="outlined"
              v-model="items.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              hint="Al menos 8 caracteres"
              label="Contraseña"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Edad"
              v-model="items.edad"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Peso"
              v-model="items.peso"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Estatura"
              v-model="items.estatura"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Calle"
              v-model="items.calle"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Colonia"
              v-model="items.colonia"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Numero Exterior"
              v-model="items.numeroExteriror"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Numero Interior"
              v-model="items.numeroInterior"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Codigo Postal"
              v-model="items.codigoPostal"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Municipio"
              v-model="items.municipioDelegacion"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Estado"
              v-model="items.estado"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Discapacidad"
              v-model="items.discapacidad"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              type="Number"
              density="compact"
              variant="outlined"
              clearable
              label="Talla de pantalon"
              v-model="items.tallaPantalon"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required]"
              density="compact"
              variant="outlined"
              clearable
              label="Otra informacion"
              v-model="items.otrInformacion"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-btn color="success" block type="submit" class="text-capitalize">Crear cuenta</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>
<style scoped></style>
