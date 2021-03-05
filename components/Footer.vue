<template>
  <footer class="w-full bg-yellow-900 z-50 mt-6">
    <div class="container mx-auto">
      <div class="p-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div
            class="footer-contacts flex flex-col items-center md:items-start text-white"
          >
            <div class="footer-contact-title">
              <h3 class="font-semibold text-2xl">Social Media</h3>
            </div>
            <div class="footer-contact-items my-2">
              <ul>
                <li
                  v-for="(contact, index) in contacts"
                  :key="index"
                  class="my-3 flex items-center"
                >
                  <img
                    :src="
                      require(`~/assets/icons/footer-${contact.category}.svg`)
                    "
                  />
                  <p class="ml-4">{{ contact.value }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="footer-contacts flex flex-col items-center lg:items-start text-white"
          >
            <div class="footer-contact-title">
              <h3 class="font-semibold text-2xl">Alamat Kantor</h3>
            </div>
            <div
              class="footer-contact-items my-2 flex flex-col items-center justify-center lg:items-start"
            >
              <img class="w-7 h-7" src="~/assets/icons/footer-address.svg" />
              <p
                v-for="(addr, index) in address"
                :key="index"
                class="mt-4 text-center lg:text-left"
              >
                {{ addr.value }}
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-center md:col-span-2 lg:col-span-1"
          >
            <div
              class="w-full py-2 md:py-0 flex flex-col items-center justify-center"
            >
              <img class="w-40 md:w-44" src="/icon.png" alt="" />
              <p class="text-white text-2xl font-semibold">
                CAPTAIN ADVENTURE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    contacts: {
      required: true,
      type: Array,
      default() {
        return [
          {
            category: 'wa',
            value: '085248999925',
          },
        ]
      },
    },
    address: {
      required: true,
      type: Array,
      default() {
        return [
          {
            category: 'address',
            value:
              'Jalan. Nusantara Sakti No 11. Baturaden Selatan, \n Purwokerto - Jawa Tengah,\nIndonesia',
          },
        ]
      },
    },
  },
}
</script>

<style></style>
