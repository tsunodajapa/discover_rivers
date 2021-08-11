<template>
  <label :for="id" class="toggle">
    <div class="relative">
      <input :id="id" type="checkbox" class="sr-only" @change="handleToggle" />

      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"/>

      <div class="circle"/>
    </div>

    <div class="ml-3 text-copy-primary font-medium">
      {{ description }}
    </div>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Toggle extends Vue {

  @Prop({ default: ''})
  id!: String;

  @Prop({ default: ''})
  description!: String;

  handleToggle() {
    this.$emit('click');
  };



}
</script>

<style lang="scss" scoped>
  .toggle {
    @apply flex items-center cursor-pointer;

    .circle {
      @apply absolute w-6 h-6 bg-copy-primary rounded-full shadow -left-1 -top-1 transition;
    }
  }

  input:checked ~ .circle {
    transform: translateX(100%);
  }
</style>
