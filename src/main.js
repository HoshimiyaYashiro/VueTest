/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import './js/vee-validate-extend';
import _ from 'lodash';
import auth from './js/auth';
import App from './App.vue';
import TableComponent from './components/Table.vue';
import FormComponent from './components/Form.vue';
import LoginComponent from './components/Login.vue';

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

const routes = [
  { path: '/table', component: TableComponent, beforeEnter: requireAuth },
  { path: '/form', component: FormComponent, beforeEnter: requireAuth },
  { path: '/login', component: LoginComponent },
  {
    path: '/logout',
    beforeEnter(to, from, next) {
      auth.logout();
      next('/');
    }
  }
];
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
});
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
router.replace({ path: '/login', redirect: '/' });