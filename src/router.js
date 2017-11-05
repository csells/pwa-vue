import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
    { path: '*', component: NotFound },
  ],
  mode: 'history'
});
