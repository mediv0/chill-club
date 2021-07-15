<template>
    <div class="controls">
        <next-icon class="controls__next controls__next--back" />
        <div class="controls__play" @click="isPlaying = !isPlaying">
            <play v-if="isPlaying" class="controls__play__icon controls__play__icon--play" />
            <pause v-else class="controls__play__icon controls__play__icon--pause" />
            <div class="controls__play__pulse" :class="{ play_pulse_animation: isPlaying }"></div>
        </div>
        <next-icon class="controls__next controls__next--forward" />
    </div>
</template>

<script>
import nextBtn from "@/assets/images/player/nextBtn.svg?inline";
import play from "@/assets/images/player/play.svg?inline";
import pause from "@/assets/images/player/pause.svg?inline";
export default {
    components: {
        nextIcon: nextBtn,
        play,
        pause,
    },
    data() {
        return {
            isPlaying: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
    align-items: center;
    justify-content: center;

    &__play {
        position: relative;
        z-index: 2;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: white;
        margin: 0 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &__pulse {
            position: absolute;
            width: 70px;
            height: 70px;
            background: transparent;
            border-radius: 50%;
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
