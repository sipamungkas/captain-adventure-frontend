<template>
  <section class="w-full my-6">
    <div class="container mx-auto p-6 lg:p-0">
      <div
        class="greeting-page text-center flex flex-col justify-center items-center"
      >
        <div class="price-title">
          <h1 class="font-bold text-3xl md:text-4xl">Gallery</h1>
        </div>
        <div class="price-description w-full lg:w-1/2">
          <h6 class="my-4 font-normal text-lg md:text-xl">
            Dokumentasi beberapa foto kegiatan dari Captain Adventure bisa kamu
            lihat disini
          </h6>
        </div>
      </div>
      <div class="price-list my-4">
        <Galleries :galleries="galleries" />
      </div>
      <!-- START: pagination -->
      <div
        class="flex flex-row items-center justify-center mt-10 md:items-end md:justify-end"
      >
        <NuxtLink
          :to="'/gallery/pages/' + (parseInt(page) - 1)"
          :class="{ disabled: !prev }"
        >
          <button
            class="px-4 py-2 mx-1 md:px-8 md:py-3 rounded-lg font-normal text-lg"
            :class="{ 'bg-gray-500': !prev, 'bg-yellow-400': prev }"
          >
            Prev
          </button>
        </NuxtLink>
        <NuxtLink
          :to="'/gallery/pages/' + (parseInt(page) + 1)"
          :class="{ disabled: !next }"
        >
          <button
            class="px-4 py-2 mx-1 md:px-8 md:py-3 rounded-lg font-normal text-lg"
            :class="{ 'bg-gray-500': !next, 'bg-yellow-400': next }"
          >
            Next
          </button>
        </NuxtLink>
      </div>
      <!-- END: pagination -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryPage',
  async asyncData({ query, params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/galleries?perPage=9&page=${
        params.pages ? params.pages : 1
      }`
    )

    const { galleries, seo } = res.data
    const desc = seo.filter((item) => item.key === 'description')[0]
    const page = params.pages ? params.pages : 1
    const prev = !(page <= 1)
    const next = res.total - 9 * page > 0

    return { galleries, desc, next, prev, page }
  },
  head() {
    return {
      title: 'Gallery | Captain Adventure',
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

<style lang="css" scoped>
.disabled {
  pointer-events: none;
}
</style>
