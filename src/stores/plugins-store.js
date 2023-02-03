import { LoadingQ, QSpinnerClockQ, NotifyQ } from '../imports/import-vue.js'
import { defineStore } from 'pinia'

const $loader = (show, message) => {
  show
    ? LoadingQ.show({
      delay: 0,
      spinner: QSpinnerClockQ,
      message
    })
    : LoadingQ.hide()
}

const $notify = (message, color) => {
  NotifyQ.create({
    progress: true,
    position: 'bottom-right',
    message: message || 'Esto es una notificación del sistema',
    color: color || 'info',
    timeout: 4000,
    actions: [
      {
        icon: 'close',
        color: 'white',
        'aria-label': 'Dismiss'
      }
    ]
  })
}

export const pluginsStore = defineStore('cs', () => {
  return {
    $loader,
    $notify
  }
})
