<script setup lang="ts">
import Play from "./playerControls/play.vue";
import Volume from "./playerControls/volume.vue";
import { useBucket } from "@mediv0/v-bucket";
import type { CurrentActiveStation, Station } from "@/types";

const bucket = useBucket();
const activeStation = ref<CurrentActiveStation | null>(null);

onMounted(() => {
  const cachedStation = localStorage.getItem("activeStation");
  const cachedStationIndex = localStorage.getItem("activeStationIndex");

  if (!cachedStation) {
    // show stations so user can select one
    bucket.commit("SET_DRAWER_HEIGHT", 582);
    return;
  }
  activeStation.value = JSON.parse(cachedStation);
  bucket.commit("SET_ACTIVE_STATION", activeStation.value);
  bucket.commit("SET_ACTIVE_STATION_INDEX", parseInt(cachedStationIndex!));
});

const onActiveStationChange = computed(() => {
  return bucket.getters["GET_ACTIVE_STATION"];
});

watch(onActiveStationChange, (newStation: CurrentActiveStation) => {
  if (newStation) {
    activeStation.value = newStation;
  }
});
</script>

<template>
  <div
    class="player flex items-center justify-between w-full bg-white rounded-full px-[46px] py-[20px]"
  >
    <div class="flex items-center">
      <div v-if="!activeStation" class="avatar"></div>
      <img
        v-else
        :src="activeStation.avatar"
        alt="station logo"
        class="avatar"
      />
      <div class="font-medium ml-[20px]">
        <p class="text-[15px] line-clamp-1">
          {{
            !activeStation ? "Choose a station to play" : activeStation.title
          }}
        </p>
        <p class="text-[13px] text-gray-1">
          {{ !activeStation ? "..." : activeStation.name }}
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <Play class="mr-[5px]" />
      <Volume />
    </div>

    <YTPlayer />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/query.scss";

.player {
  -webkit-box-shadow: 0px -21px 64px -10px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px -21px 64px -10px rgba(0, 0, 0, 0.24);
  box-shadow: 0px -21px 64px -10px rgba(0, 0, 0, 0.24);

  @include query(654px) {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;

    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }
}

.avatar {
  @apply w-[61px] h-[61px] bg-[#dbdbdb] rounded-full pointer-events-none select-none;
}
</style>
