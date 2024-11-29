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
    </v-row>
  </v-card-title>

  <!-- Área de mensajes -->
  <v-card-text>
    <div>
      <!-- v-for="(message, index) in messages"
      :key="index"
      :class="{ 'text-right': message.from === 'me' }" -->
      <v-chip class="mb-2" pill>
        <!-- :color="message.from === 'me' ? 'primary' : 'grey lighten-2'"  -->
        <span>prueba</span>
      </v-chip>
    </div>
  </v-card-text>

  <!-- Entrada de mensaje -->
  <v-card-actions>
    <v-text-field
      v-model="newMessage"
      label="Escribe tu mensaje"
      solo
      hide-details
    ></v-text-field>
    <!--@keyup.enter="sendMessage"  -->
    <v-btn color="primary">Enviar</v-btn>
    <!-- @click="sendMessage" -->
  </v-card-actions>
</v-card>
