<template>
    <Nuxt />
</template>

<script>
import { events } from "@/plugins/bus";
export default {
    mounted() {
        this.initKeyUpListener();
    },
    methods: {
        initKeyUpListener() {
            document.addEventListener("keydown", (e) => {
                const { key, code } = e;
                if (key === "f") {
                    this.toggleFullscreen();
                } else if (key === "ArrowUp" || key === "ArrowDown") {
                    this.handlePlayerVolume(key);
                } else if (key === "ArrowLeft" || key === "ArrowRight") {
                    this.handleActiveMusic(key);
                } else if (code === "Space") {
                    events.$emit("toggle-player");
                } else if ((key === "T" || key === "t") && e.altKey) {
                    events.$emit("show-playlist");
                } else if ((key === "M" || key === "m") && e.altKey) {
                    events.$emit("show-moods");
                } else if ((key === "S" || key === "s") && e.altKey) {
                    this.shareToTwitter();
                }
            });
        },
        toggleFullscreen() {
            const element = document.body;

            const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

            element.requestFullScreen =
                element.requestFullScreen ||
                element.webkitRequestFullScreen ||
                element.mozRequestFullScreen ||
                function () {
                    return false;
                };
            document.cancelFullScreen =
                document.cancelFullScreen ||
                document.webkitCancelFullScreen ||
                document.mozCancelFullScreen ||
                function () {
                    return false;
                };

            isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
        },
        handlePlayerVolume(key) {
            if (key === "ArrowUp") {
                events.$emit("volume-up");
            } else {
                events.$emit("volume-down");
            }
        },
        handleActiveMusic(key) {
            if (key === "ArrowLeft") {
                events.$emit("seek-backward");
            } else {
                events.$emit("seek-forward");
            }
        },
        shareToTwitter() {
            window.open("https://twitter.com/intent/tweet?url=https://chill-club.vercel.app/&text=Check%20out%20chill-club.vercel.app%20%E2%9A%A1%EF%B8%8F%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20%F0%9F%94%A5%0A%0A#lofi%20#anime%20#lofi_music");
        },
    },
};
</script>
