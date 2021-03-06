<template>
  <div>
    <!-- START: Maps -->
    <section class="w-full">
      <div class="container mx-auto my-6">
        <div class="maps-title text-center my-6">
          <h1 class="font-bold text-2xl md:text-3xl">Maps</h1>
        </div>
        <div class="maps-content w-full px-4 lg:px-0 my-6">
          <iframe
            :src="map"
            class="w-full h-96 lg:h--price-photo"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>
    <!-- END: Maps -->
    <!-- START: Contact -->
    <section class="w-full">
      <div class="container mx-auto my-12">
        <div class="contact-content px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Lokasi.svg" />
                  <h5 class="font-bold text-xl">Lokasi</h5>
                </div>
                <div class="contact-items">
                  <p v-for="(addr, index) in address" :key="index" class="mb-2">
                    {{ addr.value }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Teman.svg" />
                  <h5 class="font-bold text-xl">Social Media</h5>
                </div>
                <div class="contact-items">
                  <ul>
                    <li
                      v-for="(social, index) in socials"
                      :key="index"
                      class="mb-3 flex items-center"
                    >
                      <img
                        class="mr-4 w-5"
                        :src="
                          require(`~/assets/icons/icon-${social.category}.svg`)
                        "
                      />
                      <p>{{ social.value }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Kontak.svg" />
                  <h5 class="font-bold text-xl">Kontak</h5>
                </div>
                <div class="contact-items">
                  <div
                    v-for="(contact, index) in contacts"
                    :key="index"
                    class="mb-3"
                  >
                    <p class="mb-1 font-semibold">Kontak {{ index + 1 }}</p>
                    <p class="mb-1">{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Contact -->
    <!-- START: Contact US -->
    <section class="w-full">
      <hr />
      <div class="container mx-auto my-12 px-4 lg:px-0">
        <div class="form-header">
          <h2 class="font-bold text-2xl md:text-3xl">Formulir Pertanyaan</h2>
        </div>
        <div class="form-content flex items-center">
          <div class="form-image w-full py-14 mr-10 hidden lg:inline-flex">
            <img
              class="max-w-lg lg:h--30 object-cover"
              src="~/assets/images/Mobil.png"
              alt=""
            />
          </div>
          <div class="form-wrapper w-full">
            <div class="form-input bg-gray-100 mt-4 lg:mt-0 py-16 px-6">
              <div class="form-group my-3">
                <label class="text-lg" for="">Name</label>
                <div class="mt-3">
                  <input
                    id=""
                    class="py-2 rounded-md w-full lg:w-1/2"
                    type=" text"
                    name=""
                  />
                </div>
              </div>
              <div class="form-group my-3">
                <label class="text-lg" for="">Email</label>
                <div class="mt-3">
                  <input
                    id=""
                    class="py-2 rounded-md w-full lg:w-1/2"
                    type=" text"
                    name=""
                  />
                </div>
              </div>
              <div class="form-group my-3">
                <label class="text-lg" for="">Message</label>
                <div class="mt-3">
                  <textarea
                    id=""
                    cols="8"
                    class="py-2 rounded-md w-full h-52"
                    type="text"
                    name=""
                  ></textarea>
                </div>
              </div>
              <div class="form-group mt-16">
                <button
                  class="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Contact US -->
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      socials: [],
      address: [],
      contacts: [],
      map: '',
    }
  },
  async fetch() {
    const api = this.$config.baseAPIURL + 'v1/landing-page/contacts'
    const res = await this.$axios.$get(api)

    const { data } = res

    this.socials = data.contacts.filter(
      (item) => !['map', 'address', 'kontak', 'fab-wa'].includes(item.category)
    )

    this.address = data.contacts.filter((item) => item.category === 'address')
    this.contacts = data.contacts.filter((item) => item.category === 'kontak')
    this.map = this.$getMap(data.contacts)
  },
}
</script>
