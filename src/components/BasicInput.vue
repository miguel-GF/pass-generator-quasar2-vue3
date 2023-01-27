<script setup>
import { defineProps, defineEmits, ref, watchEffect } from '../imports/import-vue.js'
const props = defineProps({
  label: {
    type: String,
    default: 'campo'
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: true
  },
  disable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['on-change'])

const value = ref('')

watchEffect(() => {
  emit('on-change', value.value)
})

</script>

<template>
  <q-input dense filled :disable="disable" v-model="value" :type="props.type" :label="label" :placeholder="props.placeholder"
    :rules="props.required === false ? [] : [val => !!val || `El ${props.label} es requerido`]"
  />
</template>
