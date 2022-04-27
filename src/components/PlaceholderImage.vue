<template>
  <li @click="destroyImage" class="column is-half is-one-quarter-desktop">
    <img :src="src" :alt="alt" title="Remove square!" />
  </li>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  },
  methods: {    
    destroyImage() {
      this.$emit('eventRemoveFromArray', this.$vnode.key);
    }
  }
}
</script>

<style scoped>
li img {
  cursor: pointer;
}
</style>