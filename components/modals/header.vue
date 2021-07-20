<template>
    <div class="modal_header" @click="closeModal">
        <p>{{ title }}</p>
        <close class="modal_header__close" />
    </div>
</template>

<script>
import close from "@/assets/images/sidemenu/close.svg?inline";
export default {
    components: {
        close,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
};
</script>

<style lang="scss" scope>
$modal-gray-color: rgb(224, 224, 224);
.modal_header {
    position: relative;
    text-align: left;
    padding-bottom: 10px;
    font-size: 1.429rem;
    font-weight: bold;
    border-bottom: 2px solid $modal-gray-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::before {
        content: "";
        position: absolute;
        width: 20%;
        background: var(--primary-blue);
        height: 2px;
        bottom: -2px;
    }

    &__close {
        width: 35px;
        height: 35px;
        padding: 10px;
        cursor: pointer;
    }
    &__close > g > path {
        fill: $modal-gray-color;
    }

}
</style>
