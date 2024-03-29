<template>
  <section class="w-full">
    <div
      v-swiper="swiperOption"
      class="h-screen-80 md:h--30 lg:h--packet-photo flex items-center relative swiper-container"
    >
      <div class="swiper-wrapper relative">
        <div v-for="item in heros" :key="item.id" class="swiper-slide relative">
          <div
            class="inset-0 hero-caption absolute container mx-auto px-4 z-20"
          >
            <h1
              class="text-white mt-6 md:mt-10 lg:mt-20 text-2xl md:text-5xl font-bold"
            >
              {{ item.title }}
            </h1>
            <h5
              class="text-white mt-5 text-base md:text-2xl font-medium md:w-2/3 lg:w-1/2 text-justify"
            >
              {{ item.short_description }}
            </h5>
            <div
              class="flex items-center justify-center md:justify-start mt-8 md:mt-14"
            >
              <NuxtLink
                :to="item.link ? item.link : '/about'"
                v-if="item.internal"
              >
                <button
                  type="button"
                  class="py-4 px-8 md:px-10 bg-yellow-600 hover:bg-yellow-700 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
                >
                  Detail
                </button>
              </NuxtLink>
              <a :href="item.link" v-else>
                <button
                  type="button"
                  class="py-4 px-8 md:px-10 bg-yellow-600 hover:bg-yellow-700 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
                >
                  Detail
                </button>
              </a>
              <button
                v-if="item.video"
                class="index-2 cta-video ml-8 py-4 px-4 bg-yellow-600 hover:bg-yellow-700 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
                :data-content="item.video"
                @click="popUp"
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
              :src="
                item.image
                  ? $config.baseAPIURL + item.image
                  : require(`~/assets/images/Hero.jpg`)
              "
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
  props: {
    hero: {
      type: Array,
    },
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
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    }
  },
  computed: {
    heros() {
      return this.hero.map((item) => {
        if (item.link) {
          if (item.link.includes(this.$config.baseURL)) {
            item.link = item.link.substring(this.$config.baseURL.length)
            item.internal = true
          } else {
            item.internal = false
          }
        } else {
          item.internal = true
        }

        return item
      })
    },
  },
  methods: {
    popUp(event) {
      const modalWrapper = document.createElement('div')
      const modalOverlay = document.createElement('div')

      let yTubeId = event.target.dataset.content
      if (yTubeId.includes('watch')) {
        const indexWatch = yTubeId.indexOf('=')
        yTubeId = yTubeId.substring(indexWatch + 1).replace('"', '')
      } else {
        yTubeId = yTubeId.split('/')
        yTubeId = yTubeId[yTubeId.length - 1].replace('"', '')
      }

      const template = `<iframe class="w-full h-full" src="https://www.youtube.com/embed/${yTubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      modalOverlay.addEventListener('click', function () {
        modalWrapper.remove()
      })

      modalWrapper.classList.add(
        'fixed',
        'inset-0',
        'z-40',
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen'
      )

      modalOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'opacity-75')
      const modalContent = document.createElement('div')
      modalContent.innerHTML = template
      modalContent.classList.add(
        'bg-white',
        'p-0',
        'md:p-6',
        'z-10',
        'lg:w--price',
        'lg:h-96'
      )
      modalWrapper.append(modalOverlay)
      modalWrapper.append(modalContent)
      document.body.append(modalWrapper)
    },
  },
}
</script>

<style></style>
