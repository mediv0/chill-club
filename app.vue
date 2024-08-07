<script setup lang="ts">
import background from "./components/background.vue";
import Listeners from "./components/listeners.vue";

const backgroundRef = ref<InstanceType<typeof background>>();
const isLoadingDone = ref<boolean>(false);

const changeBackground = () => {
  backgroundRef.value?.changeBackgroundImage();
};
</script>

<template>
  <div>
    <Loading @contentLoaded="isLoadingDone = true" v-if="!isLoadingDone" />
    <Listeners @changeBackground="changeBackground" />
    <Background ref="backgroundRef" />
    <noise />
  </div>
</template>
