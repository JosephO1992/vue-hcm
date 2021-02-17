import { createApp } from "vue";
import App from "./App.vue";

import NewResource from "./components/NewResource.vue";

const app = createApp(App);

app.component("new-resource", NewResource);

app.mount("#app");
