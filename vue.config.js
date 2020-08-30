module.exports = {
  pluginOptions: {
    i18n: {
      enableInSFC: true,
      fallbackLocale: 'en',
      locale: 'it',
      localeDir: 'locales',
    },
    quasar: {
      importStrategy: 'manual',
      rtlSupport: false
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/msp-fe/'
    : '/',
  transpileDependencies: [
    'quasar',
  ],
};
