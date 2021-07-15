<template>
    <div class="slider">
        <img class="active" />
        <img class="new" />
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
        };
    },
    async mounted() {
        this.active = document.querySelector(".active");
        this.new = document.querySelector(".new");
        await this.cacheImages();
        this.loadImage("Study & Chill", "active");
        setTimeout(() => {
            this.next();
        }, 2000);
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
        next() {
            this.loadImage("Nostalgia", "new");

            // run animations
            this.active.classList.add("slider-out");
            this.new.classList.add("slider-in");

            // remove elements after animation
            this.active.addEventListener("animationend", () => {
                // this.active.removeAttribute("src");
                 this.active.classList.remove("slider-out");
                 this.new.classList.remove("slider-in");
                // replace active element with new element and change class name to active
                this.active.parentNode.replaceChild(this.new, this.active);
            });
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
