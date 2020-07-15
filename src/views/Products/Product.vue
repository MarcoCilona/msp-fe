<template lang="pug">
div
  div.product-header
    img.product-image(src='https://cdn.quasar.dev/img/mountains.jpg')
    span.product-header__title {{ product }}
  .content
    .content__left-column
      q-tree(:nodes='productTree', :expanded.sync="expanded", :selected="selected", node-key='label', @update:selected='handleSelected')
    .content__right-column
      h4.mt-0.mb-3 {{ selected }}
      p {{ selectedProductText }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { products, subTrees } from '@/dictionary/index';

@Component
export default class Product extends Vue {
  expanded: string[] = [];
  product: string = '';
  selected: string = '';
  selectedProductText: string = '';
  subcategories: string[] = [];
  productTree: any[] = [];

  mounted() {
    this.product = this.$route.params.name;

    this.selected = this.product;
    this.selectedProductText = products[this.selected];
    this.expanded.push(this.product);
    this.productTree.push(subTrees[this.product]);
  }

  handleSelected($event: string) {
    this.selected = $event;
    this.selectedProductText = products[this.selected];
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;

  &__left-column {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  &__right-column {
    text-align: left;
    width: 70%;
  }
}

.product-header {
  position: relative;

  &__title {
    background-color: #0fb132;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    color: white;
    font-size: 3rem;
    left: 0;
    margin-left: 30%;
    padding-left: 30px;
    position: absolute;
    text-align: left;
    top: 65%;
    width: calc(100vw - 30%);
  }
}

.product-image {
  height: 400px;
  width: 100%;
}
</style>

<style lang="scss">
.q-tree__node--selected .q-tree__node-header-content {
  color: #39811d !important;
}

.q-tree__node-header-content {
  div {
    text-align: left;
  }
}
</style>
