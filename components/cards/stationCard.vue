<script setup lang="ts">
import type { Station } from "@/types";
import Label from "../elements/label.vue";
import { Link2Icon } from "@placetopay/iconsax-vue/outline";
import type { PropType } from "vue";
import { useBucket } from "@mediv0/v-bucket/dist/v-bucket.esm-browser.prod";

const bucket = useBucket();

const { station, index } = defineProps({
  station: {
    type: Object as PropType<Station>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const onStationSelected = () => {
  bucket.dispatch("SET_ACTIVE_STATION", { station, index });
};
</script>

<template>
  <div
    @click="onStationSelected"
    class="cursor-pointer flex items-center transition-colors ease-linear hover:bg-[#f7f9fa]"
  >
    <img
      class="w-[61px] h-[61px] bg-gray-1 rounded-[14px]"
      :src="station.author.avatar"
      alt="station logo"
    />
    <div class="ml-[17px] mr-auto">
      <p class="text-[14px]">{{ station.title }}</p>
      <div class="space-x-[5px] mt-[4px]">
        <Label v-for="(tag, i) in station.tags" :key="i" :text="tag" />
      </div>
    </div>

    <a target="_blank" :href="station.author.social.youtube"
      ><Link2Icon class="w-[24px] h-[24px] mr-[15px] text-gray-3"
    /></a>
  </div>
</template>
