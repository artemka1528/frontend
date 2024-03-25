<template lang="">
    <div v-if="toogleModal" class="modal">
        <div class="modal__content">
            <div @click="$emit('close')" class="modal__close">
                <svg style="height: 12px; width:12px"><use :xlink:href="require('@/assets/close.svg') + '#close'"></use></svg>
            </div>
            <slot></slot>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'my-modal',
    props: {
        toogleModal: [Boolean]
    },
    beforeUpdate: function () {
        this.toogleModal;
    },
    methods: {
        closeModal() {
            this.isModal = false
        }
    }
}
</script>
<style lang="scss" scoped>
.modal {
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    // position: fixed;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #828282;
    z-index: 9999;
    overflow-x: hidden;

    &__content {
        position: relative;
        display: flex;
        margin-top: 170px;
        background-color: #fff;
        width: 100%;
        max-width: 1145px;
        padding-bottom: 65px;

        @media screen and (max-width: 1285px) {
            justify-content: center;
            margin: 15px;
        }

    }

    &__close {
        position: absolute;
        right: -70px;
        top: 0;
        // margin-top: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px solid rgb(233, 134, 42);
        background: rgb(233, 134, 42);
        width: 70px;
        height: 70px;
        cursor: pointer;

        @media screen and (max-width: 1285px) {
            right: 20px;
            top: 20px;
            width: 36px;
            height: 36px;
        }
    }
}
</style>