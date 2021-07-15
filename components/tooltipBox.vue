<template>
    <transition name="fade">
        <div class="tooltip_container">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.tooltip_container {
    padding: 20px 15px;
    text-align: left;
    position: absolute;
    z-index: 99;
    width: 230px;
    height: auto;
    max-height: 300px;
    overflow: auto;
    background: white;
    border-radius: 12px;
    color: black;
    font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
    transition: 570ms cubic-bezier(0.5, 0.07, 0, 0.96);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(7px);
    opacity: 0;
}
</style>
