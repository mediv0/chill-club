<template>
    <div class="main_layout">
        <player-title />
        <player />
        <slider />
        <noise />
        <pwa :show="showPwaNotification" @close="closePwaPopUp" />
        <navbar />
    </div>
</template>

<script>
import title from "@/components/title.vue";
import player from "@/components/player/player.vue";
import slider from "@/components/slider.vue";
import noise from "@/components/noise.vue";
import navbar from "@/components/sidemenu.vue";
import moodList from "@/data/mood.json";
export default {
    components: {
        playerTitle: title,
        player,
        slider,
        noise,
        pwa: () => import("@/components/pwa.vue"),
        navbar,
    },
    data() {
        return {
            showPwaNotification: false,
        };
    },

    // asyncData({ req, store }) {
    //     const moodParams = new URLSearchParams(req._parsedOriginalUrl.search);
    //     const mood = moodParams.get("mood");

    //     if (mood) {
    //         store.commit("player/SET_CATEGORY", mood);
    //         store.dispatch("player/setDefaultActiveMusic");
    //     }
    // },

    created() {
        import("@/data/streams.json").then((module) => {
            this.$store.commit("player/SET_PAYLIST", module.default);
        });
    },

    mounted() {
        const moodParams = new URLSearchParams(window.location.search);
        const mood = moodParams.get("mood");

        if (mood && this.isValidMood(mood)) {
            this.$store.commit("player/SET_CATEGORY", mood);
            this.$store.dispatch("player/setDefaultActiveMusic");
        }
        this.showPWAPrompt();
    },
    methods: {
        showPWAPrompt() {
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                this.showPwaNotification = true;
                window.promptEvent = event;
            });
        },
        closePwaPopUp() {
            this.showPwaNotification = false;
        },

        isValidMood(mood) {
            return moodList.some((item) => item.title === mood);
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
