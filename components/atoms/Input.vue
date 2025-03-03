<template>
  <div :class="props.class">
    <label
      for="price"
      v-if="props.label"
      class="block text-sm/6 font-medium text-gray-900"
      >Price</label
    >
    <div class="">
      <div
        class="bg-black/13 gap-3 flex items-center rounded-md pl-3 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
      >
        <div
          v-if="props.startIcon"
          class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
        >
          <img :src="props.startIcon" alt="Input start icon" class="opacity-17" />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-100 focus:outline-none sm:text-sm/6"
          :placeholder="props.placeholder"
        />
        <div v-if="props.unit" class="grid shrink-0 grid-cols-1 focus-within:relative">
          <select
            id="currency"
            name="currency"
            aria-label="Currency"
            class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
          <svg
            class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          v-if="props.endIcon"
          class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 mr-4"
        >
          <img :src="props.endIcon" alt="Input end icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: String,
  unit: String,
  label: String,
  placeholder: String,
  startIcon: String,
  endIcon: String,
});
</script>

<style></style>
