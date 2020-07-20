/* eslint-disable sort-keys */
import Vue from 'vue';

import './styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';

import '@quasar/extras/material-icons/material-icons.css';
import {
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QTree,
  QSpace,
  QBtnToggle,
  QMenu,
  QExpansionItem
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QTree,
    QSpace,
    QBtnToggle,
    QMenu,
    QExpansionItem
  },
  directives: {
  },
  plugins: {
  },
});
