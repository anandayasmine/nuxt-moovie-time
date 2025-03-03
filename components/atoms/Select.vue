<template>
  <div :class="`grid shrink-0 grid-cols-1 focus-within:relative ${props.class}`">
    <select
      :id="props.id"
      :name="props.name"
      :aria-label="props.ariaLabel"
      class="bg-[#E0E0E0]/13 col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    >
      <option v-for="(option, index) in props.options" :value="option?.value">
        {{ option?.label }}
      </option>
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
</template>

<script lang="ts" setup>
const props = defineProps({
  class: String,
  id: String,
  name: String,
  ariaLabel: String,
  options: Array<{value: string, label: string}>,
});
</script>

<style></style>
