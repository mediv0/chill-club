const currentlyPlaying = {
    computed: {
        currentlyPlaying() {
            return this.$store.getters["player/activeMusic"];
        },
    },
};

export default currentlyPlaying;
