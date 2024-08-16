<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRight1Icon,
} from "@placetopay/iconsax-vue/outline";
import { useBucket } from "@mediv0/v-bucket";

const bucket = useBucket();

const time = ref();

const setTime = () => {
  time.value = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

onMounted(() => {
  setTime();
  setInterval(setTime, 1000 * 60);
});

const loadAllStations = () => {
  bucket.commit("SET_DRAWER_HEIGHT", 582);
};

</script>

<template>
  <div class="absolute inset-0 z-[100] flex flex-col justify-end items-center">
    <p class="text-white text-[180px] select-none pointer-events-none">
      {{ time }}
    </p>
    <div
      class="container uppercase flex justify-between text-[15px] font-medium text-white"
    >
      <p class="glow_blue flex items-center cursor-pointer">
        <ArrowLeftIcon class="w-[28px] h-[28px] mr-[10px]" />
        Previous stations
      </p>
      <p class="glow_red cursor-pointer" @click="loadAllStations">
        See all stations
      </p>
      <p class="glow_blue flex items-center cursor-pointer">
        next station
        <ArrowRight1Icon class="w-[28px] h-[28px] ml-[10px]" />
      </p>
    </div>
    <Player class="container z-20" />
    <Drawer class="container" />
    <!-- <div></div>
    TBD -->
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 680px;
}
</style>
