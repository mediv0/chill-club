<script setup lang="ts">
import { PlayIcon, PauseIcon } from "@placetopay/iconsax-vue/bulk";
import Loading from "../elements/Loading.vue";
import { useBucket } from "@mediv0/v-bucket/dist/v-bucket.esm-browser.prod";
import type { CurrentActiveStation } from "~/types";

const bucket = useBucket();
const currentPlayerState = computed(() => bucket.getters["GET_PLAYER_STATE"]);

const isPlaying = () => {
  const state = bucket.getters["GET_PLAYER_STATE"];
  if (state === PLAYER_STATES.PLAYING) return true;
  return false;
};

const isPaused = () => {
  const state = bucket.getters["GET_PLAYER_STATE"];
  if (state === PLAYER_STATES.PAUSE) return true;
  return false;
};

const onPlayButtonClickHandler = () => {
  if (isPlaying()) {
    bucket.commit("SET_PLAYER_STATE", PLAYER_STATES.PAUSING);
  } else if (isPaused()) {
    bucket.commit("SET_PLAYER_STATE", PLAYER_STATES.PLAYING);
  }

  let activeStation: CurrentActiveStation =
    bucket.getters["GET_ACTIVE_STATION"];

  bucket.commit("SET_YT_PLAYER_ID", activeStation.id);
};
</script>

<template>
  <div
    class="flex items-center justify-center player_button"
    @click="onPlayButtonClickHandler"
  >
    <PlayIcon
      v-if="
        currentPlayerState === PLAYER_STATES.IDLE ||
        currentPlayerState === PLAYER_STATES.PAUSE
      "
      class="player_button_icon"
    />
    <PauseIcon
      v-if="currentPlayerState === PLAYER_STATES.PLAYING"
      class="player_button_icon"
    />
    <Loading
      v-if="
        currentPlayerState === PLAYER_STATES.BUFFERING ||
        currentPlayerState === PLAYER_STATES.UNSTARTED
      "
    />
  </div>
</template>
