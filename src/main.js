import { createApp } from 'vue'
import App from './App.vue'
import './assets/Styles/Styles.scss'
import Dummy from 'dummyjs'

createApp(App).use(Dummy)
createApp(App).mount('#app')
