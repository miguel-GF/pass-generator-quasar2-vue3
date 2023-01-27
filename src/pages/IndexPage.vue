<script setup>
import { defineAsyncComponent, ref } from '../imports/import-vue.js'
// Imports de componentes de forma asincrona
const BasicButton = defineAsyncComponent({
  loader: () => import('../components/BasicButton.vue')
})
const BasicInput = defineAsyncComponent({
  loader: () => import('../components/BasicInput.vue')
})

// Variables / data inicial
const inputValue = ref('')
const loading = ref(false)
const showLoading = ref(false)

// Métodos
const irPantalla = () => {
  alert('ir pantalla')
}
const actualizarValor = (val) => {
  inputValue.value = val
}
</script>

<template>
  <q-page class="row justify-center items-center text-center">
    <div class="col-12">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      >
    </div>
    <div class="col-12 row justify-evenly">
      <div class="col-12 col-sm-6 q-mb-xs-md">
        <BasicButton label="Iniciar sesión" @on-click="irPantalla" :loading="loading" :showLoading="showLoading" />
        <BasicInput @on-change="actualizarValor" />
        <div v-text="inputValue"></div>
      </div>
      <div class="col-12 col-sm-6">
        <BasicButton label="Generar password" @on-click="irPantalla" :loading="loading" :showLoading="showLoading" />
      </div>
    </div>
  </q-page>
</template>
