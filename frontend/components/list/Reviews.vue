<script setup>
const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="md:flex flex-2 flex-col">
    <div class="shadow-xl-gray rounded-xl px-8">
      <div
        v-for="review in props.reviews"
        :key="review.id"
        :rating="review.rating"
        class="border-t first:border-t-0 py-7 flex flex-row"
      >
        <ReviewRating :rating="review.rating"></ReviewRating>
        <div class="px-7 w-full">
          <div class="text-paragraph">
            {{ review.description }}
          </div>
          <div class="text-placeholder mt-1 text-sm">
            ~{{ review.name }} {{ review.rate_date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
