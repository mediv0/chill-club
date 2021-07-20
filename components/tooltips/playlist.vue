<template>
    <tooltip-box v-if="show" v-click-outside="onClickOutside" class="playlist_tooltip">
        <div class="playlist">
            <div v-if="currentlyPlaying" class="playlist__now">
                <div class="playlist__now__content">
                    <h6>now playing:</h6>
                    <p class="text-muted">{{ currentlyPlaying.title }}</p>
                    <small>{{ currentlyPlaying.author }}</small>
                </div>
                <graph class="playlist__now__graph" />
            </div>
            <musicList />
        </div>
    </tooltip-box>
</template>

<script>
import tooltipBox from "@/components/tooltipBox.vue";
import vClickOutside from "v-click-outside";
import graph from "@/components/player/graph.vue";
import musicList from "@/components/tooltips/playlist/list.vue";
import currentlyPlaying from "@/shared/currentlyPlaying.js";
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    components: {
        tooltipBox,
        graph,
        musicList,
    },
    mixins: [currentlyPlaying],
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        getActivePlaylist() {
            const activeCategory = this.$store.getters["player/category"];
            const activePlaylist = this.$store.getters["player/playList"];
            return activePlaylist.filter((playlist) => playlist.category === activeCategory);
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
    @include query(422px) {
        right: -67px;
        max-width: 280px;
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
        max-width: 80%;
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
