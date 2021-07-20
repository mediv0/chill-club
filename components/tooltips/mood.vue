<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="mood_tooltip">
        <p class="mood_tooltip__title">select mood</p>
        <ul class="mood_tooltip__list">
            <li v-for="(mood, i) in moods" :key="i" class="mood_tooltip__list__item" :tabindex="i + 1" :class="{ active_mood: activeMood === mood.title }" @keydown.enter="selectMood(mood.title)" @click="selectMood(mood.title)">
                <p>{{ mood.title }}</p>
            </li>
        </ul>
    </tooltip-box>
</template>

<script>
import tooltipBox from "@/components/tooltipBox.vue";
import vClickOutside from "v-click-outside";
import mood from "@/data/mood.json";
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    components: {
        tooltipBox,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            moods: null,
            activeMood: null,
        };
    },
    created() {
        this.moods = mood;
    },
    methods: {
        onClickOutside() {
            this.$emit("onHideTooltip");
        },
        selectMood(mood) {
            if (!this.$store.getters["slider/isSliderChanging"]) {
                this.activeMood = mood;
                this.$store.commit("player/SET_CATEGORY", mood);
                this.$store.dispatch("player/setDefaultActiveMusic");
                this.onClickOutside();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
$background-color: rgb(238, 237, 237);
.mood_tooltip {
    font-size: 1rem;
    top: 0;
    right: -240px;
    width: 230px;
    cursor: default;
    padding: 20px 15px;
    @include query(666px) {
        right: -25%;
        top: 29px;
    }

    &__title {
        pointer-events: none;
        color: rgb(84, 84, 84);
        border-bottom: 1px solid rgb(196, 196, 196);
        padding-bottom: 5px;
        font-weight: 300;
    }

    &__list {
        margin-top: 20px;

        &__item {
            cursor: pointer;
            transition: 100ms ease;
            padding: 5px;
            border-radius: 3px;
            outline: none;
            @include setTabIndexFocus();

            &:hover {
                background: $background-color;
            }
        }

        &__item:not(:first-child) {
            margin-top: 5px;
        }
    }
}

.active_mood {
    background: $background-color;
}
</style>
