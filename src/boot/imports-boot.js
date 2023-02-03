import { boot } from 'quasar/wrappers'
import { pluginsStore } from '../stores/plugins-store'

const cStore = pluginsStore()
const { $loader, $notify } = cStore

export default boot(({ app }) => {
  app.config.globalProperties.$loader = $loader
  app.config.globalProperties.$notify = $notify
})
