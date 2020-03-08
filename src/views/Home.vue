<template lang="pug">
div
  .column.absolute-top.menu-bar.text-weight-bold.items-end.q-px-md
    .col.text-grey-1.text-h5
      | Menu
  q-carousel(animated, v-model='slide', infinite, autoplay)
    q-carousel-slide(:name='1', img-src='https://cdn.quasar.dev/img/mountains.jpg')
    q-carousel-slide(:name='2', img-src='https://cdn.quasar.dev/img/parallax1.jpg')
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class Home extends Vue {
  slide: number = 1;
}
</script>

<style lang="scss" scoped>
.menu-bar {
  z-index: 1;
}
</style>
