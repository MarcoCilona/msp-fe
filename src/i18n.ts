import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

const acceptedLocales = ['en', 'it'];

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function isOneOfAcceptedLanguage(): string {
  const browserLanguage = navigator.language.split('-')[0];

  if (acceptedLocales.indexOf(browserLanguage.toLowerCase()) !== -1) return browserLanguage;

  return process.env.VUE_APP_I18N_FALLBACK_LOCALE as string;
}

export default new VueI18n({
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  locale: isOneOfAcceptedLanguage(),
  messages: loadLocaleMessages()
});
