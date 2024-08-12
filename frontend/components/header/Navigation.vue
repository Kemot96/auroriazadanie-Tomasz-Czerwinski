<script setup>
const route = useRoute();
</script>

<template>
  <header>
    <nav class="flex justify-start shadow-xl-gray w-full">
      <HeaderLink
        label="Lista"
        href="/"
        :currentRoute="route.name === 'index'"
      ></HeaderLink>
      <HeaderLink
        label="Wyszukaj"
        href="/search"
        :currentRoute="route.name === 'search'"
      ></HeaderLink>
    </nav>
  </header>
</template>
