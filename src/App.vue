<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import BarraNavegacion from './components/BarraNavegacion.vue'
import Footer from './components/Footer.vue'
import { useRedesSociales } from './stores/redesSociales'
const expand = ref(false)
const datos = ref([])
onMounted(() => {
  datos.value = useRedesSociales()
})
</script>
<template>
  <!-- <v-btn
    position="fixed"
    class="boton ma-4"
    location="bottom right"
    elevation="4"
    icon="mdi-plus"
    @click="expand = !expand"
  >
  </v-btn> -->
  <v-expand-transition position="fixed" location="bottom right" class="card-botones">
    <v-card
      v-show="expand"
      height="auto"
      width="auto"
      class="mr-4"
      color="transparent"
      elevation="0"
    >
      <div v-for="item in datos.data">
        <v-btn
          class="mb-4 mr-0"
          :icon="item.icon"
          :href="item.to"
          target="_blank"
          :color="item.color"
        >
        </v-btn>
      </div>
    </v-card>
  </v-expand-transition>
  <VLayout>
    <BarraNavegacion />
    <v-main>
      <RouterView />
    </v-main>
  </VLayout>
  <VLayout>
    <Footer />
  </VLayout>
</template>

<style scoped>
.boton {
  z-index: 1;
}
.card-botones {
  z-index: 1;
  margin-bottom: 70px;
}
</style>
