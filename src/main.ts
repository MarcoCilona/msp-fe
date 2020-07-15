import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './quasar';
import './styles/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
