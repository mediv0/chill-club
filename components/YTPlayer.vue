<script setup lang="ts">
/// @ts-nocheck
/// @ts-ignore
import { useBucket } from "@mediv0/v-bucket/dist/v-bucket.esm-browser.prod";

const bucket = useBucket();

const isPlayerReady = ref(false);
const player = ref(null);

const onPlayerIdChange = computed(() => bucket.getters["GET_YT_PLAYER_ID"]);
const playerState = computed(() => bucket.getters["GET_PLAYER_STATE"]);
const volume = computed(() => bucket.getters["GET_VOLUME"]);

watch(volume, (val) => {
  player.value.setVolume(val);
});

watch(onPlayerIdChange, (id) => {
  player.value.loadVideoById(id);
});

watch(playerState, (state) => {
  if (state === PLAYER_STATES.PAUSING) {
    player.value.pauseVideo();
  }

  if (state === PLAYER_STATES.PLAYING) {
    player.value.playVideo();
  }
});

const loadYoutubeScript = () => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    tag.onload = () => {
      resolve(true);
    };
    tag.onerror = () => {
      reject(false);
    };
    document.head.appendChild(tag);
  });
};

const loadPlayer = async () => {
  return new Promise((resolve, reject) => {
    window.YT.ready(() => {
      player.value = new YT.Player("ytPlayer", {
        height: "0",
        width: "0",
        playerVars: { autoplay: 1, controls: 0 },
        events: {
          onStateChange: onPlayerStateChange,
          onError: (e) => {
            console.log("error", e);
          },
          onReady: resolve,
        },
      });
    });
  });
};

const onPlayerStateChange = (e) => {
  bucket.commit("SET_PLAYER_STATE", e.data);
};

onMounted(async () => {
  await loadYoutubeScript();
  await loadPlayer();
  player.value.setVolume(volume.value);

  //   player.value.loadVideoById("kn59Yn55Pos");
  //   player.value.playVideo();
});
</script>

<template>
  <div id="ytPlayer" class="player"></div>
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
  width: 0px;
  height: 0px;
}
</style>
