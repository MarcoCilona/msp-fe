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
    component: Product,
    name: 'Product',
    path: '/product/:name',
  }
];

const router = new VueRouter({
  routes,
});

export default router;
