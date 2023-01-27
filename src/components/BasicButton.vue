<script setup>
import { defineProps, defineEmits, computed, ref, onMounted } from '../imports/import-vue.js'
const props = defineProps({
  label: {
    type: String,
    default: 'Aceptar'
  },
  loading: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'primary'
  },
  showLoading: {
    type: Boolean,
    default: false
  }
})

const btnLoading = ref(false)

const changeLoading = () => {
  btnLoading.value = !btnLoading.value
}

const emit = defineEmits(['on-click'])

const getColor = computed(
  () => {
    switch (props.type) {
      case 'primary':
        return 'primary'
      case 'secondary':
        return 'secondary'

      default: return 'accent'
    }
  }
)

const onClick = () => {
  if (props.showLoading) {
    changeLoading()
  }
  emit('on-click')
}

onMounted(() => {
  btnLoading.value = props.loading
})

</script>

<template>
  <q-btn :loading="btnLoading" :color="getColor" @click="onClick()">
    {{ props.label }}
    <template v-slot:loading>
      <q-spinner-hourglass></q-spinner-hourglass>
    </template>
  </q-btn>
</template>
