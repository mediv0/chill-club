<template>
    <div id="ytPlayer" class="player"></div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            player: null,
        };
    },
    computed: {
        volume() {
            return this.$store.getters["player/volume"];
        },
    },
    watch: {
        volume(volume) {
            this.player.setVolume(volume);
        },
    },
    methods: {
        loadScript() {
            return new Promise((resolve, reject) => {
                const tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                tag.onload = () => {
                    resolve();
                };
            });
        },

        createYoutubePlayer() {
            return new Promise((resolve, reject) => {
                this.player = new YT.Player("ytPlayer", {
                    height: "0",
                    width: "0",
                    playerVars: { autoplay: 1, controls: 0 },
                    events: {
                        onStateChange: this.onPlayerStateChange,
                        onError: this.onPlayerError,
                        onReady: resolve,
                    },
                });
            });
        },
        onPlayerReady() {
            this.player.setVolume(70);
            this.player.loadVideoById("gnyW6uaUgk4");
        },
        onPlayerError() {
            this.$store.commit("player/SET_HAS_ERROR", true);
            this.$store.commit("player/SET_PLAYING", false);
        },
        onPlayerStateChange(e) {
            if (e.data === 1) {
                // loaded
                this.$store.commit("player/SET_HAS_ERROR", false);
                this.$store.commit("player/SET_MUSIC_RDY", true);
            } else if (e.data === -1 || e.data === 3) {
                this.$store.commit("player/SET_MUSIC_RDY", false);
            }
        },
        loadById(id) {
            if (!this.player) {
                this.fetchYTPlayer(id);
            } else {
                this.player.loadVideoById(id);
            }
        },
        async fetchYTPlayer(id) {
            await this.loadScript();
            window.YT.ready(this.loadPlayer.bind(this, id));
        },
        loadPlayer(id) {
            this.createYoutubePlayer().then(() => {
                this.onPlayerReady();
                this.loadById(id);
            });
        },
        pause() {
            this.player && this.player.pauseVideo();
        },
        resume() {
            this.player && this.player.playVideo();
        },
        setVolume(volume) {
            this.player && this.player.setVolume(volume);
        },
    },
};
</script>

<style lang="scss">
iframe#ytPlayer {
    position: absolute !important;
    top: 0 !important;
}
</style>
