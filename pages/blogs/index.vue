<template>
  <section class="w-full my-6">
    <div class="container mx-auto p-6">
      <h3 class="font-bold text-2xl md:text-3xl">Blog</h3>

      <section
        v-if="firstPostPage"
        class="flex flex-col lg:flex-row justify-between"
      >
        <div>
          <img
            class="object-cover mt-6 rounded-md w-full h-72 lg:h-96"
            src="~/assets/images/gallery-item1.png"
            alt=""
          />
          <h4 class="text-xl font-semibold mt-4">
            {{ firstPostPage.title }}
          </h4>
          <p class="mt-2 text-sm">
            {{ firstPostPage.short_description }}
          </p>
          <div class="flex mt-4">
            <p class="text-sm">12 January 2021</p>
            <NuxtLink
              :to="'/blogs/' + firstPostPage.slug"
              class="ml-6 text-sm text-yellow-400"
              ><u>Read more</u></NuxtLink
            >
          </div>
        </div>

        <div
          class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:ml-14 lg:max-w-2xl"
        >
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="grid grid-cols-1 lg:grid-cols-2"
          >
            <img
              class="object-cover mt-6 rounded-md w-full h-52"
              :src="$config.baseAPIURL + blog.image"
              alt=""
            />
            <div class="lg:m-4">
              <h4 class="text-xl font-semibold mt-4">
                {{ blog.title }}
              </h4>
              <p class="mt-2 text-sm">
                {{ blog.short_description }}
              </p>
              <div class="flex">
                <p class="text-sm">12 January 2021</p>
                <NuxtLink
                  :to="'/blogs/' + blog.slug"
                  class="ml-6 text-sm text-yellow-400"
                  ><u>Read more</u></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="flex flex-row items-center justify-center mt-20 md:items-end md:justify-end"
      >
        <button
          class="px-4 py-2 mx-1 md:px-8 md:py-3 bg-yellow-400 rounded-lg font-normal text-lg"
        >
          Prev
        </button>
        <button
          class="px-4 py-2 mx-1 md:px-8 md:py-3 bg-yellow-400 rounded-lg font-normal text-lg"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/blogs?perPage=4`
    )
    const { posts } = res.data
    const firstPostPage = posts.length > 0 ? posts[0] : null
    if (posts.length > 0) posts.shift()
    const blogs = posts

    return { firstPostPage, blogs }
  },
}
</script>
