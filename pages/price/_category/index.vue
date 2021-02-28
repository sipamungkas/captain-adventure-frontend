<template>
  <div class="category-contents">
    <section class="w-full my-8">
      <Packets :packets="packets" />
    </section>

    <section class="w-full">
      <Browsur />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/categories/${params.category}`
    )
    const { packets } = res.data
    return { packets }
  },
}
</script>

<style></style>
