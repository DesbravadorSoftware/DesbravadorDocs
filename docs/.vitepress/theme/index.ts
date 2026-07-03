import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'
import HomeTable from './HomeTable.vue'
import PrintLayout from './PrintLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('HomeTable', HomeTable)
    app.component('PrintLayout', PrintLayout)
  },
}
