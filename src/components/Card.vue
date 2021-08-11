<template>
  <div class="card">
    <img :src="imageUrl" :alt="title">

    <div class="p-2 bg-background-secondary">
      <span class="title text-copy-primary"> {{ title }}</span>
      <p class="text-copy-secondary" :title="description">{{ description }}</p>
      <span class="chip"> {{ length }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { River } from '../services/RiversService';

@Component
export default class Card extends Vue {

  @Prop({ default: ''})
  item!: River;

  get imageUrl() {
    return this.item.image;
  }

  get title() {
    return this.item.title;
  }

  get description() {
    return this.item.description;
  }

  get length() {
    return this.item.length;
  }
}
</script>

<style lang="scss" scoped>
  .card {
    @apply w-96 max-w-sm rounded overflow-hidden shadow-lg mr-3;
    min-width: 24rem;

    & + .card {
      @apply mt-4;
    }

    img {
      @apply w-full h-56 mx-auto rounded;
    }

    .title {
       @apply font-bold text-xl mb-2;
    }

    p {
       @apply overflow-ellipsis whitespace-nowrap overflow-hidden;
    }

    .chip {
      @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-4;
    }
  }
</style>
