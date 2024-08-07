<script setup lang="ts">
const emit = defineEmits(["changeBackground"]);

// event fns
const changeBackground = () => {
  emit("changeBackground");
};

// listeners
const keydownListener = (e: KeyboardEvent) => {
  if (e.key === "g") {
    changeBackground();
  }
};

onMounted(() => {
  window.addEventListener("keydown", keydownListener);
});
onUnmounted(() => {
  window.removeEventListener("keydown", keydownListener);
});
</script>

<template>
    <div></div>
</template>
