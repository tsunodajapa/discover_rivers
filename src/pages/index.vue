<template>
  <main
    :class="isDarkTheme ? 'theme-dark' : 'theme-light'"
    class="theme-light wrapper bg-background-primary"
  >
    <h1 class="text-copy-primary">Welcome my project</h1>

    <header class="m-4">
      <Toggle
        id="toggle-theme" :description="toggleDescription" @click="handleChangeTheme"
      />
    </header>

    <section class="container">
      <Button description="Discover the rivers" @click="handleShowRivers"/>

      <div v-if="isShowRivers" class="wrapper">
        <Card v-for="river in riversSorted" :key="river.slug" :item="river"/>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { RiversService, River } from '../services/RiversService';

@Component({
  async asyncData() {
    const rivers = await new RiversService().index();

    return { rivers }
  }
})
export default class Home extends Vue {

  rivers: River[] = [];
  isShowRivers = false;
  isDarkTheme = false;

  get riversSorted() {
    if (!this.rivers || !this.rivers.length) return [];

    const riversWithLengthFormated =
      this.rivers.map(river => ({...river, lengthFormated: +river.length.replace(/(km|,)/g, '')}));

    return riversWithLengthFormated.sort((a, b) => {
      if (a.lengthFormated > b.lengthFormated) return -1;
      if (a.lengthFormated < b.lengthFormated) return 1;
      return 0;
    });
  };

  get toggleDescription() {
    return this.isDarkTheme ? 'Dark Theme' : 'Light Theme';
  }

  async handleShowRivers() {
    this.isShowRivers = true;
  };

  handleChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply flex justify-center items-center text-center mx-auto w-full min-h-screen flex-col pt-4;

    section {
      @apply mt-8;

      .title {
      }
    }
  }
</style>
