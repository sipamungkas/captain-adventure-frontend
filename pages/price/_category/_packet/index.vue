<template>
  <div class="packet-contents">
    <section class="w-full my-8">
      <PacketDetail :packet="packet" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/packets/${params.packet}`
    )
    const { packet } = res.data
    return { packet }
  },
}
</script>

<style></style>
