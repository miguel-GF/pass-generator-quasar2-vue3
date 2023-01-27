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
    <div class="col-12 row justify-evenly">
      <div class="col-12 row q-mb-xs-md justify-center">
        <div class="q-px-xl q-mx-xl col-8">
          <div class="text-left">Un input y su valor es: {{ inputValue || '' }}</div>
          <BasicInput @on-change="actualizarValor" />
        </div>
      </div>
      <div class="col-12">
        <BasicButton @on-click="irPantalla" :loading="loading" :showLoading="showLoading" />
      </div>
    </div>
  </q-page>
</template>
