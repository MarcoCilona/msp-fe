<template lang="pug">
q-toolbar.text-white.position-fixed.shadow-2.navbar
  i.fas.fa-home.home-page
  q-btn.q-mr-sm.navbar-menu-toggle(flat round dense icon="menu")
    q-menu(content-class='side-menu')
      q-list
        q-item(clickable)
          q-item-section Home
        q-item(clickable)
          q-item-section Azienda
        q-item(clickable)
          q-item-section Prodotti
        q-item(clickable)
          q-item-section Applicazioni
        q-item(clickable)
          q-item-section Contatti
  q-space
  q-btn-toggle.menu-items(
    v-model="model",
    flat stretch,
    toggle-color="yellow",
    :options="options")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  model: string = '';
  options: any[] = [
    {
      label: 'Azienda',
      value: 'AZIENDA'
    },
    {
      label: 'Prodotti',
      value: 'PRODOTTI'
    },
    {
      label: 'Applicazioni',
      value: 'APPLICAZIONI'
    },
    {
      label: 'Contatti',
      value: 'CONTATTI'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.navbar {
  background-color: #26710f;
  top: 0;
  z-index: 1;
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
