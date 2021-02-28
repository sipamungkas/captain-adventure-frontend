<template>
  <div class="price-contents">
    <section class="w-full my-8">
      <Categories :categories="categories" />
    </section>

    <section class="w-full">
      <Browsur />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(`${baseAPIURL}v1/landing-page/categories`)
    const { categories } = res.data

    return { categories }
  },
}
</script>

<style></style>
