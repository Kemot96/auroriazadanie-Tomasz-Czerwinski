<script setup>
const props = defineProps({
    rating: {
      type: Number,
      required: true,
    },
  });

  const rating = Math.round(props.rating);
  const ratingText = Math.round(props.rating * 10) / 10
</script>

<template>
    <div
        class="border border-secondary-400 rounded-md flex-shrink-0 w-20 h-14 flex flex-col items-center overflow-hidden">
        <div class="text-lg font-medium py-1">
            {{ratingText}}/5
        </div>
        <div class="flex flex-row bg-secondary-400 w-full justify-center py-1 rounded-b-md gap-1">
            <img src="/icons/white-star.svg" v-for="n in rating"></img>
        </div>
    </div>
</template>