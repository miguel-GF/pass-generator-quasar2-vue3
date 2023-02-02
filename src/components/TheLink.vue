<template>
  <div @keypress.enter.prevent="irRuta()">
    <div class="text-primary link-style" @click="handleClick($event)">
      {{ valor || '--' }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheLink',
  props: {
    ruta: {
      type: String,
      default: '/home'
    },
    valor: {
      type: String,
      default: 'hola'
    },
    id: {
      type: String,
      default: 'auibue'
    }
  },
  methods: {
    handleClick (e) {
      console.log(e.ctrlKey)
      if (e.ctrlKey) this.irNuevaPantalla()
      else this.irRuta()
    },
    irRuta () {
      console.log('normal')
      this.$router.push({
        name: 'home',
        params: { id: this.id }
      })
    },
    irNuevaPantalla () {
      console.log('nueva')
      const rutaNueva = this.$router.resolve({
        name: 'home',
        params: { id: this.id }
      })
      window.open(rutaNueva.href, '_blank')
    }
  }
})
</script>
