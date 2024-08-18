<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p
    class="uppercase text-[12px] font-semibold rounded-[5px] px-[7px] py-[3px] bg-gray-2 inline-block"
  >
    {{ props.text }}
  </p>
</template>
