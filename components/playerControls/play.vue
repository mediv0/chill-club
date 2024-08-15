<script setup lang="ts">
import { PlayIcon, PauseIcon } from "@placetopay/iconsax-vue/bulk";

const isPlaying = ref(false);
</script>

<template>
  <div
    class="flex items-center justify-center player_button"
    @click="() => (isPlaying = !isPlaying)"
  >
    <PlayIcon v-if="!isPlaying" class="player_button_icon" />
    <PauseIcon v-else class="player_button_icon" />
  </div>
</template>
