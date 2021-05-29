<template>
  <section>
    <div
      v-swiper="swiperOption"
      class="relative swiper-container lg:h--category-lg"
    >
      <div class="swiper-wrapper relative">
        <div
          v-for="testimoni in testimonials"
          :key="testimoni.id"
          class="testimoni-buble lg:w-full bg-gray-100 flex p-4 swiper-slide relative"
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
          <div class="customer-detail w-11/12">
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
              <p
                class="relative h-14 top-1 w-56 md:w-11/12 p-2 break-words overflow-y-auto"
              >
                {{ testimoni.testimoni }}
              </p>
            </div>
            <div class="mt-1">
              <p class="text-gray-400 ml- absolute">
                - {{ testimoni.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Testi',
  directives: {
    swiper: directive,
  },
  props: {
    testimonials: {
      type: Array,
    },
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style></style>
