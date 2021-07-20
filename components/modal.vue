<template>
    <transition name="modal">
        <div v-if="show" v-click-outside="closeModal" class="modal">
            <modal-header :title="title" @close="closeModal" />
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import header from "@/components/modals/header.vue";
import vClickOutside from "v-click-outside";
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    components: {
        modalHeader: header,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
.modal {
    color: black;
    position: absolute;
    z-index: 95;
    width: 400px;
    height: 100vh;
    top: 0;
    right: 0;
    background: white;
    overflow: auto;
    padding: 20px;
    @include query(400px) {
        max-width: 100%;
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: 570ms cubic-bezier(0.5, 0.07, 0, 0.96);
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(15px);
    opacity: 0;
}
</style>
