<template>
  <button class="button" type="button" @click="emitClick">
   {{ description }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Button extends Vue {

  @Prop({ default: ''})
  description!: String;

  emitClick() {
    this.$emit('click');
  };

}
</script>

<style lang="scss" scoped>
  .button {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;

    &:hover {
      @apply bg-blue-700
    }
  }
</style>
