<template>
    <transition name="fade">
        <div class="tooltip_container">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.tooltip_container {
    text-align: left;
    position: absolute;
    z-index: 99;
    height: auto;
    max-height: 390px;
    overflow: auto;
    background: white;
    border-radius: 12px;
    color: black;
    font-weight: 600;
}
</style>
