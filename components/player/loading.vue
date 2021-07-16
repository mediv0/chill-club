<template>
    <div class="player_loading">
        <p v-if="!isMusicPlayerAuthorized">Press any key to play</p>
        <p v-else-if="!isMusicReadyToPlay">buffering...</p>
    </div>
</template>

<script>
export default {
    computed: {
        isMusicPlayerAuthorized() {
            return this.$store.getters["player/isMusicPlayerAuthorized"];
        },
        isMusicReadyToPlay() {
            return this.$store.getters["player/isMusicRdy"];
        },
    },
    mounted() {
        document.addEventListener("keypress", this.allowPlayerToPlay)
    },
    methods: {
        allowPlayerToPlay() {
            this.$store.commit("player/SET_IS_MUSIC_PLAYER_AUTHORIZED", true);
            this.$store.dispatch("player/setDefaultActiveMusic")
            document.removeEventListener("keypress", this.allowPlayer);
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
}
</style>
