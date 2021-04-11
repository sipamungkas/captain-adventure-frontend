<template>
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
                id="name"
                v-model="name"
                class="py-2 px-2 focus:ring-2 focus:ring-yellow-600 rounded-md focus:outline-none w-full lg:w-1/2"
                type=" text"
                name=""
                @input="isValidName"
              />
            </div>
          </div>
          <div class="form-group my-3">
            <label class="text-lg" for="">Email</label>
            <div class="mt-3">
              <input
                id="email"
                v-model="email"
                class="py-2 px-2 focus:ring-2 focus:ring-yellow-600 rounded-md focus:outline-none w-full lg:w-1/2"
                type="email"
                name=""
                @input="isValidEmail"
              />
            </div>
          </div>
          <div class="form-group my-3">
            <label class="text-lg" for="">Message</label>
            <div class="mt-3">
              <textarea
                id="message"
                v-model="message"
                cols="8"
                class="py-2 px-2 focus:ring-2 focus:ring-yellow-600 rounded-md focus:outline-none w-full h-52"
                type="text"
                name=""
                @input="isValidMsg"
              ></textarea>
            </div>
          </div>
          <div class="form-group mt-16">
            <button
              id="btnSend"
              class="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 hover:bg-yellow-600 rounded-lg font-semibold text-lg inline-block"
              @click="sendEmail"
            >
              Kirim
            </button>
          </div>
          <div
            class="mt-6 transition transform -translate-y-4 notify ml-2 p-2 rounded-full bg-green-400 text-center text-white opacity-0"
          >
            <p>Send Success</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    isValidName() {
      if (!this.name) {
        document.querySelector('#name').classList.add('ring-red-600')
        document.querySelector('#name').classList.add('ring-2')
        return false
      } else {
        document.querySelector('#name').classList.remove('ring-red-600')
        document.querySelector('#name').classList.remove('ring-2')
        return true
      }
    },
    isValidEmail() {
      if (!this.email || !this.validEmail(this.email)) {
        document.querySelector('#email').classList.add('ring-red-600')
        document.querySelector('#email').classList.add('ring-2')
        return false
      } else {
        document.querySelector('#email').classList.remove('ring-red-600')
        document.querySelector('#email').classList.remove('ring-2')
        return true
      }
    },
    isValidMsg() {
      if (!this.message) {
        document.querySelector('#message').classList.add('ring-red-600')
        document.querySelector('#message').classList.add('ring-2')
        return false
      } else {
        document.querySelector('#message').classList.remove('ring-red-600')
        document.querySelector('#message').classList.remove('ring-2')
        return true
      }
    },
    async sendEmail() {
      if (this.name && this.email && this.message) {
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }
        const res = await this.$axios.post(
          `${this.$config.baseAPIURL}v1/landing-page/questions`,
          data
        )

        if (res.status === 201) {
          this.showNotify()
        }
      }
    },
    showNotify() {
      const notify = document.querySelector('.notify')
      notify.classList.toggle('opacity-0')
      notify.classList.toggle('-translate-y-4')
      setTimeout(function () {
        notify.classList.toggle('-translate-y-4')
        notify.classList.toggle('opacity-0')
      }, 2000)
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
  },
}
</script>

<style></style>
