<template>
  <div class="packet-contents">
    <section class="w-full my-8">
      <PacketDetail :packet="packet" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'PacketPage',
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/packets/${params.packet}`
    )
    const { packet, seo } = res.data
    const desc = seo.filter((item) => item.key === 'description')[0]

    return { packet, desc }
  },
  head() {
    return {
      title: `${this.packet.title} | Captain Adventure`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.desc.value,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.desc.value,
        },
      ],
    }
  },
}
</script>

<style></style>
