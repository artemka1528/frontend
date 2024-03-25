import { createApp } from 'vue'
import App from './App.vue'
import components from '@/UI'
// import VueLazyLoad from 'vue3-lazyload'
import VueLazyload from 'vue-lazyload'
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app.use(VueLazyload)
app.mount('#app')