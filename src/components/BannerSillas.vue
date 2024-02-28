<script setup>
import { ref, onMounted } from 'vue'
import { useBannerSillas } from '../stores/bannerSillas'

defineEmits(['cambiar-vista'])

const data = ref([])

onMounted(() => {
  data.value = useBannerSillas()
})
</script>

<template>
  <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="item in data.datos" :key="item.datos">
      <div class="carousel__item d-flex flex-wrap imagenFondo">
        <img :src="item.fondo" class="imagenFondo filtro" />
        <v-img :src="item.src" class="flex-1-1-100 ma-2 pa-2 imagen-silla" />
        <h2 class="texto nombre-silla">{{ item.nombre }}</h2>
        <h2 class="texto subnombre-silla">{{ item.subnombre }}</h2>
        <v-btn color="primary" class="boton-silla" @click="$emit('cambiar-vista', item.info[0])"
          >Ver mas de {{ item.subnombre }}</v-btn
        >
      </div>
    </Slide>
    <template #addons>
      <div class="ap">
        <Navigation />
      </div>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation
  }
})
</script>
<style scoped>
.imagen-silla {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 20px white);
}
.texto {
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
}
.nombre-silla {
  font-weight: 400;
  top: 20%;
  left: 70%;
  font-size: 70px;
}
.subnombre-silla {
  top: 35%;
  left: 71.4%;
  font-size: 100px;
}

.boton-silla {
  position: absolute;
  top: 55%;
  left: 70%;
  transform: translate(-50%, -50%);
}
.imagenFondo {
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.filtro {
  filter: brightness(40%);
}
</style>
