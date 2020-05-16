<template lang="pug">
.usage
  .usage__title Applicazioni
  .usage__subtitle.mt-3 I nostri prodotti possono essere utilizzati in diversi ambiti. Tra questi, i principali sono:
  .usage__content.mt-10
    .usage__content__application(v-for='(usage, index) in usages', :key='index')
      .usage__content__application__icon
        i(:class='usage.icon')
      .usage__content__application__info
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
@import '@/styles/mixins.scss';

.usage {
  margin: 0 15px;

  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;

    &__application {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
      width: 100%;

      &:nth-child(even) {
        flex-flow: row-reverse;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &__info {
        margin: 0 10px;
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

@include respond-above(sm) {
  .usage {
    &__content {
      &__application {
        justify-content: flex-start;
        width: 50%;

        &:nth-child(even) {
          flex-flow: row;
          padding-left: 10px;
        }
      }
    }
  }
}

@include respond-above(lg) {
  .usage {
    &__content {
      &__application {
        justify-content: flex-start;
        width: 33%;

        &:nth-child(even) {
          padding: 0px;
        }

        &:nth-child(3n + 2) {
          justify-content: center;
          padding: 0 10px;
        }

        &:nth-child(3n + 0) {
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
