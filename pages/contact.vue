<template>
  <div>
    <!-- START: Maps -->
    <section class="w-full">
      <div class="container mx-auto my-6">
        <div class="maps-title text-center my-6">
          <h1 class="font-bold text-2xl md:text-3xl">Maps</h1>
        </div>
        <div class="maps-content w-full px-4 lg:px-0 my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.33806395526!2d112.56174200322909!3d-7.97846945786652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62822063dc2fb%3A0x78879446481a4da2!2sMalang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1613488207487!5m2!1sid!2sid"
            class="w-full h-96 lg:h--price-photo"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>
    <!-- END: Maps -->
    <!-- START: Contact -->
    <section class="w-full">
      <div class="container mx-auto my-12">
        <div class="contact-content px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Lokasi.svg" />
                  <h5 class="font-bold text-xl">Lokasi</h5>
                </div>
                <div class="contact-items">
                  <p>
                    Lokasi kantor pusat berada di Kota Malang, Jawa Timur
                    Indonesia.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Teman.svg" />
                  <h5 class="font-bold text-xl">Social Media</h5>
                </div>
                <div class="contact-items">
                  <ul>
                    <li class="mb-3 flex items-center">
                      <img class="mr-4 w-5" src="~/assets/icons/Facebook.svg" />
                      <p>Captain Adventures</p>
                    </li>
                    <li class="mb-3 flex items-center">
                      <img class="mr-4 w-5" src="~/assets/icons/Gmail.svg" />
                      <p>captainadventur@gmail.com</p>
                    </li>
                    <li class="mb-3 flex items-center">
                      <img
                        class="mr-4 w-5"
                        src="~/assets/icons/Instagram.svg"
                      />
                      <p>CaptAdventurer</p>
                    </li>
                    <li class="mb-3 flex items-center">
                      <img class="mr-4 w-5" src="~/assets/icons/Whatsapp.svg" />
                      <p>+6281227812003</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-md p-8">
              <div class="flex flex-col">
                <div class="offer-title mb-8 flex items-center">
                  <img class="mr-4 w-5" src="~/assets/icons/Kontak.svg" />
                  <h5 class="font-bold text-xl">Kontak</h5>
                </div>
                <div class="contact-items">
                  <div class="mb-3">
                    <p class="mb-1 font-semibold">Kontak 1</p>
                    <p class="mb-1">(021) 888888</p>
                  </div>
                  <div class="mb-3">
                    <p class="mb-1 font-semibold">Kontak 2</p>
                    <p class="mb-1">(021) 888888</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Contact -->
    <!-- START: Contact US -->
    <section class="w-full">
      <hr />
      <div class="container mx-auto my-12 px-4 lg:px-0">
        <div class="form-header">
          <h2 class="font-bold text-2xl md:text-3xl">Formulir Pertanyaan</h2>
        </div>
        <div class="form-content flex items-center">
          <div class="form-image w-full py-14 mr-10 hidden lg:inline-flex">
            <img
              class="max-w-lg lg:h--30 object-cover"
              src="~/assets/images/Mobil.png"
              alt=""
            />
          </div>
          <div class="form-wrapper w-full">
            <div class="form-input bg-gray-100 mt-4 lg:mt-0 py-16 px-6">
              <div class="form-group my-3">
                <label class="text-lg" for="">Name</label>
                <div class="mt-3">
                  <input
                    id=""
                    class="py-2 rounded-md w-full lg:w-1/2"
                    type=" text"
                    name=""
                  />
                </div>
              </div>
              <div class="form-group my-3">
                <label class="text-lg" for="">Email</label>
                <div class="mt-3">
                  <input
                    id=""
                    class="py-2 rounded-md w-full lg:w-1/2"
                    type=" text"
                    name=""
                  />
                </div>
              </div>
              <div class="form-group my-3">
                <label class="text-lg" for="">Message</label>
                <div class="mt-3">
                  <textarea
                    id=""
                    cols="8"
                    class="py-2 rounded-md w-full h-52"
                    type="text"
                    name=""
                  ></textarea>
                </div>
              </div>
              <div class="form-group mt-16">
                <button
                  class="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 rounded-lg font-semibold text-lg"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Contact US -->
  </div>
</template>
