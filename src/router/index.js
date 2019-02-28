import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
// import NotFound from '@/components/NotFound'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: MainPage,
		},
		// {
		// 	path: '/404',
		// 	component: NotFound
		// },
		// {
		// 	path: '*',
		// 	redirect: '/404'
		// }
	]
})

export default router
