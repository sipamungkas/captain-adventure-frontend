<template>
  <section class="w-full">
    <div class="container mx-auto p-6">
      <h3 class="font-bold text-2xl md:text-3xl">Blog</h3>

      <section class="flex flex-col lg:flex-row justify-between">
        <div>
          <img
            class="object-cover mt-6 rounded-md w-full h-96"
            src="~/assets/images/gallery-item1.png"
            alt=""
          />
          <h4 class="text-xl font-semibold mt-4">
            Captain membuka program baru
          </h4>
          <p class="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Ultricies vel
            nisi, dolor placerat.Est nibh velitapiaon morbi. Ut vestibulum sit
            ac nunc netus pretium elit.
          </p>
          <div class="flex mt-4">
            <p class="text-sm">12 January 2021</p>
            <a href="blog-detail.html" class="ml-6 text-sm text-yellow-400"
              ><u>Readmore</u></a
            >
          </div>
        </div>

        <div
          class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:ml-14 lg:max-w-2xl"
        >
          <div class="flex flex-col lg:flex-row">
            <img
              class="object-cover mt-6 rounded-md w-full h-52"
              src="~/assets/images/gallery-item1.png"
              alt=""
            />
            <div class="lg:m-4">
              <h4 class="text-xl font-semibold mt-4">
                Rapat kolaborasi bersama event organizer lain
              </h4>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Ultricies
                vel nisi, dolor placerat.Est nibh velitapiaon morbi. Ut
                vestibulum sit ac nunc netus pretium elit.
              </p>
              <div class="flex m-4">
                <p class="text-sm">12 January 2021</p>
                <a href="#" class="ml-6 text-sm text-yellow-400"
                  ><u>Readmore</u></a
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <img
              class="object-cover mt-6 rounded-md w-full h-52"
              src="~/assets/images/gallery-item1.png"
              alt=""
            />
            <div class="lg:m-4">
              <h4 class="text-xl font-semibold mt-4">
                Rapat kolaborasi bersama event organizer lain
              </h4>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Ultricies
                vel nisi, dolor placerat.Est nibh velitapiaon morbi. Ut
                vestibulum sit ac nunc netus pretium elit.
              </p>
              <div class="flex m-4">
                <p class="text-sm">12 January 2021</p>
                <a href="#" class="ml-6 text-sm text-yellow-400"
                  ><u>Readmore</u></a
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <img
              class="object-cover mt-6 rounded-md w-full h-52"
              src="~/assets/images/gallery-item1.png"
              alt=""
            />
            <div class="lg:m-4">
              <h4 class="text-xl font-semibold mt-4">
                Rapat kolaborasi bersama event organizer lain
              </h4>
              <p class="mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Ultricies
                vel nisi, dolor placerat.Est nibh velitapiaon morbi. Ut
                vestibulum sit ac nunc netus pretium elit.
              </p>
              <div class="flex m-4">
                <p class="text-sm">12 January 2021</p>
                <a href="#" class="ml-6 text-sm text-yellow-400"
                  ><u>Readmore</u></a
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
