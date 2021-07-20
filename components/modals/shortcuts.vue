<template>
    <div class="shortcuts_modal">
        <li v-for="(key, i) in shortcuts" :key="i" class="shortcuts_modal__key">
            <p class="label">{{ key.value }}</p>
            <p class="shortcuts_modal__key__description">{{ key.title }}</p>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shortcuts: [
                {
                    value: "Up/Down",
                    title: "Increase/Decrease player volume",
                },
                {
                    value: "Left/Right",
                    title: "Next/Previous Track",
                },
                {
                    value: "Spacebar",
                    title: "Pause/Play Music",
                },
                {
                    value: "CTRL + P",
                    title: "Enter Productivity mode",
                },
                {
                    value: "F",
                    title: "Enter fullscreen",
                },
                {
                    value: "ALT + T",
                    title: "View All Tracks",
                },
                {
                    value: "ALT + M",
                    title: "View Mood list",
                },
                {
                    value: "ALT + S",
                    title: "Share To Twitter",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scope>
.shortcuts_modal {
    margin: 20px 0;
    font-family: sans-serif;
    &__key {
        display: flex;
        align-items: center;
        @include query(274px) {
            flex-direction: column;
        }

        &__description {
            margin-left: 10px;
        }

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}

.label {
    text-align: center;
    border-radius: 7px;
    background: black;
    color: white;
    padding: 4px 6px;
}
</style>
