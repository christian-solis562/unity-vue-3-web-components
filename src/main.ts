import { createApp } from 'vue'
import App from './App.vue'

import * as UnityComponentLib from "unity-component-lib"

createApp(App)
    .use(UnityComponentLib)
    .mount('#app')