<template>
    <ul v-if="getActivePlaylist.length > 0" class="playlist__list">
        <li v-for="(cat, i) in getActivePlaylist" :key="i" class="playlist__list__item" @click="playMusic(cat, i)">
            <p>{{ cat.title }}</p>
            <small>{{ cat.author }}</small>
        </li>
    </ul>
    <div v-else class="playlist__empty">
        <p>Ops! nothing to show</p>
    </div>
</template>

<script>
export default {
    computed: {
        getActivePlaylist() {
            return this.$store.getters["player/activePlaylist"];
        },
    },
    methods: {
        playMusic(music, index) {
            this.$store.commit("player/SET_IS_MUSIC_PLAYER_AUTHORIZED", true);
            this.$store.dispatch("player/setActiveMusic", { music, index });
            this.$emit("onMusicSelected");
        },
    },
};
</script>

<style lang="scss" scoped>
.playlist__list {
    padding: 20px 35px;
    &__item {
        cursor: pointer;
        padding: 15px 0;
        color: #313131;

        &:hover {
            color: black;
        }
    }
    &__item:not(:last-child) {
        border-bottom: 1px solid rgb(228, 228, 228);
    }
}

.playlist__empty {
    padding: 50px 35px;
}
</style>
