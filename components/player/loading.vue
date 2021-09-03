<template>
    <div class="player_loading">
        <div v-if="isMusicAvailable">
            <p v-if="!isMusicPlayerAuthorized">Press any key to play</p>
            <p v-else-if="!isMusicReadyToPlay">buffering...</p>
        </div>
        <p v-else>this stream cannot be played, try something else.</p>
    </div>
</template>

<script>
export default {
    // this stream cannot be played, try something else
    computed: {
        isMusicPlayerAuthorized() {
            return this.$store.getters["player/isMusicPlayerAuthorized"];
        },
        isMusicReadyToPlay() {
            return this.$store.getters["player/isMusicRdy"];
        },
        isMusicAvailable() {
            return !this.$store.getters["player/hasError"];
        },
    },
    mounted() {
        document.addEventListener("keypress", this.allowPlayerToPlay);
    },
    methods: {
        allowPlayerToPlay() {
            this.$store.commit("player/SET_IS_MUSIC_PLAYER_AUTHORIZED", true);
            this.$store.dispatch("player/setDefaultActiveMusic");
            document.removeEventListener("keypress", this.allowPlayerToPlay);
        },
    },
};
</script>

<style lang="scss" scoped>
.player_loading {
    position: absolute;
    z-index: 5;
    margin-bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
    width: 100%;
}
</style>
