<template>
    <div class="player_info">
        <div class="player_info__icons">
            <div class="player_info__icons__icon" @click="setActiveTooltip('volume')">
                <volume />
                <volume-tooltip :show="activeTooltip === 'volume' && showTooltip" @onClickOutside="onClickOutside" />
            </div>
            <div class="player_info__icons__icon">
                <list @click="setActiveTooltip('playlist')" />
                <playlist :show="activeTooltip === 'playlist' && showTooltip" @onClickOutside="onClickOutside" />
            </div>
        </div>
        <div class="player_info__content">
            <p>{{ currentlyPlaying ? currentlyPlaying.title : "..." }}</p>
            <small>{{ currentlyPlaying ? currentlyPlaying.author : "..." }}</small>
        </div>
    </div>
</template>

<script>
import volume from "@/components/player/volumeAnimation.vue";
import list from "@/assets/images/player/list.svg?inline";
import currentlyPlaying from "@/shared/currentlyPlaying.js";
import { events } from "@/plugins/bus";
export default {
    components: {
        volume,
        list,
        volumeTooltip: () => import("@/components/tooltips/volumeHandler.vue"),
        Playlist: () => import("@/components/tooltips/playlist.vue"),
    },
    mixins: [currentlyPlaying],
    data() {
        return {
            showTooltip: false,
            activeTooltip: null,
        };
    },
    mounted() {
        this.initShortkeyEvents();
    },
    methods: {
        onClickOutside() {
            this.showTooltip = false;
        },
        setActiveTooltip(tooltip) {
            this.activeTooltip = tooltip;
            this.showTooltip = true;
        },
        initShortkeyEvents() {
            events.$on("show-playlist", () => {
                this.activeTooltip = "playlist";
                this.showTooltip = !this.showTooltip
            })
        },
    },
};
</script>

<style lang="scss" scoped>
.player_info {
    margin-top: 34px;
    &__icons {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &__icon {
            position: relative;
            & > svg {
                cursor: pointer;
                transition: 300ms ease;
                &:active {
                    transform: scale(0.9);
                }
            }
            & > svg:first-child {
                margin-right: 21px;
            }
        }
    }

    &__content {
        font-weight: 300;
        margin-top: 16.5px;
        pointer-events: none;
        user-select: none;
        width: 100%;
        padding: 0 20px;

        & > small {
            opacity: 0.7;
        }
    }
}
</style>
