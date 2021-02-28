/* eslint-disable no-useless-escape */ /* eslint-disable no-useless-escape */
<template>
  <div>
    <div
      class="transition-opacity duration-500 ease-in-out chat invisible opacity-0 fixed bottom-32 right-5 z-30 my-4 w-11/12 md:w-4/12"
    >
      <div class="form flex flex-col rounded-xl">
        <div class="header p-4 bg-green-800 text-white rounded-t-lg">
          Contact Me
        </div>
        <div
          class="form-body flex py-10 px-4 bg-gray-400 items-center rounded-b-lg group-hover:bg-yellow-450"
        >
          <div class="input-form">
            <input
              v-model="text"
              class="rounded-lg p-2 w-11/12 md:w-full"
              type="text"
            />
          </div>
          <div class="btn-send flex items-center bg-green-500 rounded-full p-1">
            <a class="ml-2" :href="apilink" target="_blank">
              <img class="w-8 h-8 z-50" src="~/assets/icons/send.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-20 right-5 z-30">
      <div class="btn-toggle">
        <button
          class="toggle-chat p-0 w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          @click="toggleChat"
        >
          <svg
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f)">
              <path
                d="M6 41L8.47307 32.015C6.95247 29.3859 6.142 26.3993 6.15036 23.3461C6.15036 13.7786 13.9708 6 23.5793 6C28.2415 6 32.6196 7.80535 35.9033 11.0832C39.1952 14.361 41.0083 18.7204 41 23.3544C41 32.9218 33.1794 40.7006 23.571 40.7006H23.5626C20.6467 40.7006 17.7808 39.9685 15.2325 38.5873L6 41ZM15.667 35.4426L16.1933 35.7588C18.4158 37.0732 20.9641 37.7637 23.5626 37.772H23.571C31.5503 37.772 38.0504 31.3078 38.0504 23.3544C38.0504 19.5024 36.5466 15.8836 33.8144 13.1547C31.0823 10.4259 27.4394 8.92844 23.571 8.92844C15.5833 8.92844 9.08301 15.3926 9.08301 23.346C9.08301 26.0666 9.84331 28.7204 11.2972 31.0167L11.6397 31.5657L10.1776 36.8819L15.667 35.4426Z"
                fill="black"
                fill-opacity="0.24"
              />
            </g>
            <path
              d="M6.79053 40.0725L9.15043 31.5029C7.69525 28.9893 6.92975 26.1388 6.9308 23.2375C6.9308 14.1174 14.3902 6.69824 23.5409 6.69824C27.9886 6.69824 32.1557 8.42364 35.2912 11.5457C38.4267 14.6679 40.1514 18.8254 40.1514 23.2457C40.1514 32.3656 32.692 39.7848 23.5411 39.7848H23.5329C20.752 39.7848 18.0208 39.0865 15.5948 37.7719L6.79053 40.0726V40.0725Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M6.18896 40.6724L8.63133 31.799C7.12961 29.2027 6.32909 26.253 6.33745 23.2377C6.33745 13.7891 14.0608 6.10693 23.5502 6.10693C28.1544 6.10693 32.478 7.88975 35.7211 11.1269C38.972 14.3641 40.7627 18.6695 40.7544 23.2459C40.7544 32.6945 33.031 40.3767 23.5417 40.3767H23.5336C20.6594 40.3756 17.8312 39.6581 15.3068 38.2897L6.18896 40.6726V40.6724ZM15.7358 35.184L16.2557 35.4962C18.4507 36.7944 20.9673 37.4764 23.5336 37.4846H23.5418C31.4219 37.4846 37.8417 31.1006 37.8417 23.2459C37.8417 19.4419 36.3564 15.8678 33.6581 13.1729C30.9599 10.478 27.3622 8.99905 23.5418 8.99905C15.6534 8.99905 9.23378 15.383 9.23378 23.2377C9.23378 25.9244 9.98456 28.5454 11.4204 30.813L11.7587 31.3553L10.3147 36.6054L15.7358 35.184Z"
              fill="white"
            />
            <path
              d="M19.2422 16.0651C18.9202 15.3503 18.5819 15.3337 18.2767 15.3256C18.0292 15.3174 17.7404 15.3174 17.4515 15.3174C17.1628 15.3174 16.7006 15.4242 16.3046 15.8514C15.9084 16.2787 14.8027 17.3139 14.8027 19.4256C14.8027 21.5288 16.3458 23.5664 16.5603 23.8539C16.7748 24.1416 19.5391 28.6029 23.9042 30.3202C27.5348 31.7498 28.2775 31.4622 29.0613 31.3883C29.8535 31.3143 31.6029 30.353 31.9659 29.3507C32.3207 28.3483 32.3207 27.4938 32.2134 27.3131C32.1062 27.1322 31.8174 27.0255 31.3882 26.8118C30.9592 26.5982 28.8468 25.563 28.4508 25.4151C28.0547 25.2673 27.7659 25.2015 27.4854 25.6287C27.1965 26.0559 26.3715 27.0172 26.1238 27.3049C25.8763 27.5924 25.6205 27.6253 25.1914 27.4117C24.7623 27.1981 23.3761 26.7461 21.7341 25.2836C20.4551 24.1498 19.5887 22.7448 19.341 22.3176C19.0935 21.8904 19.3164 21.6602 19.5309 21.4467C19.7206 21.2577 19.9599 20.9454 20.1746 20.699C20.3891 20.4525 20.4633 20.2718 20.6036 19.9841C20.7439 19.6966 20.6778 19.4502 20.5706 19.2366C20.4633 19.0228 19.6217 16.9113 19.2422 16.0651Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_f"
                x="0"
                y="0"
                width="47"
                height="47"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="3"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="23.4703"
                y1="40.0703"
                x2="23.4703"
                y2="6.69624"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#20B038" />
                <stop offset="1" stop-color="#60D66A" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    fav: true,
    menu: false,
    message: false,
    hints: true,
    phone: '6285248999925',
    text: '',
    apilink: '',
  }),
  watch: {
    text(val) {
      this.apilink = 'http://'
      this.apilink += 'api'
      this.apilink +=
        '.whatsapp.com/send?phone=' +
        this.phone +
        '&text=' +
        encodeURI(this.text)
    },
  },
  created() {
    this.apilink = 'http://'
    this.apilink += this.isMobile() ? 'api' : 'web'
    this.apilink +=
      '.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURI('Hello!')
  },
  methods: {
    toggleChat() {
      const elChat = document.querySelector('.chat')
      elChat.classList.toggle('invisible')
      elChat.classList.toggle('opacity-0')
    },
    isMobile() {
      return false
    },
  },
}
</script>
