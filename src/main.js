/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import './js/vee-validate-extend';
import _ from 'lodash';
import App from './App.vue';
import TableComponent from './components/Table.vue';
import FormComponent from './components/Form.vue';

const routes = [
  { path: '/table', component: TableComponent },
  { path: '/form', component: FormComponent }
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
