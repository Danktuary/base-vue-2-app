import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
	// due to some weird babel/eslint bug with dynamic imports
	// eslint-disable-next-line prefer-template
	return import('@/layouts/' + layout + '.vue')
})

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: RouterLayout,
			children: routes,
		},
	],
})
