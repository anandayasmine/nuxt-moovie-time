<template>
  <div class="bg-white/5">
    <div class="w-full max-w-6xl m-auto py-4 flex gap-6 justify-between items-center">
      <a href="/">
        <img src="/images/logo-primary.svg" />
      </a>
      <Input
        placeholder="Find movie"
        startIcon="/images/icon-movie.svg"
        endIcon="/images/icon-magnifying-glass.svg"
        class="w-full flex-1"
      />
      <div class="flex gap-6">
        <a
          v-for="(menu, index) in menus"
          class="cursor-pointer flex gap-2 items-center uppercase"
          :href="menu.href"
        >
          <img v-if="menu?.icon" :src="menu.icon" />
          <p class="text-xs">
            {{ menu.label }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { menus } from "~/constant/menus";
</script>

<style></style>
