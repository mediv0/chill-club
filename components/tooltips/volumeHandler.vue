<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="volume_tooltip">
        <div class="slidercontainer">
            <input v-model="volume" class="slider" type="range" name="vol" min="0" max="100" style="cursor: pointer" />
        </div>
    </tooltip-box>
</template>

<script>
import tooltipBox from "@/components/tooltipBox.vue";
import vClickOutside from "v-click-outside";
import { events } from "@/plugins/bus";
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
            volume: 70,
        };
    },
    computed: {
        isMusicReadyToPlay() {
            return this.$store.getters["player/isMusicRdy"];
        },
    },
    watch: {
        volume(volume) {
            this.isMusicReadyToPlay && this.$store.commit("player/SET_VOLUME", volume);
        },
    },
    mounted() {
        this.initShortkeyEvents();
    },
    methods: {
        onClickOutside() {
            this.$emit("onClickOutside");
        },
        volume_up() {
            this.volume < 101 && (this.volume += 5);
        },
        volume_down() {
            this.volume > 0 && (this.volume -= 5);
        },
        initShortkeyEvents() {
            events.$on("volume-up", this.volume_up);
            events.$on("volume-down", this.volume_down);
        },
    },
};
</script>

<style lang="scss" scoped>
.volume_tooltip {
    position: absolute;
    top: -61px;
    left: -68px;
    // overwrite defaults
    width: auto !important;
    padding: 17px;
}

$border-radius: 50%;
$thumb-size: 22px;
.slidercontainer {
    width: 138px;
}

.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    background: #d3d3d3;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 999px;
}
@mixin thumb-styles {
    width: $thumb-size;
    height: $thumb-size;
    background: var(--primary-blue);
    cursor: pointer;
    border: 3px solid white;
    border-radius: $border-radius;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    @include thumb-styles();
}

.slider::-moz-range-thumb {
    @include thumb-styles();
}
</style>
