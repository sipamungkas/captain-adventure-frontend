<template>
  <div>
    <!-- START: About -->
    <section class="w-full">
      <div class="flex items-center relative">
        <div class="inset-0 hero-caption absolute container mx-auto px-4 z-20">
          <h1
            class="text-white mt-10 md:mt-20 text-2xl md:text-5xl font-semibold"
          >
            Selamat Datang di <br />
            Captain Adventure Indonesia
          </h1>
          <h5
            class="text-white mt-5 text-lg md:text-xl font-medium md:w-2/3 lg:w-1/2 text-justify"
          >
            Event Organizer and holiday package provider for traveling with
            beloved friends or family. You are interested in seeing our program
            further or you can just contact me directly.
          </h5>
          <div class="flex items-center justify-center md:justify-start mt-14">
            <button
              class="mx-auto lg:m-0 md:m-0 md:mr-8 lg:mr-8 py-4 px-8 md:px-10 bg-yellow-900 font-semibold text-base text-white text-center flex items-center justify-center rounded-md"
            >
              Contact Us
            </button>
          </div>
          <div
            class="bg-black bg-opacity-20 mt-20 place-self-end w-full md:w-1/2 lg:w-1/2 float-right p-5 text-center md:text-right lg:text-right"
          >
            <h4 class="text-white text-4xl font-bold">About Us</h4>
          </div>
        </div>

        <div class="hero-image w-full">
          <div class="absolute inset-0 h-full bg-opacity-50 bg-gray-800"></div>
          <img
            class="object-cover h-screen w-full"
            src="~/assets/images/Hero.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <!-- END: About -->
    <!-- START: Lokasi -->
    <section class="w-full mt-10">
      <div class="w-full bg-yellow-900">
        <div class="container mx-auto p-4 mb-20">
          <img
            src="~/assets/icons/exclamation.svg"
            alt="exclamation logo"
            class="static md:absolute lg:absolute mx-8 mt-4 md:mt-6 lg:mt-6 md:mx-8 lg:mx-12"
          />
          <div class="flex flex-col items-center justify-center">
            <h1
              class="text-white text-justify text-xl font-bold text-bold mx-8 md:mx-mx-32 lg:mx-36 mt-4 md:mt-10 mb-6"
            >
              Captain Adventure Indonesia adalah Event Organizer (EO) & Provider
              Paket Outbound yang berpusat di Malang, Jawa Timur, Indonesia.
            </h1>
            <p
              class="text-white text-lg text-justify mx-8 md:mx-mx-32 lg:mx-36 mb-6"
            >
              Spesialisasi event kami di antaranya: Outbound; Gathering; Rafting
              (Arung Jeram); Meeting; Outing; School Event); Offroad; Paintball;
              Archery (panahan); dan Tour Wisata.
            </p>
            <p
              class="text-white text-lg text-justify mx-8 md:mx-mx-32 lg:mx-36 mb-6"
            >
              Kami siap menyediakan segala kebutuhan anda mulai dari Perencanaan
              (Plan), Konsep, Persiapan (Preparation), Pelaksanaan, hingga
              proses Check Out.
            </p>
            <p
              class="text-white text-lg text-justify mx-8 md:mx-mx-32 lg:mx-36 mb-40 md:mb-28 lg-mb-28"
            >
              Selain itu kami juga siap menyediakan beragam fasilitas yang anda
              butuhkan. untuk melaksanakan gathering outbound Malang, Batu,
              Bromo dan tempat lainnya. diantaranya meliputi Sarana
              Transportasi, Akomodasi (Hotel, Villa, Resort, Camping Ground,
              Home Stay dan Villa), Food and Beverage (Restaurant, Catering,
              Snack, Barbeque), dan Jasa Dokumentasi seperti Photo dan Video
              yang siap mengabadikan moment berharga bersama rekan anda.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg mx-8 md:mx-32 lg:mx-40 -mt-52 md:-mt-44 lg:-mt-44 shadow p-10"
      >
        <p class="text-center text-lg">
          Jam terbang kami tak hanya membuat event Anda sukses tapi juga penuh
          value. <br />
          Menjunjung tinggi profesionalitas,<br />
          kami telah dipercaya banyak klien untuk menggelar event di sejumlah
          daerah: <br />
          Malang, Batu, Bromo, Banyuwangi, Yogyakarta, Dieng dll.
        </p>
      </div>
    </section>
    <!-- END: Lokasi -->

    <!-- START: Section Offers -->
    <section class="w-full bg-white mt-10">
      <div class="container mx-auto p-5 md:p-10 lg:p-10">
        <h2 class="font-bold text-3xl md:text-5xl text-left">Lokasi Kami</h2>
        <p class="text-gray-700">
          Kamu bisa lihat lokasi kami untuk lebih jelasnya silakan klik atau
          cari di google maps di bawah ini
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mt-10"
        >
          <div
            class="bg-yellow-900 bg-opacity-44 grid-cols-1 h-60 md:h-auto lg:h-auto p-5"
          >
            <iframe
              :src="map"
              width="100%"
              height="100%"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="grid grid-cols-1 gap-14">
            <div class="bg-gray-100 grid-cols-1 p-6 md:p-10 ld:p-10">
              <div class="text-left">
                <div class="mb-5">
                  <h3 class="text-2xl font-bold">Lokasi</h3>
                </div>

                <img
                  src="~/assets/icons/Lokasi.svg"
                  class="absolute mt-1"
                  alt=""
                />
                <p class="text-left ml-10">
                  Jalan. Nusantara Sakti No 11. Baturaden Selatan,
                  <br />
                  Purwokerto - Jawa Tengah,
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
            <div class="bg-gray-100 grid-cols-1 p-6 md:p-10 ld:p-10">
              <div class="text-left">
                <div class="mb-5">
                  <h3 class="text-2xl font-bold">Kontak Kantor</h3>
                </div>

                <div class="">
                  <img
                    src="~/assets/icons/Telephone.svg"
                    class="absolute mt-1"
                    alt=""
                  />
                  <p class="text-left ml-10 mb-5">
                    Jalan. Nusantara Sakti No 11. Baturaden Selatan,
                    <br />
                    Purwokerto - Jawa Tengah,
                    <br />
                    Indonesia
                  </p>
                  <NuxtLink to="/contact">
                    <button
                      class="mx-auto lg:m-0 md:m-0 md:mr-8 lg:mr-8 py-3 px-7 md:px-9 bg-yellow-450 font-medium text-base text-center flex items-center justify-center rounded-md"
                    >
                      Kontak
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Section Offers -->
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData({ params, $axios, $config: { baseAPIURL }, app, $getMap }) {
    const res = await $axios.$get(`${baseAPIURL}v1/landing-page/contacts`)
    const { data } = res

    const map = $getMap(data.contacts)

    // const desc = data.seo.filter((item) => item.key === 'description')[0]
    return { map }
  },
  head() {
    return {
      title: 'About | Captain Adventure',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Captain Adventure About',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Captain Adventure About',
        },
      ],
    }
  },
}
</script>
