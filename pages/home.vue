<template>
  <div>
    <Hero />

    <Program />

    <section class="w-full">
      <div class="container mx-auto">
        <Offers />
      </div>
    </section>

    <section class="w-full">
      <div class="container mx-auto mt-20">
        <div class="flex flex-col items-center">
          <div class="image-wrapper flex justify-center">
            <img
              class="flex items-center"
              src="~/assets/images/Ada Pertanyaan.png"
              height="50%"
              width="50%"
            />
          </div>

          <div
            class="text-center my-4 flex flex-col items-center justify-center"
          >
            <h1 class="text-gray-900 text-3xl font-bold">Punya Pertanyaan ?</h1>
            <p class="mt-2 text-sm">
              Tenang, jangan khawatir hubungi tim Captain Adventure disini
            </p>
            <div class="cta-btn flex items-center">
              <button
                class="m-4 py-3 px-7 md:px-9 bg-yellow-450 font-medium text-base text-center flex items-center justify-center rounded-md"
              >
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
