<template lang="pug">
.footer
  .column.footer__company
    span.footer--is-title.footer__company__name Maspe
    span.footer__company__catchphrase Qualità e innovazione
    span P.I. 1111111111
  .column.footer__navigator
    span.footer--is-title.footer__navigator__title Esplora
    .footer__navigator__links
      .footer__navigator__links__row
        span.cursor-pointer(@click='$router.push({ path: `/azienda` })') Chi siamo
        span.cursor-pointer(@click='$router.push({ path: `/product/TESSUTI` })') Prodotti
      .footer__navigator__links__row
        span.cursor-pointer(@click='$router.push({ path: `/contacts` })') Contatti
  .column.footer__company-info
    span.footer--is-title.footer__company-info__title Info
    .footer__company-info__row
      .footer__company-info__row__address.column
        span Via Gorizia, 42
        span 21047 Saronno, (VA), Italia
      .footer__company-info__row__contacts.column
        span Tel. 02 960 6855
        span
          a(href="mailto: email@email.com") email@email.com
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.column {
  display: flex;
  flex-direction: column;
}

.footer {
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 20px 15px;
  width: 100%;

  &--is-title {
    color: #0fb132;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__company {
    text-align: left;
    width: 50%;

    &__name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  &__company-info {
    margin-top: 30px;
    text-align: left;
    width: 100%;

    &__row {
      display: flex;
      flex-direction: row;
      max-height: 41px;

      &__address {
        height: 100%;
        width: 50%;
      }

      &__contacts {
        height: 100%;
        width: 50%;
        a {
          color: #ffffff;
        }
      }
    }
  }

  &__navigator {
    text-align: left;
    width: 50%;

    &__links {
      &__row {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@include respond-above(lg) {
  .footer {
    &__company {
      width: 33%;
    }

    &__company-info {
      margin-top: 0px;
      padding-left: 50px;
      width: 33%
    }

    &__navigator {
      padding-left: 20px;
      width: 33%;
    }
  }
}
</style>
