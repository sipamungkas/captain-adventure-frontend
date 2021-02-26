<template>
  <header class="w-full h-nav bg-yellow-900 sticky inset-0 z-50">
    <nav class="h-nav container mx-auto">
      <div class="h-nav flex items-center justify-between px-4">
        <div class="w-10 py-2 md:py-0 md:w-16 flex items-center">
          <a href="#"></a><img src="icon.png" alt="" />
        </div>
        <div class="w-auto">
          <ul
            class="fixed inset-0 flex flex-row invisible lg:visible lg:relative"
          >
            <li
              class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/index">Home</NuxtLink>
            </li>
            <li
              class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/price">Price</NuxtLink>
            </li>
            <li
              class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li
              class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li
              class="h-nav w-20 flex items-center justify-center mr-10 py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/gallery">Gallery</NuxtLink>
            </li>
            <li
              class="h-nav w-20 flex items-center justify-center py-6 md:py-0 text-white text-xl md:rounded-b-3xl hover:bg-white hover:text-yellow-900 hover:font-bold px-2"
            >
              <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-auto lg:absolute">
          <ul class="flex items-center">
            <li class="block lg:hidden">
              <button class="relative flex items-center">
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
  </header>
</template>

<style></style>
