<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  currentRoute: {
    type: Boolean,
    required: true,
  },
});

let cssStyles = "cursor-pointer border-b-2 w-52 text-center";
if (props.currentRoute) {
  cssStyles += " border-y-amber-600";
} else {
  cssStyles +=
    " hover:border-y-amber-600 border-white transition duration-300 ease-in-out";
}
</script>

<template>
  <div :class="cssStyles">
    <a :href="props.href" class="block px-5 py-4 text-sm lg:text-base">{{
      props.label
    }}</a>
  </div>
</template>
