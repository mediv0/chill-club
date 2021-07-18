<template>
    <div class="main_layout">
        <player-title />
        <player />
        <slider />
        <noise />
        <pwa :show="showPwaNotification" @close="closePwaPopUp" />
    </div>
</template>

<script>
import title from "@/components/title.vue";
import player from "@/components/player/player.vue";
import slider from "@/components/slider.vue";
import noise from "@/components/noise.vue";
export default {
    components: {
        playerTitle: title,
        player,
        slider,
        noise,
        pwa: () => import("@/components/pwa.vue"),
    },
    data() {
        return {
            showPwaNotification: false,
        };
    },

    created() {
        import("@/data/streams.json").then((module) => {
            this.$store.commit("player/SET_PAYLIST", module.default);
        });
    },

    mounted() {
        window.addEventListener("beforeinstallprompt", function (event) {
            this.showPwaNotification = true;
            // …

            // save the event to use it later
            // (it has the important prompt method and userChoice property)
            window.promptEvent = event;
        });
    },
    methods: {
        closePwaPopUp() {
            this.showPwaNotification = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.main_layout {
    text-align: center;
    @include query_IPad() {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
