<template>
  <div class="w-full max-w-6xl mx-auto my-12">
    <SwiperCustom>
      <div class="swiper-slide" v-for="(item, index) in movies">
        <div class="flex h-70 w-full overflow-hidden items-center">
          <div class="h-full w-[50%]">
            <img :src="item.Poster" class="object-cover h-full w-full" />
          </div>
          <div
            class="h-[80%] w-[50%] items-center overflow-hidden bg-black shadow-2xl p-4"
          >
            <h5>
              ⭐
              {{ Math.round(Math.random() * 10) + "." + Math.round(Math.random() * 10) }}
            </h5>
            <h1 class="text-[20px] font-medium">{{ item.Title }}</h1>
            <p class="text-[16px]">{{ item.Year }}</p>
          </div>
        </div>
      </div>
    </SwiperCustom>
  </div>
</template>

<script lang="ts"></script>

<script lang="ts" setup>
const movies: any = await useMovieList();
</script>

<style></style>
