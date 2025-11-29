import { createApp } from 'vue'
import App from './App.vue'
import languages from './lang/index.js'
import router from './routes/index.js'

const appTitle = import.meta.env.VITE_APP_TITLE || 'BAN MAKARA';
document.title = appTitle;

const app = createApp(App)
app.use(languages)
app.use(router)
app.mount('#app')
