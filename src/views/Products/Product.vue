<template lang="pug">
div
  div.product-header
    img.product-image(src='@/assets/unnamed.jpg')
    span.product-header__title {{ selected && $t(`PRODUCTS.${selected}.LABEL`) }}
  .content
    .content__left-column
      q-tree(:nodes='productTree', :expanded.sync="expanded", :selected="selected", labelKey='value' node-key='value', @update:selected='handleSelected')
        template(v-slot:default-header="prop") {{ prop.node.value && $t(`PRODUCTS.${prop.node.value}.LABEL`) }}
    .content__right-column(v-if='selected')
      h4.mt-2.mb-3 {{ $t(`PRODUCTS.${selected}.LABEL`) }}
      p.ws-break-spaces(v-html='$t(`PRODUCTS.${selected}.DESCRIPTION`)')
      .ws-break-spaces(v-if='$t(`PRODUCTS.${selected}.ADVANTAGES`)')
        h5.mt-0.mb-2 Vantaggi
        p {{ $t(`PRODUCTS.${selected}.ADVANTAGES`) }}
      .ws-break-spaces(v-if='$t(`PRODUCTS.${selected}.AREA`)')
        h5.mt-0.mb-2 Settori di utilizzo
        p {{ $t(`PRODUCTS.${selected}.AREA`) }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { subTrees } from '@/dictionary/index';

@Component
export default class Product extends Vue {
  expanded: string[] = [];
  product: string = '';
  selected: string = '';
  subcategories: string[] = [];
  productTree: any[] = [];

  mounted() {
    // Saving the category of the product
    this.product = this.$route.params.name;
    // Selected product is retrieved from the url at first iteration
    this.selected = this.product;

    // Expanding the default selected product (variable used by Tree component)
    this.expanded.push(this.product);

    // Building the tree
    this.productTree.push(subTrees[this.product]);
  }

  handleSelected($event: string) {
    if (!$event) return;

    this.selected = $event;
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.content {
  display: flex;
  flex-direction: row;

  &__left-column {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  &__right-column {
    text-align: left;
    width: 55%;
  }
}

.product-header {
  position: relative;

  &__title {
    background-color: #0fb132;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    color: white;
    font-size: 2rem;
    left: 0;
    margin-left: 10%;
    padding-left: 30px;
    position: absolute;
    text-align: left;
    bottom: 18%;
    width: calc(100vw - 10%);
  }
}

.product-image {
  height: 300px;
  width: 100%;
}

@include respond-above(xs) {
  .content {
    &__left-column {
      width: 30%;
    }

    &__right-column {
      width: 70%;
    }
  }

  .product-header {
    &__title {
      font-size: 3rem;
      margin-left: 29%;
      width: calc(100vw - 29%);
    }
}
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
