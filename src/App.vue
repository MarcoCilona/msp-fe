<template lang="pug">
div(id='app')
  router-view
  Footer.mt-13
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/views/Footer.vue';

@Component(
  {
    components: {
      Footer
    }
  }
)
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
