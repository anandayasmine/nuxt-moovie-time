<template>
  <div class="relative h-full w-full pt-24">
    <div class="bg-white/5 absolute top-0 left-0 w-full h-[30%]"></div>
    <div class="w-full max-w-6xl m-auto gap-4 grid relative z-10">
      <div class="flex justify-between gap-4">
        <div class="grid gap-2">
          <hr class="text-[#E74C3C] border-3 w-30" />
          <h2 class="text-3xl font-medium text-white">Discover Movies</h2>
        </div>
        <div class="flex gap-4">
          <a href="#">
            <span
              class="inline-flex items-center rounded-[100px] bg-[#FF0000] px-4 py-2 text-xs font-medium text-white ring-1 ring-red-600/10 ring-inset"
            >
              Popularity
            </span>
          </a>
          <a href="#">
            <span
              class="inline-flex items-center rounded-[100px] bg-black/20 px-4 py-2 text-xs font-medium text-white"
            >
              Release Date
            </span>
          </a>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-x-6 gap-y-10">
          <div class="test w-[18.1%] shrink" v-for="(movie, index) in movies">
            <CardMovie :movie="movie" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const movies: any = await useMovieList({ query: { page: 3 } });
</script>

<style></style>
