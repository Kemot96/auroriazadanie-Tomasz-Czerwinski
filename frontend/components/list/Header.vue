<script setup lang="ts">
const props = defineProps({
  totalReviews: {
    type: Number,
    required: true,
  },
});

let reviewString = "";
if(props.totalReviews === 1)
{
  reviewString=" opinia";
}
else if(props.totalReviews >= 2 && props.totalReviews <= 4)
{
  reviewString=" opinie";
}
else if(props.totalReviews >= 5)
{
  reviewString=" opinii";
}
const headerText = props.totalReviews + reviewString;
</script>


<template>
          <div class="flex flex-col w-full items-center">
        <h2 class="text-lg md:text-2xl flex flex-col text-center">
          Wasze opinie
        </h2>
        <div class="flex flex-row gap-1">
          <img width="12px" src="/icons/star.svg" v-for="n in 5"></img>
          <span class="ml-2 text-placeholder"> ({{ headerText }}) </span>
        </div>
      </div>
</template>