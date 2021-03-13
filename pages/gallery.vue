<template>
  <section class="w-full my-6">
    <div class="container mx-auto">
      <div
        class="greeting-page text-center flex flex-col justify-center items-center"
      >
        <div class="price-title">
          <h1 class="font-bold text-3xl md:text-5xl">Gallery</h1>
        </div>
        <div class="price-description w-full lg:w-1/2">
          <h6 class="my-4 font-normal text-lg md:text-xl">
            Dokumentasi beberapa foto kegiatan dari Captain Adventure bisa kamu
            lihat disini
          </h6>
        </div>
      </div>
      <div class="price-list my-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          <div
            v-for="gallery in galleries"
            :key="gallery.id"
            class="gallery-item"
          >
            <div class="w-full relative">
              <div class="w-full relative image-gallery">
                <img
                  src="~/assets/images/gallery-item1.png"
                  width="400px"
                  height="350px"
                  class="object-cover w-full h-96"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- START: pagination -->
      <div
        class="flex flex-row items-center justify-center mt-10 md:items-end md:justify-end"
      >
        <button
          class="hidden px-4 py-2 mx-1 md:px-8 md:py-3 bg-yellow-400 rounded-lg font-normal text-lg"
        >
          Prev
        </button>
        <button
          class="hidden px-4 py-2 mx-1 md:px-8 md:py-3 bg-yellow-400 rounded-lg font-normal text-lg"
        >
          Next
        </button>
      </div>
      <!-- END: pagination -->
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/galleries?perPage=9`
    )
    const { galleries, seo } = res.data

    const desc = seo.filter((item) => item.key === 'description')[0]
    return { galleries, desc }
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
