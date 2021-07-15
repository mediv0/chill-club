<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="playlist_tooltip">
        <div class="playlist">
            <div class="playlist__now">
                <div class="playlist__now__content">
                    <h6>now playing:</h6>
                    <p class="text-muted">sad songs to isolate to ✨ 24/7</p>
                    <small>Biteki びてき</small>
                </div>
                <graph class="playlist__now__graph" />
            </div>
            <ul class="playlist__list">
                <li class="playlist__list__item">
                    <p>sad songs to isolate to ✨ 24/7</p>
                    <small>Biteki びてき</small>
                </li>
                <li class="playlist__list__item">
                    <p>sad songs to isolate to ✨ 24/7</p>
                    <small>Biteki びてき</small>
                </li>
                <li class="playlist__list__item">
                    <p>sad songs to isolate to ✨ 24/7</p>
                    <small>Biteki びてき</small>
                </li>
                <li class="playlist__list__item">
                    <p>sad songs to isolate to ✨ 24/7</p>
                    <small>Biteki びてき</small>
                </li>
            </ul>
        </div>
    </tooltip-box>
</template>

<script>
import tooltipBox from "@/components/tooltipBox.vue";
import vClickOutside from "v-click-outside";
import graph from "@/components/player/graph.vue";
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    components: {
        tooltipBox,
        graph,
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

<style lang="scss" scoped>
.playlist_tooltip {
    position: absolute;
    bottom: 32px;
    right: -152px;
    max-height: 400px;
    width: 350px;
    overflow: auto;
    padding: 0;
    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: black;
    }
    &::-webkit-scrollbar-track {
        background: white;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: white;
    }
}

.playlist {
    &__list {
        padding: 20px 35px;
        &__item {
            cursor: pointer;
        }
        &__item:not(:last-child) {
            padding-bottom: 15px;
        }
    }
}

.playlist__now {
    background: rgb(240, 240, 240);
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 35px;

    &__content {
        & > h6 {
            font-size: 1.2rem;
            margin-bottom: 3px;
            color: #b5b5b5;
            font-weight: 300;
        }
    }
}

small {
    color: #767676;
}

.text-muted {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
