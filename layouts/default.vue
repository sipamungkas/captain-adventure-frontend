<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer :contacts="contact" :address="address" />
    <FloatWaBtn :phone="phoneFab" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [],
      address: [],
      phoneFab: null,
    }
  },
  async fetch() {
    const api = this.$config.baseAPIURL + 'v1/landing-page/contacts'
    const res = await this.$axios.$get(api)

    const { data } = res

    this.contact = data.contacts.filter(
      (item) => !['map', 'address', 'kontak', 'fab-wa'].includes(item.category)
    )

    const [fab] = data.contacts.filter((item) => item.category === 'fab-wa')
    this.phoneFab = fab?.value
    this.address = data.contacts.filter((item) => item.category === 'address')
  },
}
</script>

<style></style>
