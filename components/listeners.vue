<script setup lang="ts">
import { useBucket } from "@mediv0/v-bucket";

const emit = defineEmits(["changeBackground"]);

const bucket = useBucket();

const activeStationIndex = computed(
  () => bucket.getters["GET_ACTIVE_STATION_INDEX"]
);

// event fns
const changeBackground = () => {
  emit("changeBackground");
};

// listeners
const keydownListener = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    bucket.commit("CLOSE_DRAWER");
    bucket.commit("SET_ACTIVE_APP", SUBMODULE.NONE);
  }
  if (e.key === "g") changeBackground();

  if (e.key === "s") {
    const drawerHeight = bucket.getters["GET_DRAWER_HEIGHT"];
    const activeApp = bucket.getters["GET_ACTIVE_APP"];

    if (drawerHeight > 0 && activeApp === SUBMODULE.STATIONS) {
      bucket.dispatch("CLOSE_STATION_VIEW");
    } else {
      bucket.dispatch("SHOW_ALL_STATIONS");
    }
  }

  if (e.key === "ArrowRight") {
    bucket.dispatch("GET_NEXT_STATION_TO_PLAY", activeStationIndex.value + 1);
  }

  if (e.key === "ArrowLeft") {
    bucket.dispatch("GET_NEXT_STATION_TO_PLAY", activeStationIndex.value - 1);
  }
};

onMounted(() => {
  window.addEventListener("keydown", keydownListener);
});
onUnmounted(() => {
  window.removeEventListener("keydown", keydownListener);
});
</script>

<template>
  <div class="listener_container relative z-10 px-[70px] mt-[20px] space-y-2">
    <li class="listeners_item">[G] Change Background</li>
    <li class="listeners_item">[Arrow Right] Next Station</li>
    <li class="listeners_item">[Arrow Left] Previous Station</li>
    <li class="listeners_item">[S] See all Stations</li>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/query.scss";
.listener_container {
  @include query(710px) {
    text-align: center;
  }
}
</style>
