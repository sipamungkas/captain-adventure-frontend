<template>
  <div class="price-item p-4 w-full md:w--30">
    <div class="w-full relative">
      <div
        class="w-full h-96 absolute lg:h-full bg-yellow-900"
        :class="{ '-bottom-4 -right-4': isOdd, '-top-4 -left-4': !isOdd }"
      ></div>
      <div class="w-full relative image-price">
        <img
          :src="$config.baseAPIURL + category.image"
          class="object-cover w-full h-96 rounded-xl"
          alt=""
        />
        <div
          class="absolute bg-gray-800 bg-opacity-40 w-full h-min-full lg:h-36 bottom-0 rounded-b-xl flex flex-col lg:flex-row lg:justify-between p-2 lg:p-5 items-center"
        >
          <div
            class="category-detail w-48 mb-2 flex flex-col items-center lg:items-start justify-center text-white"
          >
            <h4
              class="font-semibold text-xl text-center lg:text-2xl lg:text-left mb-2"
            >
              {{ category.name }}
            </h4>
            <p class="font-medium text-medium lg:text-xl">
              {{ category.packets_count }} Paket
            </p>
          </div>
          <div class="category-cta">
            <NuxtLink :to="'/program/' + category.slug"
              ><button
                class="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
              >
                Detail
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    odd: {
      type: Number,
      default: 1,
    },
    category: {
      required: true,
      type: Object,
    },
  },
  computed: {
    isOdd() {
      return (this.odd + 1) % 2 !== 0
    },
  },
}
</script>
