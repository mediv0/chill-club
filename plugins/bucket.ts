import { defineNuxtPlugin } from "#app";
import bucket from "@/store/index";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(bucket);
});
