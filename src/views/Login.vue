<script setup></script>
<template>
  <div class="form">
    <v-card width="55%">
      <v-form>
        <v-container>
          <h1 class="text-center mb-6 mt-6">Login</h1>
          <v-row>
            <v-col cols="12">
              <v-text-field variant="outlined" label="Correo" required class="mb-6"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Contraseña"
                required
                class="mb-6"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="text-center mt-6">
            No tienes cuenta?
            <span> <router-link to=""> Contacta con el administrador</router-link></span>
          </p>
          <v-btn block class="mt-6">Ingresar</v-btn>
        </v-container>
      </v-form>
    </v-card>
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
