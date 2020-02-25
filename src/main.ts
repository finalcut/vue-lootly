import 'reflect-metadata'
import { Vue } from 'vue-property-decorator'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import buildDependencyContainer from '@/app.container'

Vue.config.productionTip = false

class AppBootstrap {
  constructor () {
    this.loadDependencyContainer()
    this.loadVueApp()
  }

  private loadDependencyContainer (): void {
    buildDependencyContainer()
  }

  private loadVueApp (): void {
    Vue.config.productionTip = false

    new Vue({
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
}

const app = new AppBootstrap()
export default app
