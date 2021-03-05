<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer :contacts="contact" :address="address" />
    <FloatWaBtn />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [],
      address: [],
    }
  },
  async fetch() {
    const api = this.$config.baseAPIURL + 'v1/landing-page/contacts'
    const res = await this.$axios.$get(api)

    const { data } = res

    this.contact = data.contacts.filter(
      (item) => !['map', 'address', 'kontak'].includes(item.category)
    )

    this.address = data.contacts.filter((item) => item.category === 'address')
  },
}
</script>

<style></style>
