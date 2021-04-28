import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Resource from "./components/Resource.vue";
import NewResource from "./components/NewResource.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/addresource",
			redirect: NewResource,
		},
		{
			path: "/resources",
			redirect: Resource,
		},
	],
});

const app = createApp(App);

app.use(router);

app.component("new-resource", NewResource);

app.mount("#app");
