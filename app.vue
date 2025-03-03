<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import "animate.css";
</script>

<script lang="ts">
export default {
  props: {},
  methods: {
    init() {
      try {
        AOS.init();
      } catch (err) {}
    },
  },
  mounted() {
    this.init();
  },
};
</script>
