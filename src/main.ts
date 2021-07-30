import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"

import "virtual:windi.css"
import "./assets/fonts/index.css"

createApp(App).use(router).mount("#app")
