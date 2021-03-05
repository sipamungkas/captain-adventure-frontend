<template>
  <div class="container mx-auto">
    <div class="category-wrapper mx-4">
      <div class="price-title">
        <h1 class="font-bold text-3xl md:text-5xl">Harga Paket</h1>
      </div>
      <div class="price-description">
        <h6 class="my-4 font-normal text-lg md:text-xl max-w-full md:w-7/12">
          Captain Adventure memiliki program yang menarik dan seru, untuk lebih
          jelasnya bisa lihat di bawah ini
        </h6>
      </div>
      <div class="price-list my-4">
        <div class="flex justify-center">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            <CategoryOdd
              v-for="(category, index) in categories"
              :key="category.id"
              :category="category"
              :odd="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
}
</script>

<style></style>
