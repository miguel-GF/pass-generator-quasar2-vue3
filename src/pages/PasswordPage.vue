<template>
  <q-page class="row justify-center items-center text-center">
    <div class="row col-12">
      <div class="col-3"></div>
      <div class="col-6">
        <q-list bordered>
          <template v-for="d in datos" :key="d.id">
            <q-item :class="d.checked ? 'bg-teal-1' : ''" tag="label" v-ripple @click="cambiarPassword(d.id)">
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
      <div class="col-12">
        <BasicButton
          label="Copiar password"
          :loading="loading"
          :showLoading="showLoading"
          @on-click="copiarPassword()"
          tabindex="2"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, sample, defineAsyncComponent, copyToClipboardQ } from '../imports/import-vue.js'
import { pluginsStore } from '../stores/plugins-store'
const { $notify } = pluginsStore()
// Imports de componentes de forma asyncrona
const BasicButton = defineAsyncComponent({
  loader: () => import('../components/BasicButton.vue')
})
// Variables / data inicial
const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const caracteresEspeciales = ['@', '$', '%', '&', '(', ')', '|', '?', '#', '-', '_']
const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.flatMap((x) => [
  String.fromCharCode(x),
  String.fromCharCode(x).toLowerCase()
])

const password = ref('')
const cantidadLetras = ref(8)
const datos = ref([
  {
    id: 0,
    nombre: 'N??meros',
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
const loading = ref(false)
const showLoading = ref(false)
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
const copiarPassword = () => {
  copyToClipboardQ(password.value)
    .then(() => {
      $notify('Copiado al portapapeles!')
    })
    .catch(() => {
      $notify('Fallo al copiar en portapapeles!', 'negative')
    })
}
onMounted(() => {
  generarPassword()
})
</script>
