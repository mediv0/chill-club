<template>
    <div class="player">
        <ytPlayer ref="player" />
        <loading />
        <controls @notify_stop="stop" @notify_resume="resume" @play_prev_video="prev" @play_next_video="next" />
        <player-info />
    </div>
</template>

<script>
import controls from "@/components/player/controls.vue";
import playerInfo from "@/components/player/info.vue";
import loading from "@/components/player/loading.vue";
import ytPlayer from "@/components/player/ytPlayer.vue";
import { events } from "@/plugins/bus";
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
    mounted() {
        this.initShortkeyEvents();
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
        next() {
            this.playMusicByState("next");
        },
        prev() {
            this.playMusicByState("prev");
        },
        playMusicByState(state) {
            const activeMusicIndex = this.$store.getters["player/activeIndex"];
            const index = state === "next" ? activeMusicIndex + 1 : activeMusicIndex - 1;
            const playList = this.$store.getters["player/activePlaylist"];

            if (playList[index]) {
                const nextMusicToPlay = playList[index];
                // mutating the state in vuex will call play automatically
                this.$store.dispatch("player/setActiveMusic", { music: nextMusicToPlay, index });
            }
        },
        initShortkeyEvents() {
            events.$on("seek-forward", this.next);
            events.$on("seek-backward", this.prev);
        }
    },
};
</script>

<style lang="scss" scoped>
.player {
    position: relative;
    margin-top: 152px;
    @include query_IPad() {
        margin-top: 0;
    }
}
</style>
