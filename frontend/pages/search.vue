<script setup lang="ts">
const review: Ref<ReviewEntityInterface> | Ref<null> | Ref<undefined> =
  useState("review", () => undefined);
</script>

<template>
  <section>
    <div class="flex flex-col py-24 md:px-40">
      <SearchInput></SearchInput>
      <div class="md:flex flex-2 flex-col mt-8">
        <div class="shadow-xl-gray rounded-xl px-8">
          <div
            v-if="review"
            :rating="review.rating"
            class="border-t first:border-t-0 py-7"
          >
            <div class="flex flex-row items-center gap-10">
              <ReviewRating :rating="review.rating"></ReviewRating>
              <div class="font-semibold">{{ review.name }}</div>
              <div class="ml-auto">
                id: <span class="font-bold">{{ review.id }}</span>
              </div>
            </div>
            <div class="text-paragraph mt-3">
              {{ review.description }}
            </div>
            <div class="text-placeholder mt-3">{{ review.rate_date }}</div>
          </div>
        </div>
      </div>
      <div v-if="review === null">Nie znaleziono opinii o podanym ID.</div>
    </div>
  </section>
</template>
