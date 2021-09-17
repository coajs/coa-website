import { h } from 'vue'
import { VPTheme } from './vitepress'
import { VTBadge } from './core'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null)
  },
  enhanceApp({ app }) {
    app.component('Badge', VTBadge)
  }
})
