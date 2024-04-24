<script setup>
import { ref, onMounted } from 'vue'
import { useAppQuienesSomos } from '../stores/quienesSomos/app'
const datos = ref([])

onMounted(() => {
  datos.value = useAppQuienesSomos()
})
</script>
<template>
  <v-container>
    <h1 class="text-center titulo pt-6 pb-4">Industrias Lince por Roe-Mex SA de CV</h1>
    <v-divider :thickness="2" color="black" class="border-opacity-100"></v-divider>

    <v-card
      v-for="item in datos.data"
      :key="item.titulo"
      elevation="0"
      class="pt-6 pb-6"
      color="transparent"
    >
      <h2 class="titulo2 pt-4 pb-4">{{ item.titulo }}</h2>
      <v-divider :thickness="1" color="black" class="border-opacity-100"></v-divider>
      <p class="pt-4 parrafo">{{ item.texto }}</p>
    </v-card>
    <div class="pt-8">
      <!-- <v-divider :thickness="1" color="black" class="border-opacity-100"></v-divider> -->
      <p class="pt-4 font-weight-black">
        Productos: Fabricamos de ultra ligera manuales como: La serie Lince, SKY, Akiva, y Shockwave
        (estructura en L). Las deportivas B-Ball como: Impacto, Challenger (ajustable), y 2EZ. Toda
        la serie de sillas LINCE es medida y fabricada por nuestros expertos conocedores en el
        campo.
      </p>
    </div>
  </v-container>
</template>
<style scoped>
.titulo {
  color: #b71c1c;
}
.titulo2 {
  color: #490036;
}
.parrafo {
  line-height: 2.2;
}
</style>
