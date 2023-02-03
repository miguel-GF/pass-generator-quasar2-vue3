<template>
  <q-page class="row justify-center items-center text-center">
    <div class="col-12 row justify-evenly">
      <div class="col-12 row q-mb-xs-md justify-center">
        <div class="q-px-xl q-mx-xl col-8">
          <div class="text-left">Un input y su valor es: {{ inputValue || '' }}</div>
          <BasicInput tabindex="1" @on-change="actualizarValor" />
        </div>
      </div>
      <div class="col-12">
        <BasicButton tabindex="2" @on-click="irPantalla" :loading="loading" :showLoading="showLoading" />
      </div>
      <div class="col-12 row text-center justify-center items-center q-mt-xl">
        <div class="">
          <TheLink tabindex="3" />
        </div>
      </div>
      <BasicButton
        label="Activar loading"
        :loading="loading"
        :showLoading="showLoading"
        @on-click="mostrarLoader"
        tabindex="2"
      />
      <BasicButton
        label="Mostrar notificacion"
        :loading="loading"
        :showLoading="showLoading"
        @on-click="mostrarNotificacion"
        tabindex="2"
      />
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent, ref } from '../imports/import-vue.js'
import { pluginsStore } from '../stores/plugins-store'

// Imports de componentes de forma asyncrona
const BasicButton = defineAsyncComponent({
  loader: () => import('../components/BasicButton.vue')
})
const BasicInput = defineAsyncComponent({
  loader: () => import('../components/BasicInput.vue')
})

const TheLink = defineAsyncComponent({
  loader: () => import('../components/TheLink.vue')
})

const { $loader, $notify } = pluginsStore()

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
const mostrarLoader = () => {
  $loader(true, 'loader genral...')
}
const mostrarNotificacion = () => {
  $notify('notify...')
}
</script>
