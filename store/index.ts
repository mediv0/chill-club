/// @ts-ignore
/// @ts-nocheck

import { createBucket } from "@mediv0/v-bucket";
import type { CurrentActiveStation, Station } from "~/types";

const bucket = createBucket({
  states: {
    drawerHeight: 0,
    volume: 70, // player default volume
    activeApp: SUBMODULE.STATIONS, // active sub-app module that opens with drawer
    activeStation: null, // active station to play music and cache current session;
    stations: [], // list of all stations
    activeStationIndex: -1, // to play next/previous station
    currentYTPlayerId: null,
    YTPlayerState: PLAYER_STATES.IDLE,
  },
  mutations: {
    SET_DRAWER_HEIGHT(state, height) {
      state.drawerHeight = height;
    },
    CLOSE_DRAWER(state) {
      state.drawerHeight = 0;
    },
    SET_ACTIVE_APP(state, app) {
      state.activeApp = app;
    },
    SET_ACTIVE_STATION(state, station) {
      state.activeStation = station;
    },
    SET_ACTIVE_STATION_INDEX(state, index) {
      state.activeStationIndex = index;
    },
    SET_YT_PLAYER_ID(state, id) {
      state.currentYTPlayerId = id;
    },
    SET_PLAYER_STATE(state, status) {
      state.YTPlayerState = status;
    },
    SET_VOLUME(state, volume) {
      state.volume = volume;
    },
    SET_STATIONS(state, stations) {
      state.stations = stations;
    },
  },
  actions: {
    SET_ACTIVE_STATION(
      { commit },
      { station, index }: { station: Station; index: Number }
    ) {
      const cachedStation: CurrentActiveStation = {
        id: station.id,
        title: station.title,
        name: station.author.name,
        avatar: station.author.avatar,
      };

      commit("SET_ACTIVE_STATION", cachedStation);
      commit("SET_ACTIVE_STATION_INDEX", index);
      commit("CLOSE_DRAWER");
      commit("SET_YT_PLAYER_ID", station.id);

      // cache for when user reloads the page
      localStorage.setItem("activeStation", JSON.stringify(cachedStation));
      localStorage.setItem("activeStationIndex", index);
    },

    GET_NEXT_STATION_TO_PLAY({ commit, getters }, index) {
      const stations = getters["GET_STATIONS"];
      const count = stations.length;
      let _index = index;

      if (index < 0) {
        _index = 0;
      }

      if (index >= count) {
        _index = count - 1;
      }

      const station = stations[_index];

      const cachedStation: CurrentActiveStation = {
        id: station.id,
        title: station.title,
        name: station.author.name,
        avatar: station.author.avatar,
      };

      commit("SET_ACTIVE_STATION", cachedStation);
      commit("SET_ACTIVE_STATION_INDEX", _index);
      commit("CLOSE_DRAWER");
      commit("SET_YT_PLAYER_ID", cachedStation.id);

      localStorage.setItem("activeStation", JSON.stringify(cachedStation));
      localStorage.setItem("activeStationIndex", _index);
    },

    SHOW_ALL_STATIONS({ commit }, _) {
      commit("SET_DRAWER_HEIGHT", 582);
      commit("SET_ACTIVE_APP", SUBMODULE.STATIONS);
    },

    CLOSE_STATION_VIEW({ commit }, _) {
      commit("SET_DRAWER_HEIGHT", 0);
      commit("SET_ACTIVE_APP", SUBMODULE.NONE);
    },
  },
  getters: {
    GET_DRAWER_HEIGHT(state) {
      return state.drawerHeight;
    },
    GET_ACTIVE_APP(state) {
      return state.activeApp;
    },
    GET_ACTIVE_STATION(state) {
      return state.activeStation;
    },
    GET_ACTIVE_STATION_INDEX(state) {
      return state.activeStationIndex;
    },
    GET_YT_PLAYER_ID(state) {
      return state.currentYTPlayerId;
    },
    GET_PLAYER_STATE(state) {
      return state.YTPlayerState;
    },
    GET_VOLUME(state) {
      return state.volume;
    },
    GET_STATIONS(state) {
      return state.stations;
    },
  },
});
export default bucket;
