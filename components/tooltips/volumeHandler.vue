<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="volume_tooltip">
        <input v-model="volume" type="range" name="vol" min="0" max="100" style="cursor: pointer" />
    </tooltip-box>
</template>

<script>
import tooltipBox from "@/components/tooltipBox.vue";
import vClickOutside from "v-click-outside";
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
        }
    },
    watch: {
        volume(volume) {
            this.$store.commit("player/SET_VOLUME", volume);
        }
    },
    methods: {
        onClickOutside() {
            this.$emit("onClickOutside");
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
    padding: 20px 26px 14px 15px !important;
}
</style>
