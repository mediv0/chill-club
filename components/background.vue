<script setup lang="ts">
const backgrounds = shallowRef([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

const primaryBackground = ref(backgrounds.value[0]);
const secondaryBackground = ref(backgrounds.value[1]);

const generateRandomNumber = () => {
  let number = Math.floor(Math.random() * backgrounds.value.length) + 1;
  if (number === primaryBackground.value) {
    number = generateRandomNumber();
  }
  return number;
};

const changeBackgroundImage = () => {
  primaryBackground.value = secondaryBackground.value;
  secondaryBackground.value = generateRandomNumber();
};

defineExpose({
  changeBackgroundImage,
});
</script>

<template>
  <div
    class="absolute bg-red inset-0 w-full h-screen select-none pointer-events-none"
  >
    <img
      alt="background image"
      :src="`../backgrounds/${primaryBackground}.gif`"
      class="background_cover_full"
    />

    <img
      alt="preload"
      :src="`../backgrounds/${secondaryBackground}.gif`"
      class="background_cover_full invisible`"
    />
  </div>
</template>
