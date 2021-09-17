import { h } from 'vue'
import { VPTheme, VTBadge } from '@vue/theme'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null)
  },
  enhanceApp({ app }) {
    app.component('Badge', VTBadge)
  }
})
