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
      <Formulir />
    </section>
    <!-- END: Contact US -->
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  async asyncData({ params, $axios, $config: { baseAPIURL }, app, $getMap }) {
    const res = await $axios.$get(`${baseAPIURL}v1/landing-page/contacts`)
    const { data } = res

    const socials = data.contacts.filter(
      (item) => !['map', 'address', 'kontak', 'fab-wa'].includes(item.category)
    )

    const address = data.contacts.filter((item) => item.category === 'address')
    const contacts = data.contacts.filter((item) => item.category === 'kontak')
    const map = $getMap(data.contacts)

    // const desc = data.seo.filter((item) => item.key === 'description')[0]
    return { socials, address, contacts, map }
  },
  head() {
    return {
      title: 'Contact | Captain Adventure',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Captain Adventure Galleries',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Captain Adventure Galleries',
        },
      ],
    }
  },
}
</script>
