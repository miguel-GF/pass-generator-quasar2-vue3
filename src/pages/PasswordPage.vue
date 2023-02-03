<template>
  <q-page class="row justify-center items-center text-center">
    <div class="row col-12">
      <div class="col-3"></div>
      <div class="col-6">
        <q-list bordered>
          <template v-for="d in datos" :key="d.id">
            <q-item tag="label" v-ripple @click="cambiarPassword(d.id)">
              <q-item-section side >
                {{  d.checked ? 'Si' : 'No' }}
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-left">{{ d.nombre }}</q-item-label>
                <q-item-label caption class="text-left ellipsis-2-lines">
                  {{ d.caracteres.join(', ') }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
          </template>
        </q-list>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row col-12">
      <div class="col-3"></div>
      <div class="col-6">
        <q-slider
          class="q-mt-xl"
          @change="cambiarPassword('')"
          v-model="cantidadLetras"
          color="deep-orange"
          label-always
          markers
          marker-labels
          :min="6"
          :max="16"
        >
          <template v-slot:marker-label-group="scope">
            <div
              v-for="marker in scope.markerList"
              :key="marker.index"
              :class="[ `text-deep-orange-${2 + Math.ceil(marker.value / 2) }`, marker.classes ]"
              :style="marker.style"
              @click="model = marker.value"
            >{{ marker.value }}</div>
          </template>
        </q-slider>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row col-12 text-center justify-center">
      <div class="col-12">
        Password
      </div>
      <div class="col-12">
        {{ password }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, sample } from '../imports/import-vue.js'
// Imports de componentes de forma asincrona
// const BasicButton = defineAsyncComponent({
//   loader: () => import('../components/BasicButton.vue')
// })
const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const caracteresEspeciales = ['@', '$', '%', '&', '(', ')', '|', '?', '#', '-', '_']
const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.flatMap((x) => [
  String.fromCharCode(x),
  String.fromCharCode(x).toLowerCase()
])

// Variables / data inicial
const password = ref('')
const cantidadLetras = ref(8)
const datos = ref([
  {
    id: 0,
    nombre: 'Números',
    checked: false,
    caracteres: [...numeros]
  },
  {
    id: 1,
    nombre: 'Caracteres especiales',
    checked: false,
    caracteres: [...caracteresEspeciales]
  },
  {
    id: 2,
    nombre: 'Letras',
    checked: false,
    caracteres: [...alphabet]
  }
])
const generarPassword = (cantidad = 8, usarNumeros = true, usarCaracteres = true, usarLetras = true) => {
  let conjunto = [], pass = ''
  if (!usarNumeros && !usarCaracteres && !usarLetras) {
    conjunto = conjunto.concat(numeros, caracteresEspeciales, alphabet)
  } else {
    if (usarNumeros) { conjunto = conjunto.concat(numeros) }
    if (usarCaracteres) { conjunto = conjunto.concat(caracteresEspeciales) }
    if (usarLetras) { conjunto = conjunto.concat(alphabet) }
  }
  for (let index = 0; index < cantidad; index++) {
    pass = pass.concat(sample(conjunto))
  }
  password.value = pass
}
const cambiarPassword = async (id = '') => {
  if (id !== '') datos.value[id].checked = !datos.value[id].checked
  generarPassword(cantidadLetras.value, datos.value[0].checked, datos.value[1].checked, datos.value[2].checked)
}
onMounted(() => {
  generarPassword()
})
</script>
