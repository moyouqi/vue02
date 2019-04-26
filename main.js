import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Head from './components/Head.vue'
import News from './components/News.vue'
import Main from './components/Main.vue'
import Deails from './components/Deails.vue'

Vue.component('my-home', Head) 
const routes = [
 
	{path:'/mian',name:'main',component:Main},
	{path:'/news',name:'news',component:News},
	{path:'/deails/id',name:'deails', component:Deails}

]

const router = new VueRouter({
	routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
