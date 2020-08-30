import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './quasar';
import './styles/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
  router
}).$mount('#app');
