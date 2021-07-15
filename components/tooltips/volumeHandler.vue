<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="volume_tooltip">
        <input type="range" name="vol" min="0" max="50" style="cursor: pointer" />
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
    methods: {
        onClickOutside() {
            this.$emit("onClickOutside");
        },
    },
};
</script>

<style scoped>
.volume_tooltip {
    position: absolute;
    top: -61px;
    left: -68px;
    width: auto;
    padding: 20px 26px 14px 15px;
}
</style>
