<script setup>
import Componente from '../components/Componente.vue'
import Comunidad from '../components/Comunidad.vue'
import BannerSillas from '../components/BannerSillas.vue'
import Testimonios from '../components/Testimonios.vue'
</script>

<template>
  <div class="contenedor">
    <h2 class="titulo">Mas que una silla, un estilo de vida</h2>
  </div>
  <v-container>
    <Componente />
  </v-container>
  <Comunidad />
  <BannerSillas />
  <Testimonios />
</template>
<style scoped>
.contenedor {
  width: 100vw;
  height: 100px;
  object-fit: none;
  object-position: right;
  background-repeat: repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/imagenFondoHome.webp');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.titulo {
  color: white;
}
</style>
