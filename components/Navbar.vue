<template>
  <header class="w-full h-nav bg-yellow-900 sticky inset-0 z-50">
    <nav class="h-nav container mx-auto">
      <div class="h-nav flex items-center justify-between px-4">
        <div class="w-10 py-2 md:py-0 md:w-16 flex items-center">
          <a href="#"></a><img src="icon.png" alt="" />
        </div>
        <div class="w-auto">
          <ul
            class="fixed inset-0 flex flex-row invisible lg:visible lg:relative text-white"
          >
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/index"
                >Home</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/price"
                >Price</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/about"
                >About</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/contact"
                >Contact</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/gallery"
                >Gallery</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-20 flex items-center justify-center py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/blog"
                >Blog</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="w-auto lg:absolute">
          <ul class="flex items-center">
            <li class="block lg:hidden">
              <button
                class="relative flex items-center mobile-nav-cta"
                @click="toggleGaes"
              >
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 4.4H0V0H24V4.4ZM24 13.2H0V8.8H24V13.2ZM0 22H24V17.6H0V22Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="mobile-nav w-full h-screen invisible lg:invisible bg-gray-800 bg-opacity-44 transition-shadow"
      @click="toggleGaes"
    >
      <div class="w-full bg-yellow-900 z-50">
        <nav>
          <ul class="flex flex-col pb-4">
            <li class="">
              <NuxtLink
                to="/index"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >Home</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/price"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >Price</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/about"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >About</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/contact"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >Contact</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/gallery"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >Gallery</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/blog"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >Blog</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleGaes() {
      const el = document.querySelector('.mobile-nav')
      el.classList.toggle('invisible')
    },
  },
}
</script>

<style></style>
