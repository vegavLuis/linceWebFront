<script setup>
import imagen from '../assets/prueba2.png'
import imagen2 from '../assets/prueba3.png'
</script>
<template>
  <h1 class="titulo text-center pt-6 pb-4">Uso Diario</h1>
  <v-container>
    <v-divider :thickness="1" class="border-opacity-100" color="black"></v-divider>
    <div>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <v-card elevation="4" class="card">
            <v-img class="align-end text-white" height="400" :src="imagen" fill>
              <v-card-title class="titulo-card">Lince Akiva</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">Uso cotidiano </v-card-subtitle>

            <v-card-text>
              <div>
                Con un gran diseño y sencillez la Lince Akiva se distingue por su marco rígido y
                robusto, que la hace ligera y muy resistente. Es una gran opción para una vida
                activa.
              </div>
            </v-card-text>

            <v-card-actions>
              <!-- <v-btn color="info" variant="">Compartir</v-btn> -->
              <v-btn color="primary" variant="flat"> Explorar </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="4" class="card">
            <v-img class="align-end text-white" height="400" :src="imagen2" fill>
              <v-card-title class="titulo-card">Lince X4</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">Uso cotidiano </v-card-subtitle>

            <v-card-text>
              <div>
                Si nunca antes has usado una silla de ruedas Lince X4 es tu mejor elección, olvídate
                de las clásicas sillas ortopédicas que pesan más de 20 kilogramos. Los rodamientos
                traseros son desmontables, peso total menor a 9 kilogramos. Centro de gravedad
                ajustable: 1 pulg. adelante / 1.5 pulg. atrás.
              </div>
            </v-card-text>

            <v-card-actions>
              <!-- <v-btn color="info" variant="">Compartir</v-btn> -->
              <v-btn color="primary" variant="flat"> Explorar </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style scoped>
.titulo {
  color: #490036;
}
.card {
  height: 100%;
}
.titulo-card {
  color: black;
}
</style>
