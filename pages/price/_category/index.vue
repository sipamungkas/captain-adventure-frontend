<template>
  <div class="category-contents">
    <section v-if="packets.length > 0" class="w-full my-8">
      <Packets :packets="packets" />
    </section>

    <section v-else class="w-full my-8">
      <div class="text-3xl font-bold text-gray-400">
        Maaf Kategori ini belum memiliki paket :(
      </div>
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
    const categoryName =
      packets.length > 0 ? packets[0].category.name : 'Category'

    return { packets, desc, categoryName }
  },
  head() {
    return {
      title: `${this.categoryName} | Captain Adventure`,
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
