export const state = () => ({
    isSliderChanging: false,
});

export const mutations = {
    SET_SLIDER_CHANGING(state, isSliderChanging) {
        state.isSliderChanging = isSliderChanging;
    },
};

export const getters = {
    isSliderChanging: (state) => state.isSliderChanging,
};
