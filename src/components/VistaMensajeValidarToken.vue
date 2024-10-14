<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const mensaje = route.query.mensaje
</script>
<template>
  <div>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h3 class="font-weight-bold">
            {{ mensaje }}
          </h3>
        </v-col>
        <span>
          <p class="my-2">
            Hemos enviado un enlace de verificación a tu correo. Por favor, sigue estos pasos:
          </p>
          <p class="my-2">
            <span class="font-weight-bold">1. &nbsp &nbsp &nbsp</span>Abre tu bandeja de entrada y
            busca un correo de nosotros con el asunto "Verificación de Correo".
          </p>
          <p class="my-2">
            <span class="font-weight-bold">2. &nbsp &nbsp &nbsp</span> Haz clic en el enlace de
            verificación que encontrarás en el correo. Si no ves el correo, revisa también la
            carpeta de spam o correo no deseado.
          </p>
          <p class="my-2">
            <span class="font-weight-bold">3. &nbsp &nbsp &nbsp</span>Si no recibiste el correo,
            puedes solicitar que te lo enviemos nuevamente.
          </p>
          <p class="my-2">¡Gracias por unirte a nosotros!</p>
        </span>
      </v-row>
    </v-container>
  </div>
</template>
