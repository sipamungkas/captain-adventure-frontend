<template>
  <section class="w-full">
    <div class="container mx-auto my-6">
      <div class="body-wrapper">
        <div class="flex flex-col items-center justify-center mx-4 lg:mx-0">
          <img
            class="rounded-lg w-full h-72 lg:w--price lg:h-96 object-cover"
            :src="$config.baseAPIURL + post.image"
            alt=""
          />
          <h1
            class="text-2xl lg:text-3xl font-semibold my-4 text-center w-full lg:w--price"
          >
            {{ post.title }}
          </h1>
        </div>

        <div
          class="my-4 mx-4 lg:mx-8 text-justify body-content"
          v-html="post.body"
        ></div>
      </div>

      <div class="credit inline-block mx-4 lg:mx-8">
        <div class="credit-wrapper bg-gray-300 p-4 rounded-md">
          <div class="writer-wrapper">
            <p>
              <span class="text-gray-500 mr-4">Penulis:</span>
              {{ post.writter }}
            </p>
          </div>
          <div class="date-wrapper">
            <p>
              <span class="text-gray-500 mr-4">Publish:</span>
              {{ post.dateFormat }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/blogs/${params.blog}`
    )
    const { post } = res.data
    const datePost = new Date(post.date)
    post.dateFormat = `${datePost.getDate()}-${
      datePost.getMonth() + 1
    }-${datePost.getFullYear()}`

    return { post }
  },
}
</script>
