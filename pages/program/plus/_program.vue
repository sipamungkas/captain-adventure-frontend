<template>
  <section class="w-full">
    <div class="container mx-auto my-6">
      <div class="body-wrapper">
        <div class="flex flex-col items-center justify-center mx-4 lg:mx-0">
          <img
            class="rounded-lg w-full h-72 lg:w--price lg:h-96 object-cover"
            :src="$config.baseAPIURL + program.image"
            alt="image program"
          />
          <h1
            class="text-2xl lg:text-3xl font-semibold my-4 text-center w-full lg:w--price"
          >
            {{ program.title }}
          </h1>
        </div>

        <div
          class="my-4 mx-4 lg:mx-8 text-justify body-content break-words max-w-none prose lg:prose-lg"
          v-html="program.body"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgramDetailPage',
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/programs/${params.program}`
    )
    const { program } = res.data

    return { program }
  },
  head() {
    return {
      title: `${this.program.title} | Captain Adventure`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.program.short_description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.program.short_description,
        },
      ],
    }
  },
}
</script>
