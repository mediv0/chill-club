<template>
    <div class="slider">
        <img class="active" alt="active background image" />
        <img class="new" alt="slider background image"/>
    </div>
</template>

<script>
import mood from "@/data/mood.json";
export default {
    data() {
        return {
            images: {},
            active: null,
            new: null,
            isSliderChanging: false,
        };
    },
    computed: {
        getActiveCategory() {
            return this.$store.getters["player/category"];
        },
    },

    watch: {
        getActiveCategory(val) {
            if (!this.$store.getters["slider/isSliderChanging"]) {
                this.next(val);
            }
        },
    },

    async mounted() {
        this.active = document.querySelector(".active");
        this.new = document.querySelector(".new");
        await this.cacheImages();
        this.loadImage(this.getActiveCategory, "active");
    },

    methods: {
        async cacheImages() {
            await mood.forEach(async (m) => {
                const img = new Image();
                img.src = await require("@/assets/images/wallpapers/" + m.cover);
                this.images[m.title] = img;
            });
        },
        loadImage(title, state) {
            this[state].src = this.images[title].src;
        },
        next(image) {
            this.$store.commit("slider/SET_SLIDER_CHANGING", true);
            this.isSliderChanging = true;
            this.loadImage(image, "new");
            this.toggleSliderAnimation("add");

            // for some reason animationEnd event not working here ( multiple calls )
            // this hack should work for now
            setTimeout(() => {
                this.toggleSliderAnimation("remove");
                this.active.src = this.new.src;
                this.new.removeAttribute("src");
                this.$store.commit("slider/SET_SLIDER_CHANGING", false);
            }, 1350);
        },
        toggleSliderAnimation(state) {
            this.active.classList[state]("slider-out");
            this.new.classList[state]("slider-in");
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    display: none;
}

img[src] {
    display: block;
}
.slider {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    top: 0;
    z-index: -2;
    background: transparent;
    user-select: none;
    pointer-events: none;

    & > img {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.slider-in {
    animation: 1.3s scale-in cubic-bezier(0.5, 0.07, 0, 0.96) both;
}
.slider-out {
    animation: 1.3s scale-out cubic-bezier(0.5, 0.07, 0, 0.96) both;
}
@keyframes scale-in {
    0% {
        transform: scale(1.6);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes scale-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        transform: scale(0.6);
    }
}
</style>
