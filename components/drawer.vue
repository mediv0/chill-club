<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useBucket } from "@mediv0/v-bucket";
import Stations from "./modules/stations.vue";
const bucket = useBucket();
const drawer = ref<HTMLDivElement | null>(null);

const drawerHeight = computed(() => bucket.getters["GET_DRAWER_HEIGHT"]);
const subModule = computed(() => {
  const module = bucket.getters["GET_ACTIVE_APP"];

  if (module === SUBMODULE.STATIONS) {
    return Stations;
  }

  if (module === SUBMODULE.NONE) {
    return null;
  }
});

onClickOutside(drawer, (e: MouseEvent) => {
  bucket.commit("CLOSE_DRAWER");
  bucket.commit("SET_ACTIVE_APP", SUBMODULE.NONE);
});
</script>

<template>
  <div
    ref="drawer"
    :style="{ height: `${drawerHeight}px` }"
    class="drawer absolute w-full bg-white rounded-[60px]"
    :class="{
      'px-[50px] pt-[80px] pb-[130px]': drawerHeight > 0,
    }"
  >
    <transition name="slide-fade">
      <component :is="subModule" class="submodule px-[50px]" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/query.scss";
.drawer {
  bottom: 0;
  transition: all 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  @include query(560px) {
    padding: 50px 20px
  }

  @include query(410px) {
    border-radius: 30px;
    padding: 50px 20px
  }
}

.submodule {
  @include query(470px) {
    padding: 0px 10px
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10%);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
