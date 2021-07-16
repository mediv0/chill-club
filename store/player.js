export const state = () => ({
    // default category
    category: "Study & Chill",
    playing: null,
    // checks if music loaded in yt player or not
    isMusicRdy: false,
    activeMusic: null,
    // list of all musics
    playList: null,
    isMusicPlayerAuthorized: false,
    // player volume
    volume: 70,
});

export const mutations = {
    SET_CATEGORY(state, category) {
        state.category = category;
    },
    SET_PLAYING(state, playing) {
        state.playing = playing;
    },
    SET_MUSIC_RDY(state, isMusicRdy) {
        state.isMusicRdy = isMusicRdy;
    },
    SET_PAYLIST(state, playList) {
        state.playList = playList;
    },
    SET_IS_MUSIC_PLAYER_AUTHORIZED(state, isMusicPlayerAuthorized) {
        state.isMusicPlayerAuthorized = isMusicPlayerAuthorized;
    },
    SET_ACTIVE_MUSIC(state, activeMusic) {
        state.activeMusic = activeMusic;
    },
    SET_VOLUME(state, volume) {
        state.volume = volume;
    }
};

export const actions = {
    setActiveMusic({ commit, getters }, music) {
        if (getters.isMusicPlayerAuthorized) {
            commit("SET_ACTIVE_MUSIC", music);
        }
    },
    setDefaultActiveMusic({ commit, getters }) {
        if (getters.isMusicPlayerAuthorized) {
            const category = getters.category;
            const music = getters.playList.find((music) => music.category === category);
            commit("SET_ACTIVE_MUSIC", music);
        }
    },
};

export const getters = {
    category: (state) => state.category,
    playing: (state) => state.playing,
    isMusicRdy: (state) => state.isMusicRdy,
    playList: (state) => state.playList,
    isMusicPlayerAuthorized: (state) => state.isMusicPlayerAuthorized,
    activeMusic: (state) => state.activeMusic,
    volume: (state) => state.volume,
};
