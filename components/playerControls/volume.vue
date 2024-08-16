<script setup lang="ts">
import {
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeLow1Icon,
  VolumeMuteIcon,
} from "@placetopay/iconsax-vue/bulk";
import { onClickOutside } from "@vueuse/core";

const isVolumeSliderOpen = ref(false);
const volumeSlider = ref<HTMLDivElement | null>(null);
const volumeValue = ref(71);

const currentVolumeIcon = computed(() => {
  // i know i can do it with a fkign array of object or object or hash map, get that uncle bob cleancode  shit out of here
  if (volumeValue.value > 70) {
    return VolumeHighIcon;
  } else if (volumeValue.value > 30) {
    return VolumeLow1Icon;
  } else if (volumeValue.value > 1) {
    return VolumeLowIcon;
  } else {
    return VolumeMuteIcon;
  }
});

onClickOutside(volumeSlider, (e: MouseEvent) => {
  e.stopPropagation();
  isVolumeSliderOpen.value = false;
});
</script>

<template>
  <div class="relative">
    <div
      class="relative z-10 flex items-center justify-center player_button"
      @click="() => (isVolumeSliderOpen = !isVolumeSliderOpen)"
    >
      <component :is="currentVolumeIcon" class="player_button_icon" />
    </div>

    <Transition name="scale">
      <div
        v-if="isVolumeSliderOpen"
        ref="volumeSlider"
        class="absolute left-0 bottom-0 w-[50px] h-[200px] bg-white shadow-2xl rounded-full"
      >
        <input
          v-model="volumeValue"
          type="range"
          step="1"
          min="1"
          max="100"
          class="vertical-slider"
        />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.vertical-slider {
  width: 125px; /* Make the track height 100% of the container */
  height: 5px; /* Thumb width */
  background: transparent; /* Remove the default background */
  transform: rotate(270deg); /* Rotate to make it vertical */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(270deg);
  accent-color: var(--color-primary);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  scale: 0;
  transform-origin: center bottom;
}
</style>
