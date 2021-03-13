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
  name: 'PricePage',
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(`${baseAPIURL}v1/landing-page/categories`)
    const { categories, seo } = res.data

    const desc = seo.filter((item) => item.key === 'description')[0]

    return { categories, desc }
  },
  head() {
    return {
      title: 'Price | Captain Adventure',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.desc.value,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.desc.value,
        },
      ],
    }
  },
}
</script>

<style></style>
