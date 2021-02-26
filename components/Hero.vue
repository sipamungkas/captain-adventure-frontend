<template>
  <section class="w-full">
    <div
      v-swiper="swiperOption"
      class="h-screen-80 lg:h--packet-photo flex items-center relative swiper-container"
    >
      <div class="swiper-wrapper relative">
        <div class="swiper-slide relative">
          <div
            class="inset-0 hero-caption absolute container mx-auto px-4 z-20"
          >
            <h1
              class="text-white mt-10 md:mt-20 text-3xl md:text-5xl font-bold"
            >
              Selamat Datang di Captain Marvel
            </h1>
            <h5
              class="text-white mt-5 text-lg md:text-2xl font-medium md:w-2/3 lg:w-1/2 text-justify"
            >
              Event Organizer (EO) & Outbound Package Provider dengan berbagai
              fasilitas yang kami tawarkan untuk Anda antara lain Outbound
              Catering, Transportasi, Akomodasi, Makanan dan Minuman serta Jasa
              Dokumentasi foto dan video untuk kegiatan.
            </h5>
            <div
              class="flex items-center justify-center md:justify-start mt-14"
            >
              <button
                class="mr-8 py-4 px-8 md:px-10 bg-yellow-600 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
              >
                Detail
              </button>
              <button
                class="py-2.5 px-4 border-solid border-4 bg-yellow-600 bg-opacity-50 border-yellow-600 font-semibold text-lg text-white text-center flex items-center justify-center rounded-md"
              >
                Play Video
              </button>
            </div>
          </div>

          <div class="hero-image w-full lg:h--packet-photo">
            <div
              class="absolute inset-0 h-full lg:h--packet-photo bg-opacity-50 bg-gray-800"
            ></div>
            <img
              class="object-cover h-screen-80 lg:h--packet-photo w-full"
              src="../assets/images/Hero.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-slide relative">
          <div
            class="inset-0 hero-caption absolute container mx-auto px-4 z-20"
          >
            <h1
              class="text-white mt-10 md:mt-20 text-3xl md:text-5xl font-bold"
            >
              Selamat Datang di Captain Marvel
            </h1>
            <h5
              class="text-white mt-5 text-lg md:text-2xl font-medium md:w-2/3 lg:w-1/2 text-justify"
            >
              Event Organizer (EO) & Outbound Package Provider dengan berbagai
              fasilitas yang kami tawarkan untuk Anda antara lain Outbound
              Catering, Transportasi, Akomodasi, Makanan dan Minuman serta Jasa
              Dokumentasi foto dan video untuk kegiatan.
            </h5>
            <div
              class="flex items-center justify-center md:justify-start mt-14"
            >
              <button
                class="mr-8 py-4 px-8 md:px-10 bg-yellow-600 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
              >
                Detail
              </button>
              <button
                class="py-2.5 px-4 border-solid border-4 bg-yellow-600 bg-opacity-50 border-yellow-600 font-semibold text-lg text-white text-center flex items-center justify-center rounded-md"
              >
                Play Video
              </button>
            </div>
          </div>

          <div class="hero-image w-full lg:h--packet-photo">
            <div
              class="absolute inset-0 h-full lg:h--packet-photo bg-opacity-50 bg-gray-800"
            ></div>
            <img
              class="object-cover h-screen-80 lg:h--packet-photo w-full"
              src="../assets/images/Hero.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination"></div>
    </div>
  </section>
  <!-- END: Hero Slider -->
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        // },
      },
    }
  },
}
</script>

<style></style>
