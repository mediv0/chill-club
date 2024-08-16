/// @ts-ignore
/// @ts-nocheck

import { createBucket } from "@mediv0/v-bucket";

const bucket = createBucket({
  states: {
    drawerHeight: 0,
  },
  mutations: {
    SET_DRAWER_HEIGHT(state, height) {
      state.drawerHeight = height;
    },
    CLOSE_DRAWER(state) {
      state.drawerHeight = 0;
    },
  },
  getters: {
    GET_DRAWER_HEIGHT(state) {
      return state.drawerHeight;
    },
  },
});
export default bucket;
