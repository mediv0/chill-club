<template>
    <div class="player">
        <ytPlayer ref="player" />
        <loading />
        <controls @notify_stop="stop" @notify_resume="resume" />
        <player-info />
    </div>
</template>

<script>
import controls from "@/components/player/controls.vue";
import playerInfo from "@/components/player/info.vue";
import loading from "@/components/player/loading.vue";
import ytPlayer from "@/components/player/ytPlayer.vue";
export default {
    components: {
        controls,
        playerInfo,
        loading,
        ytPlayer,
    },
    computed: {
        getActiveMusic() {
            return this.$store.getters["player/activeMusic"];
        },
    },
    watch: {
        getActiveMusic(music) {
            this.play(music);
        },
    },
    methods: {
        // handle yt player
        play(music) {
            this.$store.commit("player/SET_PLAYING", true);
            this.$refs.player.loadById(music.id);
        },
        resume() {
            this.$refs.player.resume();
        },
        stop() {
            this.$refs.player.pause();
        },
    },
};
</script>

<style lang="scss" scoped>
.player {
    position: relative;
    margin-top: 152px;
}
</style>
