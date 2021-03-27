<template>
  <section class="w-full my-6">
    <div class="container mx-auto p-6">
      <h3 class="font-bold text-2xl md:text-3xl">Blog</h3>

      <section
        v-if="firstPostPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24"
      >
        <div>
          <img
            class="object-cover mt-6 rounded-md w-full h-72 lg:h-96"
            :src="$config.baseAPIURL + firstPostPage.image"
            alt=""
          />
          <h4 class="text-xl font-semibold mt-4">
            {{ firstPostPage.title }}
          </h4>
          <p class="mt-2 text-sm">
            {{ firstPostPage.short_description }}
          </p>
          <div class="flex mt-4">
            <p class="text-sm">{{ firstPostPage.dateFormat }}</p>
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
                <p class="text-sm">{{ blog.dateFormat }}</p>
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
        <NuxtLink
          :to="'/blogs/pages/' + (parseInt(page) - 1)"
          :class="{ disabled: !prev }"
        >
          <button
            class="px-4 py-2 mx-1 md:px-8 md:py-3 rounded-lg font-normal text-lg"
            :class="{ 'bg-gray-500': !prev, 'bg-yellow-400': prev }"
          >
            Prev
          </button>
        </NuxtLink>
        <NuxtLink
          :to="'/blogs/pages/' + (parseInt(page) + 1)"
          :class="{ disabled: !next }"
        >
          <button
            class="px-4 py-2 mx-1 md:px-8 md:py-3 rounded-lg font-normal text-lg"
            :class="{ 'bg-gray-500': !next, 'bg-yellow-400': next }"
          >
            Next
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ params, $axios, $config: { baseAPIURL } }) {
    const res = await $axios.$get(
      `${baseAPIURL}v1/landing-page/blogs?perPage=4&page=${
        params.pages ? params.pages : 1
      }`
    )
    const { posts, seo } = res.data
    posts.forEach((item) => {
      const datePost = new Date(item.date)
      item.dateFormat = `${datePost.getDate()}-${
        datePost.getMonth() + 1
      }-${datePost.getFullYear()}`
    })
    const firstPostPage = posts.length > 0 ? posts[0] : null
    if (posts.length > 0) posts.shift()
    const blogs = posts
    const desc = seo.filter((item) => item.key === 'description')[0]

    const page = params.pages ? params.pages : 1
    const prev = !(page <= 1)
    const next = res.total - 4 * page > 0

    return { firstPostPage, blogs, desc, page, prev, next }
  },
  head() {
    return {
      title: `Blog | Captain Adventure`,
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

<style lang="css" scoped>
.disabled {
  pointer-events: none;
}
</style>
