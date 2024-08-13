<script setup lang="ts">
const props = defineProps({
    maxPage: {
      type: Number,
      required: true,
    },
  });

const currentPage: globalThis.Ref<number> = useState('currentPage');

const previousPageLabel = "< poprzednia strona";
const nextPageLabel = "następna strona >";

function nextPage() {
  currentPage.value += 1;
}

function previousPage() {
  currentPage.value -= 1;
}
</script>

<template>
    <div class="flex flex-col md:flex-row items-center mt-2 md:mt-6 justify-center gap-2 md:gap-12 w-full">
      <button v-show="currentPage !== 1" @click="previousPage"
        class="py-2 px-4 md:px-8 w-52 md:w-auto rounded-full hover:bg-amber-600 bg-secondary-400 text-white shadow-xl-gray">
        {{ previousPageLabel }}
      </button>
  
      <button v-show="currentPage === 1" tabindex="-1"
        class="py-2 px-4 md:px-8 w-52 md:w-auto rounded-full text-transparent bg-transparent shadow-none cursor-default">
        {{ previousPageLabel }}
      </button>
  
      <div class="flex flex-row items-center mt-2 md:mt-0 w-auto">
        <input disabled type="text" :value="currentPage"
          class="py-2 px-2 md:px-1 rounded-full shadow-xl-gray w-16 text-center">
        </input>
        <div class="px-2 md:px-4 text-center md:text-left">z {{ props.maxPage }}</div>
      </div>
  
      <button v-show="currentPage !== maxPage" @click="nextPage"
        class="py-2 px-4 md:px-8 w-52 md:w-auto rounded-full hover:bg-amber-600 bg-secondary-400 text-white shadow-xl-gray">
        {{ nextPageLabel }}
      </button>
  
      <button v-show="currentPage === maxPage" tabindex="-1"
        class="py-2 px-4 md:px-8 w-52 md:w-auto rounded-full text-transparent bg-transparent shadow-none cursor-default">
        {{ nextPageLabel }}
      </button>
    </div>
  </template>