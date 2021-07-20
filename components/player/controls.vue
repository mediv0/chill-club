<template>
    <div class="controls">
        <next-icon class="controls__next controls__next--back" @click="prev" />
        <div class="controls__play" @click="playMusic">
            <play v-if="!isPlaying" class="controls__play__icon controls__play__icon--play" />
            <pause v-else class="controls__play__icon controls__play__icon--pause" />
            <div class="controls__play__pulse" :class="{ play_pulse_animation: isPlaying }"></div>
        </div>
        <next-icon class="controls__next controls__next--forward" @click="next" />
    </div>
</template>

<script>
import nextBtn from "@/assets/images/player/nextBtn.svg?inline";
import play from "@/assets/images/player/play.svg?inline";
import pause from "@/assets/images/player/pause.svg?inline";
import { events } from "@/plugins/bus";
export default {
    components: {
        nextIcon: nextBtn,
        play,
        pause,
    },
    computed: {
        isPlaying() {
            return this.$store.getters["player/playing"];
        },
    },
    mounted() {
        this.initShortkeyEvents();
    },
    methods: {
        playMusic() {
            this.$store.commit("player/SET_PLAYING", !this.isPlaying);

            if (this.isPlaying) {
                this.play();
            } else {
                this.pause();
            }
        },
        play() {
            if (!this.$store.getters["player/activeMusic"]) {
                this.$store.commit("player/SET_IS_MUSIC_PLAYER_AUTHORIZED", true);
                this.setDefaultMusic();
            } else {
                this.$emit("notify_resume");
            }
        },
        pause() {
            this.$emit("notify_stop");
        },

        setDefaultMusic() {
            this.$store.dispatch("player/setDefaultActiveMusic");
        },

        prev() {
            this.$emit("play_prev_video");
        },

        next() {
            this.$emit("play_next_video");
        },
        initShortkeyEvents() {
            events.$on("toggle-player", this.playMusic);
        }
    },
};
</script>

<style lang="scss" scoped>
@mixin setControlWidth() {
    width: 70px;
    height: 70px;
    min-width: 70px;
    min-height: 70px;
}
.controls {
    display: flex;
    align-items: center;
    justify-content: center;

    &__play {
        position: relative;
        z-index: 2;
        border-radius: 50%;
        background: white;
        margin: 0 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @include setControlWidth();
        @include query(286px) {
            margin: 0 25px;
        }

        &__pulse {
            position: absolute;
            background: transparent;
            border-radius: 50%;
            @include setControlWidth();
        }

        &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
            width: 92px;
            height: 92px;
            border: 4px solid white;
            left: -16%;
            top: -16%;
        }

        &__icon {
            &--play {
                margin-left: 5px;
                & > path {
                    fill: #4476ff;
                }
            }

            &--pause g rect {
                fill: #4476ff;
            }
        }
    }

    &__next {
        cursor: pointer;

        &--forward {
            transform: rotate(180deg);
        }
    }
}

.play_pulse_animation {
    animation: pulse-blue 2s infinite;
}
@keyframes pulse-blue {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
    }
    70% {
        transform: scale(1.3);
        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
    }
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
}
</style>
