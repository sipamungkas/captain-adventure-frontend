<template>
  <div>
    <Hero :hero="heros" />

    <Program />

    <section class="w-full">
      <div class="container mx-auto">
        <Offers />
      </div>
    </section>

    <section class="w-full my-10">
      <div class="section-wrapper relative lg:h--price-photo flex items-center">
        <div
          class="absolute background-testimoni bg-yellow-300 bg-opacity-25 lg:w--price-photo lg:h--price-photo inset-0"
        ></div>
        <div class="container mx-auto p-4 my-4 relative">
          <div class="testimoni-wrapper">
            <div class="section-title">
              <h1 class="text-xl lg:text-3xl font-semibold">
                Testimonial Customer
              </h1>
            </div>
            <div class="testimoni-body flex items-center py-6">
              <div class="hidden lg:inline-flex image-wrapper lg:mr-4">
                <img
                  class="lg:w-96 lg:h--28 object-cover"
                  src="~/assets/images/Rafting.png"
                  alt=""
                />
              </div>
              <div class="customer-wrapper grid grid-cols-1 gap-4 lg:ml-2">
                <div
                  v-for="testimoni in testimonials"
                  :key="testimoni.id"
                  class="testimoni-buble max-h-full lg:max-w-4xl bg-gray-100 flex p-4"
                >
                  <div class="customer-picture mr-4">
                    <div class="w-20 h-20 rounded-full bg-gray-700">
                      <img
                        :src="$config.baseAPIURL + testimoni.image"
                        alt="img testimoni"
                        class="w-20 h-20 object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div class="customer-detail">
                    <div class="customer-name font-semibold mb-2">
                      {{ testimoni.name }}
                    </div>
                    <div class="customer-quote flex flex-col lg:flex-row">
                      <span class="mr-2 w-6 h-6 flex-none"
                        ><img
                          class="w-6 h-6"
                          src="~/assets/icons/Icon Testimonial.png"
                          alt=""
                      /></span>
                      <p class="relative top-1 lg:max-w-3xl p-2">
                        {{ testimoni.testimoni }}
                      </p>
                    </div>
                    <div>
                      <p class="text-gray-400 ml-2">
                        - {{ testimoni.position }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full my-6 relative">
      <div class="container mx-auto">
        <div class="wrapper mx-4">
          <div
            class="office-wrapper flex flex-col lg:flex-row items-center relative"
          >
            <div class="center-office w-full lg:w-80 lg:mr-4">
              <h1 class="text-left text-2xl text-gray-900 font-semibold">
                Kantor Pusat
              </h1>
              <div class="bg-gray-100 rounded-2xl my-4">
                <div class="text-left p-4">
                  <img
                    src="~/assets/icons/Icon Lokasi.svg"
                    class="absolute mt-1"
                    alt=""
                  />
                  <br />
                  <p class="text-left mt-8">
                    Lokasi kantor pusat berada di Kota Malang, Jawa Timur
                    Indonesia.
                  </p>
                </div>
              </div>

              <div class="location-wrapper">
                <h1 class="text-left text-2xl text-gray-900 font-semibold">
                  Tempat Kegiatan
                </h1>
                <div class="bg-gray-100 rounded-2xl my-4">
                  <div class="text-left p-4">
                    <img
                      src="~/assets/icons/Icon Lokasi.svg"
                      class="absolute mt-1"
                      alt=""
                    />
                    <br />
                    <p class="text-left mt-8">
                      Malang, Batu, Bromo, Banyuwangi, Yogyakarta, Dieng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="bg-yellow-300 bg-opacity-25 p-5 w-80 md:w--price-photo h-80 lg:ml-4 lg:w--55r lg:h--category-lg relative lg:my-8"
              >
                <iframe
                  class="absolute w-full h-72 lg:w--52r lg:h--28 right-0 top-5"
                  :src="map"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full relative my-4">
      <div class="container mx-auto my-8">
        <div class="flex flex-col items-center">
          <div class="image-wrapper flex justify-center">
            <img
              class="flex items-center"
              src="~/assets/images/Ada Pertanyaan.png"
              height="50%"
              width="50%"
            />
          </div>

          <div
            class="text-center my-4 flex flex-col items-center justify-center"
          >
            <h1 class="text-gray-900 text-3xl font-bold">Punya Pertanyaan ?</h1>
            <p class="mt-2 text-sm">
              Tenang, jangan khawatir hubungi tim Captain Adventure disini
            </p>
            <div class="cta-btn flex items-center">
              <NuxtLink to="/contact">
                <button
                  class="m-4 py-3 px-7 md:px-9 bg-yellow-450 font-medium text-base text-center flex items-center justify-center rounded-md"
                >
                  Call Us
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({
    params,
    $axios,
    $config: { baseAPIURL },
    app,
    $getMap,
    $noMap,
    $getAddress,
  }) {
    const res = await $axios.$get(`${baseAPIURL}v1/landing-page/home`)
    const { heros, testimonials, contacts, seo } = res.data
    const map = $getMap(contacts)
    const contact = $noMap(contacts)
    const desc = seo.filter((item) => item.key === 'description')[0]

    return { heros, testimonials, map, contact, desc }
  },
  head() {
    return {
      title: 'Captain Adventure | Adventure with captain',
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
