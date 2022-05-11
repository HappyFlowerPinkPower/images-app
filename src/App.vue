<template>
  <div id="app" class="p-5">
    <h2 class="title is-2">Image test</h2>
    <ul class="columns is-multiline is-flex">
      <PlaceholderImage v-for="image, key in currentImages" @eventRemoveFromArray="removeFromArray" :key="key" :src="image.url" :alt="image.title" />
    </ul>
  </div>
</template>

<script>
import PlaceholderImage from './components/PlaceholderImage.vue';

export default {
  components: {
    PlaceholderImage,
  },
  data() {
    return {
      level: 1,
      images: []
    }
  },
  computed: {
    currentImages() {
      return this.images.slice(0, this.level * 40);
    }
  },
  methods: {
    async addItems() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await data.json();
        
        this.images = this.images.concat(json);        
      } catch (err) {
        console.error(err);
      }
    },
    removeFromArray(id) {
      this.images.splice(id, 1);
    }
  },
  created() {
    this.addItems();
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop + window.innerHeight + 500 > document.documentElement.offsetHeight) this.level++;

      if (this.currentImages.length + 960 > this.images.length) this.addItems();
    });
  }
}
</script>

<style>
</style>
