<script setup>
import { useAppStore } from '../stores/app.js'
import logo from '@/assets/logo.jpg'

const useStore = useAppStore()
// const drawer = ref(true)

// function cerrar() {
//   drawer = ref(false)
// }
// function abrir() {
//   drawer = ref(true)
// }
</script>

<template>
  <v-app-bar elevation="0" scroll-behavior="hide">
    <v-avatar rounded="0" size="80" class="hidden-md-and-up ml-6">
      <img :src="logo" class="imagen" />
    </v-avatar>
    <v-spacer></v-spacer>
    <v-avatar rounded="0" size="80" class="hidden-sm-and-down">
      <img :src="logo" class="imagen" />
    </v-avatar>
    <v-spacer></v-spacer>
    <template v-for="item in useStore.barra" :key="item.id">
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
            <v-list-item-title>{{ itemHijos.nombre }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <!-- BARRA PEQUEÑA -->
    <v-spacer></v-spacer>
    <v-btn class="mr-6 hidden-md-and-up" @click="abrir" v-if="!drawer">
      <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
    </v-btn>
    <v-btn class="mr-6 hidden-md-and-up" @click="cerrar()" v-if="drawer">
      <font-awesome-icon :icon="['fas', 'x']" size="xl" />
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list
      v-for="item in useStore.barra"
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
            {{ itemHijos.nombre }}
            <v-divider></v-divider>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>
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
.imagen {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.barra {
  border-top: solid 1px red;
  border-bottom: solid 1px red;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
