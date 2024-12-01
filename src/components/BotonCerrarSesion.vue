<script setup>
import { useAuthUserStore } from '../stores/authUser.js'
import { mdiLogout } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const store = useAuthUserStore()
</script>
<template>
  <div>
    <v-btn size="small" color="red" @click="store.cerrarSesion">
      <svg-icon type="mdi" :path="mdiLogout" color="red" class="hidden-sm-and-down"></svg-icon>
      <p class="text-capitalize hidden-sm-and-up">Cerrar Session</p>
    </v-btn>
  </div>
</template>
<style scoped></style>
