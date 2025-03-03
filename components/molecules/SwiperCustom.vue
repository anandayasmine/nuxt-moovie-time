<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot />
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
import Swiper from "swiper";
export default {
  mounted() {
    const swiper = new Swiper(".swiper", {
      effect: "coverflow",
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      pagination: true,
      loop: true,
      coverflowEffect: {
        slideShadows: false,
        rotate: 0,
        depth: 350,
        stretch: -100,
      },
    });
  },
};
</script>

<style scoped></style>
