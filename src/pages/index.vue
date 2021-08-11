<template>
  <div>
    Teste
    <button @click="handleOpenModal">Teste</button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator';
import { RiversService, River } from '../services/RiversService';

@Component({
  async asyncData() {
    const rivers = await new RiversService().index();

    return { rivers }
  }
})
export default class Home extends Vue{

  rivers: River[] = [];

  get riversSorted() {
    if (!this.rivers || !this.rivers.length) return [];

    const riversWithLengthFormated =
      this.rivers.map(river => ({...river, length: +river.length.replace(/(km|,)/g, '')}));

    return riversWithLengthFormated.sort((a, b) => {
      if (a.length > b.length) return -1;
      if (a.length < b.length) return 1;
      return 0;
    });
  };

  async handleOpenModal() {
    console.log(this.riversSorted);
  };

}
</script>
