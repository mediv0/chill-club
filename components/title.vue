<template>
    <div class="title">
        <div class="title__mood">
            <p class="toggle_title" @click="toggleMoodTooltip">
                Choose your mood
                <play class="tooltip_toggle" :class="{ rotate_toggle_icon: showMoodTooltip }" />
            </p>
            <mood-tooltip :show="showMoodTooltip" @onHideTooltip="onHideTooltip" />
        </div>
        <h1>{{ activeMoodTitle }}</h1>
    </div>
</template>

<script>
import play from "@/assets/images/player/play.svg?inline";
import { events } from "@/plugins/bus";
export default {
    components: {
        play,
        moodTooltip: () => import("@/components/tooltips/mood.vue"),
    },
    data() {
        return {
            showMoodTooltip: false,
        };
    },
    computed: {
        activeMoodTitle() {
            return this.$store.getters["player/category"];
        },
    },
    mounted() {
        this.initShortkeyEvents();
    },
    methods: {
        onHideTooltip() {
            this.showMoodTooltip = false;
        },
        toggleMoodTooltip() {
            this.showMoodTooltip = !this.showMoodTooltip;
        },
        initShortkeyEvents() {
            events.$on("show-moods", this.toggleMoodTooltip)
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    margin-top: 133px;
    @include query_IPad() {
        margin-bottom: 160px;
    }
    & > h1 {
        pointer-events: none;
        font-size: 7.5rem;
        font-weight: 300;
        letter-spacing: 5px;
        margin-top: -15px;
        filter: drop-shadow(0 0 10px rgba($color: #000000, $alpha: 0.3));
        word-break: break-all;
        @include query(375px) {
            font-size: 5.5rem;
        }
    }

    &__mood {
        position: relative;
        user-select: none;
        display: inline-block;
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
}

.rotate_toggle_icon {
    transform: rotate(-90deg);
}
</style>
