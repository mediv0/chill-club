<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useBucket } from "@mediv0/v-bucket";
const bucket = useBucket();
const drawer = ref<HTMLDivElement | null>(null);

const drawerHeight = computed(() => bucket.getters["GET_DRAWER_HEIGHT"]);

onClickOutside(drawer, (e: MouseEvent) => {
  bucket.commit("CLOSE_DRAWER");
});
</script>

<template>
  <div
    ref="drawer"
    :style="{ height: `${drawerHeight}px` }"
    class="drawer absolute w-full h-[886px] bg-white rounded-[60px]"
  >
    drawer
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  bottom: 0;
  transition: all 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
