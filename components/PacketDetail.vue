<template>
  <div class="container mx-auto">
    <div class="packet-wrapper mx-4 my-8">
      <div class="content-wrapper">
        <div class="packet-header flex flex-col lg:flex-row">
          <div class="packet-image lg:mr-16 lg:w--price">
            <img
              class="object-cover w-full lg:w--price h-96"
              :src="$config.baseAPIURL + packet.image"
              alt=""
            />
          </div>
          <div
            class="lg:flex-none packet-introducing flex flex-col mt-4 lg:mt-0 lg:max-w-md"
          >
            <div class="packet-title mb-7 break-words">
              <h1 class="font-bold text-3xl md:text-4xl">{{ packet.title }}</h1>
            </div>
            <div class="packet-short-description break-words">
              <p class="font-medium text-base lg:text-lg">
                {{ packet.short_description }}
              </p>
            </div>
            <div class="packet-poins">
              <ul v-if="packet.perks">
                <li
                  v-for="(perks, index) in packet.perks.split(',')"
                  :key="index"
                  class="flex items-center my-4"
                >
                  <div
                    class="inline-block w-5 h-5 bg-yellow-900 rounded-full mr-4"
                  ></div>
                  <p class="font-semibold text-medium lg:text-lg">
                    {{ perks }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="body-content my-4 lg:my-8 break-words max-w-none prose lg:prose-lg"
          v-html="packet.description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packet: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style></style>
