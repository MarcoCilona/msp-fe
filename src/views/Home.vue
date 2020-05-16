<template lang="pug">
div
  .home-page-carousel
    .column.absolute-top.menu-bar.text-weight-bold.items-end.q-px-md
      .col.text-grey-1.text-h5
        | Menu
    .home-page-carousel__catchphrase
      .home-page-carousel__catchphrase__header
        span.home-page-carousel__catchphrase__header__title Maspe
        span.home-page-carousel__catchphrase__header__subtitle Qualità e innovazione
    q-carousel(animated, v-model='slide', infinite, autoplay)
      q-carousel-slide(:name='1', img-src='https://cdn.quasar.dev/img/mountains.jpg')
      q-carousel-slide(:name='2', img-src='https://cdn.quasar.dev/img/parallax1.jpg')
  .sections-shortcuts
    .sections-shortcuts__shortcut(v-for='(shortcut, index) in shorcutsList', :key='index')
      img(src='')
      h5 {{ shortcut }}
      p.sections-shortcuts__shortcut__description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.
  Usage.mt-20
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Usage from '@/views/Home/Usage.vue';

@Component({
  components: {
    Usage
  }
})
export default class Home extends Vue {
  shorcutsList: string[] = ['Tessuti', 'Poliuretano', 'Gomme e materiali isolanti diversi', 'Materia plastiche'];
  slide: number = 1;
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.home-page-carousel {
  position: relative;

  &__catchphrase {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-left: 14%;
    margin-bottom: 40px;
    position: absolute;
    width: -webkit-fill-available;
    z-index: 1;

    &__header {
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      &__title,
      &__subtitle {
        color: #ffffff;
      }

      &__title  {
        font-size: 4rem;
      }

      &__subtitle {
        width: 100%;
        text-align: left;
        background-color: #0fb132;
        font-size: 2rem;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        padding-left: 10px;
        margin-top: 5px;
      }
    }
  }
}

.menu-bar {
  z-index: 1;
}

.sections-shortcuts {
  padding: 0 10px;
  position: relative;
  top: -50px;

  &__shortcut {
    background-color: #ffffff;
    box-shadow: 0px 10px 25px rgba(206, 206, 206, 0.5);
    cursor: pointer;
    height: fit-content;
    margin: 20px 0;
    padding: 10px;
    position: relative;
    width: 100%;

    &__description {
      margin-top: 20px;
      word-break: break-word;
    }

    h5 {
      margin-bottom: 0px;
      word-break: break-word;
    }

    img {
      height: 160px;
      width: 100%;
    }
  }
}

@include respond-above(xs) {
  .home-page-carousel {
    &__catchphrase {
      &__header {
        &__subtitle {
          font-size: 3rem;
        }
      }
    }
  }
}

@include respond-above(sm) {
  .sections-shortcuts {
    display: inline-flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;

    &__shortcut {
      margin: 0 10px;
      width: 25%;
      }
  }
}

@include respond-above(md) {
  .sections-shortcuts {
    &__shortcut {
      margin: 0 15px;
    }
  }
}
</style>
