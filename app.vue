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
    <Navbar />
    <Loading @contentLoaded="isLoadingDone = true" v-if="!isLoadingDone" />
    <Listeners @changeBackground="changeBackground" />
    <ContentFrame class="content_frame mb-[50px]" />

    <Background ref="backgroundRef" class="select-none pointer-events-none" />
    <noise />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/query.scss";


.content_frame {
  @include query(654px) {
    margin-bottom: 0px;
  }
}
</style>
