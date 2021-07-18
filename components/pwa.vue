<template>
    <transition name="fade">
        <div v-if="show" class="pwa_notification">
            <div class="pwa_notification__img">
                <img src="@/assets/images/pwa_install_icon.png" class="fit-parent" alt="pwa notification icon" loading="lazy" />
            </div>
            <h3>Enhance your experience</h3>
            <p>listen to your favorite radio & musics everywhere</p>
            <button class="btn btn-primary" @click="install">install app</button>
            <button class="btn btn-secondary" @click="close">dismiss</button>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
        install() {
            // show the install app prompt
            window.promptEvent.prompt();

            // handle the Decline/Accept choice of the user
            window.promptEvent.userChoice.then(function (choiceResult) {
                this.close();
                window.promptEvent = null;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.pwa_notification {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 300px;
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: black;
    font-weight: 400;
    padding: 30px;

    &__img {
        width: 71px;
        height: 58px;
        user-select: none;
        pointer-events: none;
        margin-bottom: 15px;
    }

    & > h3 {
        margin-bottom: 5px;
    }

    & > button.btn-primary {
        margin-top: 10px;
        margin-bottom: 5px;
    }
}

// overwritethe default button style
.btn {
    width: 50%;
}
</style>
