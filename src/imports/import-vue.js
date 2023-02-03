import { ref, defineProps, watchEffect, defineEmits, defineComponent, defineAsyncComponent, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { sample } from 'lodash'
import { Loading as LoadingQ, QSpinnerClock as QSpinnerClockQ, Notify as NotifyQ } from 'quasar'

export {
  // VUE
  ref,
  defineProps,
  watchEffect,
  defineEmits,
  defineComponent,
  defineAsyncComponent,
  computed,
  onMounted,
  nextTick,
  // VUE-ROUTER
  useRouter,
  // QUASAR
  LoadingQ,
  QSpinnerClockQ,
  NotifyQ,
  // LODASH
  sample
}
