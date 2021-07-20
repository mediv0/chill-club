<template>
    <div class="nav_menu">
        <ul class="sidenav">
            <li v-for="(menu, i) in menu_items" :key="i" v-tooltip.right="{ content: menu.title, offset: '6px' }" class="sidenav__item" @click="showModal(menu.title)">
                <img :src="menu.icon" alt="shortkeys" />
            </li>
        </ul>
        <modal :show="isModalVisible" :title="title" @close="closeModal">
            <component :is="componentId"></component>
        </modal>
    </div>
</template>

<script>
import modal from "@/components/modal.vue";
export default {
    components: {
        modal,
        Shortcuts: () => import("@/components/modals/shortcuts.vue"),
    },
    data() {
        return {
            isModalVisible: false,
            componentId: null,
            title: "",
            menu_items: [
                {
                    title: "Shortcuts",
                    icon: require("@/assets/images/sidemenu/shortcut.svg"),
                },
            ],
        };
    },
    methods: {
        showModal(modal) {
            this.title = modal;
            this.componentId = modal;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.sidenav {
    position: absolute;
    top: 30px;
    right: 30px;
    &__item {
        width: 30px;
        height: 30px;
        background: white;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.1s ease;

        & > img {
            width: 55%;
            height: 55%;
            object-fit: cover;
            user-select: none;
            pointer-events: none;
        }

        &:not(:last-child) {
            margin-bottom: 7px;
        }

        &:hover {
            transform: scale(0.98);
        }
    }
}
</style>
