<template>
  <div class="price-item p-4 w-full md:w--30">
    <div class="w-full relative">
      <div
        class="-bottom-4 -right-4 w-full h-96 absolute lg:h-full bg-yellow-900"
      ></div>
      <div class="w-full relative image-price">
        <img
          src="~/assets/images/Rafting.png"
          class="object-cover w-full h-96 rounded-xl"
          alt=""
        />
        <div
          class="absolute bg-gray-800 bg-opacity-40 w-full h-min-full lg:h-36 bottom-0 rounded-b-xl flex flex-col lg:flex-row lg:justify-between p-2 lg:p-5 items-center"
        >
          <div
            class="category-detail w-48 mb-2 flex flex-col items-center lg:items-start justify-center text-white"
          >
            <h4
              class="font-semibold text-xl text-center lg:text-3xl lg:text-left"
            >
              Adventure
            </h4>
            <p class="font-medium text-medium lg:text-xl">3 Paket</p>
          </div>
          <div class="category-cta">
            <NuxtLink to="/price/category"
              ><button
                class="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
              >
                Detail
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
