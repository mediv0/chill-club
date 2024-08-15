<script setup lang="ts">
import Play from "./playerControls/play.vue";
import Volume from "./playerControls/volume.vue";
</script>

<template>
  <div
    class="flex items-center justify-between w-full bg-white rounded-full px-[46px] py-[20px]"
  >
    <div class="flex items-center">
      <img
        src="https://picsum.photos/200/300"
        alt="player"
        class="w-[61px] h-[61px] rounded-full pointer-events-none select-none"
      />
      <div class="font-medium ml-[20px]">
        <p class="text-[15px] line-clamp-1">Chillhop Relaxing Raccoon</p>
        <p class="text-[13px] text-gray-1">Sad, Sleepy, Lofy</p>
      </div>
    </div>
    <div class="flex items-center">
      <Play class="mr-[5px]" />
      <Volume />
    </div>
  </div>
</template>
