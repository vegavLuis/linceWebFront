<script setup>
import SvgIcon from '@jamescoyle/vue-icon'

import { ref, onMounted } from 'vue'
import { socket } from '../socket.js'
import { mdiMessageReply } from '@mdi/js'

const newMessage = ref('')
const showChat = ref(false) // Controla la visibilidad del chat
const isOutsideHours = ref(false) // Controla si estamos fuera del horario de atención
const messages = ref([])

// Función para mostrar el chat
const mostrarChat = () => {
  showChat.value = !showChat.value
}

// Función para enviar el mensaje
const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push()
    socket.emit('mensaje-cliente', {
      id: socket.id,
      msg: newMessage.value,
      para: '66ebbcca6eccd988d2b112bf'
    })
    newMessage.value = '' // Limpiar el campo de texto
  }
}

// Función para verificar si estamos dentro del horario
const checkBusinessHours = () => {
  const now = new Date()
  const hour = now.getUTCHours() - 6 // Ajustamos la hora a UTC-6 (hora de la Ciudad de México)

  // Verificamos si la hora está entre las 8 AM y las 7 PM
  if (hour >= 8 && hour < 19) {
    isOutsideHours.value = false
  } else {
    isOutsideHours.value = true
  }
}

socket.on('mensaje-para-cliente', (data) => {
  messages.value.push(data)
})

onMounted(() => {
  checkBusinessHours()
})
</script>

<template>
  <v-fab class="ms-4" absolute offset size="large" @click="mostrarChat">
    <svg-icon type="mdi" :path="mdiMessageReply" color="white"></svg-icon>
  </v-fab>

  <!-- Chat flotante -->
  <v-card v-if="showChat" class="chat-card" width="300px" height="500px" elevation="10">
    <v-card-title>
      <v-row class="d-flex align-center">
        <v-col class="d-flex" cols="auto">
          <!-- <v-avatar size="36">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" />
          </v-avatar> -->
          <span class="ml-2">Chat de Soporte</span>
        </v-col>
        <span
          class="mesaje-importante-horario text-medium-emphasis text-caption"
          v-if="isOutsideHours"
        >
          "El horario de atención a clientes es de lunes a viernes, de 8:00 AM a 7:00 PM (hora del
          Centro de la Ciudad de México). Por favor, intenta contactarnos dentro de este horario.
          ¡Gracias por tu comprensión!"
        </span>
      </v-row>
    </v-card-title>

    <!-- Área de mensajes -->
    <v-card-text>
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="{ 'text-right': message.para !== 'servidor' }"
      >
        <v-chip
          class="mb-2 mesaje-importante"
          pill
          :color="message.para == 'servidor' ? 'primary' : 'grey lighten-2'"
          style="
            white-space: normal;
            word-wrap: break-word;
            word-break: break-word;
            min-width: 0;
            max-width: 100%;
            display: inline-block;
            overflow-wrap: break-word;
            width: 100%;
          "
        >
          <span>{{ message.msg }}</span>
        </v-chip>
      </div>
    </v-card-text>

    <!-- Entrada de mensaje -->
    <v-card-actions class="actions-container" style="margin-top: auto">
      <v-text-field
        v-model="newMessage"
        label="Escribe tu mensaje"
        solo
        hide-details
        :disabled="isOutsideHours"
      ></v-text-field>
      <v-btn color="primary" @click="sendMessage" :disabled="isOutsideHours">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.v-fab {
  position: fixed !important;
  bottom: 40px !important; /* Ajusta este valor para mover el botón hacia arriba o hacia abajo */
  right: 16px !important; /* Ajusta este valor para mover el botón hacia la izquierda o hacia la derecha */
  z-index: 1 !important; /* Asegura que el botón se muestre por encima de otros elementos */
}
.fab-container {
  position: relative !important;
}

/* Estilos para el texto flotante */
.fab-text {
  position: absolute !important;
  bottom: 50px !important; /* Ajusta la distancia entre el texto y el FAB */
  left: 10% !important; /* Centra el texto horizontalmente */
  transform: translateX(-50%) !important; /* Ajusta para centrar perfectamente */
  color: white !important; /* Color del texto */
  font-size: 14px !important; /* Tamaño del texto */
  font-weight: bold !important; /* Estilo del texto */
  z-index: 10 !important; /* Asegura que el texto quede encima del FAB */
}

.chat-card {
  position: fixed !important;
  bottom: 80px !important; /* Ajusta la distancia del chat respecto a la parte inferior de la pantalla */
  right: 20px !important;
  z-index: 9999 !important;
  width: 300px;
  max-height: 500px !important;
  overflow-y: auto !important;
  padding: 10px;
  border-radius: 10px; /* Bordes redondeados para mayor estilo */
}

.mesaje-importante-horario {
  white-space: normal !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
  min-height: auto !important;
  max-width: 100% !important;
  display: inline-block !important;
  overflow-wrap: break-word !important;
  padding: 8px 12px !important; /* Añade espacio alrededor del texto */
}
.mesaje-importante {
  height: auto !important;
  line-height: 1.5 !important;
  padding: 8px 12px !important;
  max-width: 100% !important;
  display: inline-block !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}
.actions-container {
  position: sticky !important;
  bottom: 0 !important;
  background-color: white !important;
}
</style>
