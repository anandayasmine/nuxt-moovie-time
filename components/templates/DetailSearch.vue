<template>
  <div class="relative h-full w-full pt-24 mb-24">
    <div class="bg-white/5 absolute top-0 left-0 w-full h-[30%]"></div>
    <div class="w-full max-w-6xl m-auto gap-12 grid relative z-10">
      <div class="flex justify-between gap-4">
        <div class="grid gap-2">
          <hr class="text-[#E74C3C] border-3 w-20" />
          <h2 class="text-[36px] font-medium text-white capitalize">{{ props.title }}</h2>
        </div>
      </div>
      <div class="flex gap-8">
        <div
          class="bg-[linear-gradient(180deg,_#0E1723_0%,_rgba(30,_35,_42,_0)_100%)] w-100 h-screen rounded-[8px]"
        >
          <div class="p-4 border-b border-white/7">
            <h5>Sort Result By</h5>
          </div>
          <Select
            class="p-4 border-b border-white/7"
            id="sortBy"
            name="sortBy"
            ariaLabel="Sort By"
            :options="options"
          />
          <div class="p-4 border-b border-white/7">
            <h5>Genres</h5>
          </div>
          <ul class="p-4 border-b border-white/7 gap-4 grid">
            <li
              v-for="(category, index) in categories"
              class="flex justify-between gap-1 cursor-pointer"
            >
              <label :for="category.label" class="cursor-pointer w-full">{{
                category.label
              }}</label>
              <input type="checkbox" :id="category.label" class="accent-[#E74C3C]" />
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-x-6 gap-y-10 grow w-full">
          <div
            v-if="movies?.length > 0"
            class="test w-[22%] shrink"
            v-for="(movie, index) in movies"
          >
            <CardMovie :movie="movie" />
          </div>
          <div>Not found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { categories } from "~/constant/categories";
const props = defineProps({
  type: String,
  title: String,
});
const movies: any = await useMovieList({
  query: {
    type: props.type,
  },
});
const options = [
  {
    value: "popularity",
    label: "Popularity",
  },
  {
    value: "releaseDate",
    label: "Release Date",
  },
];
</script>

<style></style>
