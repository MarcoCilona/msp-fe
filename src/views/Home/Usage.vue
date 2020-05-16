<template lang="pug">
.usage
  .usage__title Applicazioni
  .usage__subtitle.mt-3 I nostri prodotti possono essere utilizzati in diversi ambiti. Tra questi, i principali sono:
  .usage__content.mt-10
    .usage__content__application(v-for='(usage, index) in usages', :key='index', :class='{ "mt-10": index > 1 }')
      .usage__content__application__icon
        i(:class='usage.icon')
      .usage__content__application__info.ml-5
        .usage__content__application__info__title {{ usage.title }}
        .usage__content__application__info__description {{ usage.description }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Usage extends Vue {
  usages: any[] = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-mortar-pestle',
      title: 'Lorem ipsum'
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-car',
      title: 'Lorem ipsum'
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-industry',
      title: 'Lorem ipsum'
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-briefcase',
      title: 'Lorem ipsum'
    }
  ]
}
</script>

<style lang="scss" scoped>
.usage {
  margin: 0 15px;

  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;

    &__application {
      display: flex;
      flex-direction: row;
      text-align: left;
      width: 50%;

      &__info {
        &__description {
          color: rgb(145, 145, 145);
        }

        &__title {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
    &__application__icon {
      align-items: center;
      background-color: green;
      border-radius: 50%;
      color: white;
      display: flex;
      height: 40px;
      justify-content: center;
      padding: 10px;
      width: 40px;
    }
  }

  &__subtitle {
    color: rgb(145, 145, 145);
    font-size: 1.3rem;
    text-align: center;
  }

  &__title {
    color: #0fb132;
    font-size: 3rem;
    text-align: center;
  }

}
</style>
