<template>
    <div class="player">
        <controls />
        <player-info />
    </div>
</template>

<script>
import controls from "@/components/player/controls.vue";
import playerInfo from "@/components/player/info.vue";
export default {
    components: {
        controls,
        playerInfo
    },
};
</script>

<style lang="scss" scoped>
.player {
    margin-top: 152px;
}
</style>
