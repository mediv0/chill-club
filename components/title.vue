<template>
    <div class="title">
        <p class="toggle_title" @click="showMoodTooltip = true">
            Choose your mood
            <play class="tooltip_toggle" :class="{ rotate_toggle_icon: showMoodTooltip }" />
            <mood-tooltip :show="showMoodTooltip" @onHideTooltip="onHideTooltip" />
        </p>
        <h1>Nostaliga</h1>
    </div>
</template>

<script>
import play from "@/assets/images/player/play.svg?inline";
import moodTooltip from "@/components/tooltips/mood.vue";
export default {
    components: {
        play,
        moodTooltip,
    },
    data() {
        return {
            showMoodTooltip: false,
        };
    },
    methods: {
        onHideTooltip() {
            this.showMoodTooltip = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    margin-top: 133px;
    & > h1 {
        pointer-events: none;
        font-size: 7.5rem;
        font-weight: 300;
        letter-spacing: 5px;
        margin-top: -15px;
        filter: drop-shadow(0 0 10px rgba($color: #000000, $alpha: 0.3));
    }
}

.tooltip_toggle {
    width: 10px;
    height: 10px;
    transform: rotate(90deg);
    margin-left: 5px;
    transition: 300ms ease;
}

p.toggle_title {
    font-size: 1.143rem;
    cursor: pointer;
    position: relative;
    user-select: none;
    display: inline-block;
}

.rotate_toggle_icon {
    transform: rotate(-90deg);
}
</style>
