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
        }
    },
    watch: {
        volume(volume) {
            this.player.setVolume(volume);
        }
    },
    async mounted() {
        await this.loadScript();
        window.YT.ready(() => {
            this.loadPlayer();
        });
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

        loadPlayer() {
            this.player = new YT.Player("ytPlayer", {
                height: "0",
                width: "0",
                playerVars: { autoplay: 1, controls: 0 },
                events: {
                    onStateChange: this.onPlayerStateChange,
                    onReady: this.onPlayerReady,
                },
            });
        },
        onPlayerReady() {
            this.player.setVolume(70);
        },
        onPlayerStateChange(e) {
            if (e.data === 1) {
                // loaded
                this.$store.commit("player/SET_MUSIC_RDY", true);
            } else if (e.data === -1 || e.data === 3) {
                this.$store.commit("player/SET_MUSIC_RDY", false);
            }
        },
        loadById(id) {
            this.player.loadVideoById(id);
        },
        pause() {
            this.player.pauseVideo();
        },
        resume() {
            this.player.playVideo();
        },
        setVolume(volume) {
            this.player.setVolume(volume);
        }
    },
};
</script>

<style lang="scss">
iframe#ytPlayer {
    position: absolute !important;
    top: 0 !important;
}
</style>
