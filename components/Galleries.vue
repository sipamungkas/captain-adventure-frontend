<template>
  <div>
    <no-ssr>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <li
        v-for="(gallery, indexGallery) in galleries"
        :key="indexGallery"
        @click="index = indexGallery"
      >
        <img
          :src="$config.baseAPIURL + gallery.image"
          class="gallery-image object-cover w-60 h-60 md:w-full lg:h-80 rounded-xl"
          :alt="gallery.alt"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    galleries: Array,
  },
  data() {
    return {
      index: null,
    }
  },
  computed: {
    urls() {
      return this.galleries.map((item) => item.image)
    },
    images() {
      return this.galleries.map((item) => {
        return {
          title: item.title,
          url: this.$config.baseAPIURL + item.image,
        }
      })
    },
  },
}
</script>

<style>
.gallery-image {
  cursor: pointer;
}
</style>
