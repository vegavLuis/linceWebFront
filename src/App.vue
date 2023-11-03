<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from './stores/app'
const useStore = useAppStore()
import logo from '@/assets/logo.jpg'
</script>
<template>
  <VLayout>
    <v-app-bar elevation="0" scroll-behavior="hide">
      <v-spacer></v-spacer>
      <v-avatar rounded="0" size="80">
        <img :src="logo" class="imagen" />
      </v-avatar>
      <v-spacer></v-spacer>
      <template v-for="item in useStore.barra" :key="item.id">
        <v-menu>
          <template v-slot:activator="{ props }">
            <div class="barra">
              <v-btn variant="text" v-bind="props"> {{ item.nombre }} </v-btn>
            </div>
          </template>
          <v-list>
            <v-list-item v-for="itemHijos in item.hijos" :key="itemHijos.id">
              <v-list-item-title>{{ itemHijos.nombre }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </VLayout>
</template>

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
