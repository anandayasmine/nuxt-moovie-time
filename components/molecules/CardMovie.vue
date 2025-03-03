<template>
  <div class="gap-4 grid">
    <div class="h-full w-full relative">
      <img
        :src="props.movie?.Poster"
        class="object-cover h-[300px] w-full"
        :alt="props.movie?.Title"
      />
      <div class="absolute right-0 top-0 bg-[#1E232B]/80 px-2 py-1">
        <h5>
          {{ Math.round(Math.random() * 10) + "." + Math.round(Math.random() * 10) }}
        </h5>
      </div>
    </div>
    <div class="h-fit w-full items-center overflow-hidden gap-1 grid">
      <h3 class="text-[16px]">{{ props.movie?.Title }}</h3>
      <p class="text-[14px] text-[#929292]">{{ props.movie?.Year }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  movie: Object,
});
</script>

<style></style>
