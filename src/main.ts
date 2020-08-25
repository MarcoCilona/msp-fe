import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router/index';
import './quasar';
import './styles/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  fallbackLocale: 'en',
  locale: navigator.language,
  silentTranslationWarn: true,
});

const setLocaleMessages = async () => {
  const language = (navigator.language && navigator.language.split('-')[0]) || '';
  try {
    const messages = await import(
      /* webpackChunkName: "lang-[request]" */ `@/localization/${language}.json`
    );
    console.log('language', messages);
    // If the language selected is not english, import english labels as fallbacks
    if (language !== 'it') {
      const en = await import(
        /* webpackChunkName: "lang-[request]" */ '@/localization/en.json'
      );
      i18n.setLocaleMessage('en', en.en);
    }

    i18n.setLocaleMessage(language, messages);
  } catch (e) {
    const en = await import(
      /* webpackChunkName: "lang-[request]" */ '@/localization/en.json'
    );
    i18n.setLocaleMessage('en', en);
  }
};

setLocaleMessages();

new Vue({
  i18n,
  render: (h) => h(App),
  router,
}).$mount('#app');
