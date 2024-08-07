<script setup lang="ts">
const emit = defineEmits(["contentLoaded"]);

const loadingContainer = ref<HTMLDivElement>();
const isLoaded = ref(false);


const animationendHandler = () => {
    emit("contentLoaded");
}

onMounted(() => {
  document.addEventListener("readystatechange", (event) => {
    const target = event.target as Document;
    if (target.readyState === "complete") {
      isLoaded.value = true;
    }
  });
});

const classes = computed(() => {
  return [
    "pointer-events-none",
    "select-none",
    "loading",
    "z-50",
    "absolute",
    "inset-0",
    "bg-black",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    { exitFade: isLoaded.value },
  ];
});
</script>

<template>
  <div ref="loadingContainer" @animationend="animationendHandler" :class="classes">
    <h1 class="text-center text-yellow-300 italic">
      "Generating Your Experience"
    </h1>
    <p class="text-[16px] text-white">Please wait. . .</p>
  </div>
</template>

<style scoped lang="scss">
.loading {
  background: url("../assets/loading noise.gif") no-repeat center;
  background-size: cover;
  font-size: clamp(1rem, 10vw, 4rem);
}

.exitFade {
  animation: move 0.5s ease-in-out forwards;
}

@keyframes move {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
