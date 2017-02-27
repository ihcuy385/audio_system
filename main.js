import Vue from 'vue'
import App_db from './app_db.vue'
import db from './db.js'

const app = new Vue({
	db,
	render: h => h(App_db)
}).$mount("#app")
