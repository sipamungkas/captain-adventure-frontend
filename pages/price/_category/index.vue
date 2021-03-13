<template>
  <div class="category-contents">
    <section class="w-full my-8">
      <Packets :packets="packets" />
    </section>

    <section class="w-full">
      <Browsur />
    </section>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/categories/${params.category}`
    )
    const { packets, seo } = res.data
    const desc = seo.filter((item) => item.key === 'description')[0]

    return { packets, desc }
  },
  head() {
    return {
      title: `${this.packets[0].category.name} | Captain Adventure`,
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
