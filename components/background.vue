<script setup lang="ts">
const backgrounds = shallowRef([1, 2, 3, 4,5,6,7,8,9,10,11]);

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

onMounted(() => {
  setInterval(() => {
    changeBackgroundImage();
  }, 1000);
});


</script>

<template>
  <div
    class="relative bg-red inset-0 w-full h-screen select-none pointer-events-none"
  >
    <img
    alt="background image"
      :src="`../backgrounds/${primaryBackground}.gif`"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <img
      alt="preload"
      :src="`../backgrounds/${secondaryBackground}.gif`"
      class="absolute inset-0 w-full h-full object-cover invisible`"
    />
  </div>
</template>
