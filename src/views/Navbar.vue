<template lang="pug">
q-toolbar.text-white.position-fixed.shadow-2.navbar
  q-btn.q-mr-sm.navbar-menu-toggle(flat round dense icon="menu")
    q-menu(content-class='side-menu')
      q-list
        template(v-for='(navItem, index) in options')
          q-item(v-if='navItem.value !== "PRODOTTI"', :key='index')
            q-item-section(@click='$router.push({ path: `/${navItem.path}` })') {{ navItem.label }}
          q-expansion-item(
            v-if='navItem.value === "PRODOTTI"',
            :key='index'
            expand-separator
            :label="navItem.label")
            .ph-5.pv-4.sidebar-product(v-for='(product, index) in products' :key='index', @click='$router.push({ path: `/product/${product}` })') {{ product }}
  q-space
  q-btn.menu-items(
    v-for='(navItem, index) in options',
    :key='index',
    flat stretch,
    :label='navItem.label'
    @click='navItem.value !== "PRODOTTI" && $router.push({ path: `/${navItem.path}`})')
      q-menu(
        v-if='navItem.value === "PRODOTTI"'
        transition-show="scale"
        transition-hide="scale")
        q-list(style="min-width: 100px")
          q-item.product-category(v-for='(product, index) in products' :key='index')
            q-item-section(@click='$router.push({ path: `/product/${product}` })') {{ product }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { mainProducts } from '@/dictionary/index';

@Component
export default class Navbar extends Vue {
  model: string = '';
  products: string[] = mainProducts;
  options: any[] = [];

  created() {
    this.options = [
      {
        label: this.$t('NAV_ITEM.HOME'),
        path: '',
        value: 'HOME',
      },
      {
        label: this.$t('NAV_ITEM.ABOUT_US'),
        path: 'azienda',
        value: 'AZIENDA',
      },
      {
        label: this.$t('NAV_ITEM.PRODUCTS'),
        path: 'prodotti',
        value: 'PRODOTTI'
      },
      {
        label: this.$t('NAV_ITEM.USAGES'),
        path: 'applicazioni',
        value: 'APPLICAZIONI'
      },
      {
        label: this.$t('NAV_ITEM.CONTACT_US'),
        path: 'contacts',
        value: 'CONTATTI'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.navbar {
  background-color: #26710f;
  top: 0;
  z-index: 2;
}

.home-page {
  cursor: pointer;
  display: none;
}

.navbar-menu-toggle {
  display: block;
}

.menu-items {
  display: none !important;
}

.sidebar-product {
  background-color: #0fb132;

  &~.sidebar-product {
    border-top: 1px solid #b7b7b7;
  }
}

@include respond-above(sm) {
  .home-page {
    display: block;
  }

  .navbar-menu-toggle {
    display: none;
  }

  .menu-items {
    display: inline-flex !important;
  }

}
</style>

<style lang="scss">
.side-menu {
  background-color: #26710f !important;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  color: white;
  left: 0px !important;
  top: 50px !important;

  .q-item__section {
    padding-left: 5px;
  }
}
</style>
