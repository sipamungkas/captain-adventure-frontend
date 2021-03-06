<template>
  <div class="container mx-auto my-10">
    <div
      class="box-browsur mx-5 lg:m-0 p-8 border-yellow-900 rounded-xl border-4"
    >
      <div class="browsur-title">
        <h3 class="font-bold text-2xl md:text-3xl">Browsur</h3>
      </div>
      <div
        class="browsur-body flex flex-col md:flex-row justify-between items-center"
      >
        <div class="browsur-text max-w-prose my-4 md:mr-4">
          <p class="font-normal text-lg md:text-xl">
            Jangan khawatir, kami menyediakan brosur supaya kamu bisa lihat
            informasi nya dan jangan lupa bagikan brosurnya kepada temanmu ya
          </p>
        </div>
        <div class="browsur-cta">
          <a :href="$config.baseAPIURL + 'v1/brochures'">
            <button
              class="px-6 py-3 md:px-10 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
