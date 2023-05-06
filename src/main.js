import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "./assets/css/style.css";
// import "./assets/css/client.css";
import store from "./store";
import AppModal from "./components/AppModal.vue";
const app = createApp(App);
app.component("AppModal", AppModal);

app.use(store);
app.use(router);
app.mount("#app");
