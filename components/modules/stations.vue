<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useBucket } from "@mediv0/v-bucket/dist/v-bucket.esm-browser.prod";
import StationCard from "../cards/stationCard.vue";
import type { StationsApiResponse } from "~/types";

const bucket = useBucket();

const {
  isFetching,
  error,
  data: stations,
} = useFetch<StationsApiResponse>(
  "https://raw.githubusercontent.com/XeniacDev/ChillClubFmRadioList/main/radio.json",
  {
    afterFetch(ctx) {
      const _rawData = ctx.data as string;
      const jsonData: StationsApiResponse = JSON.parse(_rawData);
      const count = jsonData.data.length;
      bucket.commit("SET_STATIONS", jsonData.data);

      ctx.data = jsonData;
      return ctx;
    },
  }
);
</script>

<template>
  <div class="custom_scroll_bar h-full overflow-auto">
    <h1 class="text-[16px] font-semibold">All available stations</h1>

    <p v-if="isFetching">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>

    <div v-else class="mt-[30px] space-y-[30px]">
      <StationCard
        v-for="(station, i) in stations?.data"
        :key="i"
        :station="station"
        :index="i"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom_scroll_bar::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.custom_scroll_bar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.custom_scroll_bar::-webkit-scrollbar-thumb {
  background: #000000;
}

/* Handle on hover */
.custom_scroll_bar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
