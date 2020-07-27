import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Products/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
  {
    component: () => import(/* webpackChunkName: "contacts" */ '@/views/About/About.vue'),
    name: 'About',
    path: '/azienda'
  },
  {
    component: () => import(/* webpackChunkName: "contacts" */ '@/views/Contacts/ContactPage.vue'),
    name: 'Contacts',
    path: '/contacts'
  },
  {
    component: Product,
    name: 'Product',
    path: '/product/:name',
  }
];

const router = new VueRouter({
  routes,
});

export default router;
