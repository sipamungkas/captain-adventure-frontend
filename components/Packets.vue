<template>
  <div class="container mx-auto">
    <div class="packet-wrapper mx-4">
      <div
        class="greeting-page text-center flex flex-col justify-center items-center"
      >
        <div class="price-title">
          <h1 class="font-bold text-3xl md:text-5xl">{{ categoryName }}</h1>
        </div>
        <div class="price-description w-full lg:w-1/2">
          <h6 class="my-4 font-normal text-lg md:text-xl">
            Captain Adventure memiliki program yang menarik dan seru, untuk
            lebih jelasnya bisa lihat di bawah ini
          </h6>
        </div>
      </div>
      <div class="price-list my-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
        >
          <div v-for="packet in packets" :key="packet.id" class="price-item">
            <div class="w-full relative">
              <div class="w-full relative image-price">
                <div
                  class="absolute bg-gray-800 bg-opacity-40 w-full h-20 md:h-28 lg:h-32 top-0 rounded-t-xl flex flex-col lg:flex-row justify-center p-2 lg:p-5 items-center"
                >
                  <div
                    class="category-detail mb-2 flex flex-col items-center justify-center text-white"
                  >
                    <h4
                      class="font-semibold text-lg lg:text-xl mb-2 text-center"
                    >
                      {{ packet.title }}
                    </h4>
                    <p class="font-medium text-medium lg:text-lg">
                      {{ packet.start_at }}
                    </p>
                  </div>
                </div>
                <img
                  src="~/assets/images/Rafting.png"
                  class="object-cover w-full h-96 lg:w--category-lg rounded-xl"
                  alt=""
                />
                <div
                  class="category-cta relative flex items-center justify-center"
                >
                  <NuxtLink
                    class="absolute bottom-5"
                    :to="'/price/' + packet.category.slug + '/' + packet.slug"
                  >
                    <button
                      class="px-6 py-3 md:px-10 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
                    >
                      Detail
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packets: Array,
  },
  computed: {
    categoryName() {
      return this.packets[0].category.name
    },
  },
}
</script>

<style></style>
