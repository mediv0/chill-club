<template>
    <div class="graph">
        <div class="graph__line graph__line--1"></div>
        <div class="graph__line graph__line--2"></div>
        <div class="graph__line graph__line--3"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.graph {
    display: flex;
    align-items: flex-end;
    height: 17px;
    &__line {
        width: 3px;
        height: 100%;
        background: var(--success-color);
        margin: 0 2px;
        animation: scale-graph 300ms linear alternate infinite both;
        transform-origin: bottom;
        &--1,
        &--3 {
            height: 17px;
        }
        &--2 {
            height: 12px;
        }
    }
}
@keyframes scale-graph {
    0% {
        transform: scale(0.7);
    }
    100% {
        transform: scale(1);
    }
}
</style>
