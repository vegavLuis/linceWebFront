<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '../stores/app.js'
import logo from '@/assets/logo.jpg'
import BotonIniciarSesion from '@/components/BotonIniciarSesion.vue'
const datosBarra = ref([])
onMounted(() => {
  datosBarra.value = useAppStore()
})
// const drawer = ref(true)

// function cerrar() {
//   drawer = ref(false)
// }
// function abrir() {
//   drawer = ref(true)
// }
</script>

<template>
  <v-app-bar elevation="0" scroll-behavior="hide" color="white">
    <div class="contenedor-logo hidden-md-and-up ml-6">
      <router-link to="/">
        <img :src="logo" class="imagen" />
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <div class="contenedor-logo hidden-sm-and-down">
      <router-link to="/">
        <img :src="logo" class="imagen" />
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <template v-for="item in datosBarra.barra" :key="item.id">
      <v-menu>
        <template v-slot:activator="{ props }">
          <div class="barra">
            <v-btn variant="text" v-bind="props" class="hidden-sm-and-down">
              {{ item.nombre }}
            </v-btn>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="itemHijos in item.hijos" :key="itemHijos.id">
            <router-link :to="itemHijos.link" style="text-decoration: none; color: inherit">
              <v-list-item-title>{{ itemHijos.nombre }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <v-list>
      <v-list-item class="pl-0 pr-0">
        <div class="barra">
          <router-link to="/outlet" style="text-decoration: none; color: inherit">
            <v-btn variant="text" class="hidden-sm-and-down ml-0"> Outlet </v-btn>
          </router-link>
        </div>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item class="pl-0">
        <div class="barra">
          <router-link to="/testimonios" style="text-decoration: none; color: inherit">
            <v-btn variant="text" class="hidden-sm-and-down ml-0"> Testimonios </v-btn>
          </router-link>
        </div>
      </v-list-item>
    </v-list>
    <BotonIniciarSesion class="hidden-sm-and-down" />

    <!-- BARRA PEQUEÑA -->
    <v-spacer></v-spacer>
    <v-btn class="mr-6 hidden-md-and-up" @click="abrir" v-if="!drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn class="mr-6 hidden-md-and-up" @click="cerrar()" v-if="drawer">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list
      v-for="item in datosBarra.barra"
      :key="item.id"
      v-model:opened="open"
      open-strategy="single"
      lines="two"
    >
      <v-list-group :value="item.nombre">
        <template #activator="{ props }">
          <v-list-item v-bind="props" rounded="xl" color="primary">
            {{ item.nombre }}
          </v-list-item>
        </template>
        <template v-for="itemHijos in item.hijos" :key="itemHijos.id">
          <v-list-item @click="cerrar()" active-color>
            <router-link :to="itemHijos.link" style="text-decoration: none; color: inherit">
              {{ itemHijos.nombre }}
            </router-link>
            <v-divider></v-divider>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>
    <v-list>
      <v-list-item>
        <router-link to="/outlet" style="text-decoration: none; color: inherit">
          Outlet
        </router-link>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item>
        <router-link to="/testimonios" style="text-decoration: none; color: inherit">
          Testimonios
        </router-link>
      </v-list-item>
    </v-list>
    <BotonIniciarSesion class="ma-4 d-flex justify-center" />
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      open: ['single']
    }
  },
  methods: {
    cerrar() {
      this.drawer = false
    },
    abrir() {
      this.drawer = true
    }
  }
}
</script>
<style>
.contenedor-logo {
  width: auto !important;
  height: 100%;
}
.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.barra {
  border-top: solid 1px red;
  border-bottom: solid 1px red;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
