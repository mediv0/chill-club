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
  <div class="relative z-10 px-[70px] mt-[20px] space-y-2">
    <li class="listeners_item">[G] Change Background</li>
    <li class="listeners_item">[N] Next Station</li>
    <li class="listeners_item">[B] Previous Station</li>
    <li class="listeners_item">[S] See all stations</li>
    <li class="listeners_item">[J] Open Journal App</li>
    <li class="listeners_item">[T] Open Todo App</li>
    <li class="listeners_item">[K] Open Komodoro timer</li>
  </div>
</template>
