<template>
  <section class="w-full pb-5 mt-12 bg-program">
    <div class="container mx-auto">
      <div class="section-title flex flex-col items-center justify-center">
        <h1 class="font-bold text-3xl md:text-5xl mt-4">Program</h1>
        <h6
          class="m-4 font-normal text-lg md:text-xl max-w-full md:w-7/12 text-center"
        >
          Captain Adventure memiliki program yang menarik dan seru, untuk lebih
          jelasnya bisa lihat di bawah ini
        </h6>
      </div>
      <div class="program-wrapper flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            v-for="program in programs"
            :key="program.slug"
            class="w-80 bg-gray-100 rounded-md shadow-md"
          >
            <div class="program-box-wrapper grid grid-cols-1 gap-3 p-4">
              <div class="program-photo-wrapper">
                <img
                  class="w-72 h-32 object-cover"
                  :src="
                    program.image
                      ? $config.baseAPIURL + program.image
                      : require(`~/assets/images/bg-program.jpg`)
                  "
                  alt="image program"
                />
              </div>
              <div class="program-title-wrapper text-center">
                <h3 class="text-xl font-bold">{{ program.title }}</h3>
              </div>
              <div class="program-desc-wrapper text-center">
                <p>
                  {{ program.short_description }}
                </p>
              </div>
              <div class="program-cta-wrapper text-center">
                <NuxtLink :to="'/program/plus/' + program.slug">
                  <button
                    class="h-10 w-40 rounded-md p-1 bg-gray-900 text-white"
                  >
                    Baca Yuk..
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- <div class="w-80 bg-gray-100 rounded-md shadow-md">
            <div class="program-box-wrapper grid grid-cols-1 gap-3 p-4">
              <div class="program-photo-wrapper">
                <img
                  class="w-72 h-32 object-cover"
                  src="~/assets/images/Rafting.png"
                  alt="testing"
                />
              </div>
              <div class="program-title-wrapper text-center">
                <h3 class="text-xl font-bold">Rafting to the top</h3>
              </div>
              <div class="program-desc-wrapper text-center">
                <p>
                  Divisi yang bergerak di jasa outbound & inbound management
                  training, kegiatan alam bebas, MICE (Meeting, Incentives,
                  Conferences, Exhibitions), training sumber daya manusia yang
                  telah tersertifikasi BNSP
                </p>
              </div>
              <div class="program-cta-wrapper text-center">
                <button class="h-10 w-40 rounded-md p-1 bg-gray-900 text-white">
                  Baca Yuk..
                </button>
              </div>
            </div>
          </div>
          <div class="w-80 bg-gray-100 rounded-md shadow-md">
            <div class="program-box-wrapper grid grid-cols-1 gap-3 p-4">
              <div class="program-photo-wrapper">
                <img
                  class="w-72 h-32 object-cover"
                  src="~/assets/images/Rafting.png"
                  alt="testing"
                />
              </div>
              <div class="program-title-wrapper text-center">
                <h3 class="text-xl font-bold">Rafting to the top</h3>
              </div>
              <div class="program-desc-wrapper text-center">
                <p>
                  Divisi yang bergerak di jasa outbound & inbound management
                  training, kegiatan alam bebas
                </p>
              </div>
              <div class="program-cta-wrapper text-center">
                <button class="h-10 w-40 rounded-md p-1 bg-gray-900 text-white">
                  Baca Yuk..
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="goto-program mt-8 mb-2 text-center hidden">
        <button
          class="bg-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white"
        >
          Masih kurang banyak? Yuk cek disini...
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    programs: Array,
  },
  computed: {
    getThreeData() {
      return this.programs.slice(0, 3)
    },
  },
}
</script>

<style lang="scss"></style>
