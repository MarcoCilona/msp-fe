<template lang="pug">
.about
  img(src='').about-image
  p.about-paragraph
    | La
    strong.mh-1 MASPE materiali speciali
    | è stata fondata nel 1974 dall'ing. Giovanni Demurtas per offrire al mercato prodotti di qualità e all’avanguardia che rappresentassero soluzioni tecniche innovative.
  p.mt-3.about-paragraph
    | Il PHILAN®, un poliuretano particolarmente resistente ad usura ed abrasione, il Lofrene, polietilene HD ad alto ed altissimo peso molecolare, i tessuti di vetro teflonati e siliconati sono i prodotti principali trattati dalla MASPE la cui gamma comprende anche policarbonato, metacrilato, gomma di silicone, gomma alimentare, gomma mousse, spray e grasso al silicone, racle per serigrafia, isolanti termici in fibra di vetro, tela e carta bakelite, nastri per avvolgimento cilindri.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
$spacing: 20px;

.about {
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: $spacing;

  &-image {
    height: 250px;
    margin-bottom: $spacing;
    width: 100%;
  }
  &-paragraph {
    text-align: left;
  }
}

@include respond-above(sm) {
  .about {
    &-image {
      float: left;
      margin-bottom: 0px;
      margin-right: $spacing;
      width: 250px;
    }
  }
}
</style>
