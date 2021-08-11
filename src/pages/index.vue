<template>
  <main class="container wrapper flex-col">
    <h1>Welcome my project</h1>

    <section>
      <Button description="Discover the rivers" @click="handleOpenModal"/>

      <div class="overflow-x-hidden mt-4">
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

  async handleOpenModal() {
    console.log(this.riversSorted);
  };
}
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply flex justify-center items-center text-center mx-auto w-full;

    section {
      @apply mt-8;

      .title {
      }
    }
  }
</style>
