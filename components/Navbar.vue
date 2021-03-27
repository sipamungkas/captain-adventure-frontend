<template>
  <header class="w-full h-nav bg-yellow-900 sticky inset-0 z-40">
    <nav class="h-nav container mx-auto">
      <div class="h-nav flex items-center justify-between px-4">
        <div class="w-full py-2 md:py-0 flex items-center">
          <NuxtLink to="/home" class="flex items-center"
            ><img class="w-10 md:w-16 mr-1" src="/icon.png" alt="" />
            <p class="hidden md:inline-flex text-white text-xl">
              CAPTAIN ADVENTURE.
            </p>
          </NuxtLink>
        </div>
        <div class="w-auto">
          <ul
            class="fixed inset-0 flex flex-row invisible lg:visible lg:relative text-white"
          >
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center mr-6 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/home"
                >HOME</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center mr-6 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/price"
                >PRICE</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center mr-6 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/about"
                >ABOUT</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center mr-6 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/contact"
                >CONTACT</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center mr-6 py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/gallery"
                >GALLERY</NuxtLink
              >
            </li>
            <li class="nav">
              <NuxtLink
                class="h-nav w-24 flex items-center justify-center py-6 md:py-0 text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
                to="/blogs"
                >BLOG</NuxtLink
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
      class="transition-opacity duration-500 ease-in-out opacity-0 mobile-nav w-full lg:h-full invisible lg:invisible bg-gray-800 bg-opacity-44"
      @click="toggleGaes"
    >
      <div class="w-full bg-yellow-900 z-50">
        <nav>
          <ul class="flex flex-col pb-4">
            <li class="">
              <NuxtLink
                to="/home"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >HOME</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/price"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >PRICE</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/about"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >ABOUT</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/contact"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >CONTACT</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/gallery"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >GALLERY</NuxtLink
              >
            </li>
            <li class="">
              <NuxtLink
                to="/blogs"
                class="h-14 flex justify-start items-center text-white text-xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2 w-full"
                >BLOG</NuxtLink
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
      el.classList.toggle('opacity-0')
    },
  },
}
</script>

<style></style>
