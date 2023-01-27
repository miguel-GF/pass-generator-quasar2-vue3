import { boot } from 'quasar/wrappers'
import { componentsStore } from '../stores/components-store'

const cStore = componentsStore()
const { $loader, $notify } = cStore

export default boot(({ app }) => {
  app.config.globalProperties.$loader = $loader
  app.config.globalProperties.$notify = $notify
})
