<template>
    <div class="bg__phone__burger" :class="{ active: active }">

    </div>
    <div class="menu-list" :class="{ active: active }">

        <div class="close__burger">
            <div class="close__burger__content" @click="active = false">
                <svg style="height: 18px; width:18px"><use :xlink:href="require('@/assets/close_burger.svg') + '#close_burger'"></use></svg>
                <!-- <img src="../../assets/close_burger.svg" alt=""> -->
            </div>
        </div>
        <MenuItem :items="menuList" />
        <div class="social">
            <span class="social__title">Социальные сети</span>
            <div class="social__content">
                <div class="social__block">
                    <img src="../../assets/vk.svg" alt="">
                </div>
                <div class="social__block">
                    <img src="../../assets/ok (2).svg" alt="">
                </div>
                <div class="social__block">
                    <img src="../../assets/f.svg" alt="">
                </div>
                <div class="social__block">
                    <img src="../../assets/inst.svg" alt="">
                </div>
            </div>
        </div>

    </div>
    <BurgerComponent @toogleBurger="active = !active" />
</template>
<script>
import BurgerComponent from './BurgerComponent.vue'
import MenuItem from './MenuItem.vue';
export default {
    components: {
        MenuItem,
        BurgerComponent

    },
    data() {
        return {
            menuList: [
                { id: 0, text: 'О нас' },
                { id: 1, text: 'Наши ценности' },
                { id: 2, text: 'Вакансии' },
                { id: 3, text: 'Начало карьеры' },
                { id: 4, text: 'Контакты' },
            ],
            active: false
        }
    },
    methods: {
        isActive() {
            this.active = false
            console.log(123123123);
        }
    }
}
</script>
<style scoped lang="scss">
.bg__phone__burger {
    display: none;

    @media screen and (max-width: 768px) {
        background: rgba(41, 41, 41, 0.91);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
    }

}

.close__burger {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    &__content {}

    @media screen and (min-width: 768px) {
        display: none;
    }
}

.social {
    position: relative;
    color: rgb(24, 124, 211);
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;

    &__title {
        display: flex;
        align-items: center;

        &:after {
            display: flex;
            align-items: center;
            height: 5px;
            margin-left: 6px;
            margin-right: 3px;
            content: url('../../assets/Polygon 2.png');
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    &__content {
        @media screen and (min-width: 768px) {
            display: none;
            flex-wrap: wrap;
            justify-content: center;
            position: absolute;
            left: 7px;
            width: 100%;
            min-width: 176px;
            background-color: #fff;
            padding: 19px;
            top: 15px;
            box-shadow: 0px 17px 46px 0px rgba(0, 0, 0, 0.08);
            background: rgb(255, 255, 255);
            
        }
        @media screen and (max-width: 768px) {
            gap: 16px
            
        }

        display: flex;
    }

    &__block {
        width: 68px;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid rgb(224, 224, 224);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        @media screen and (max-width: 768px) {
            width: 47.84px;
            height: 35px;
        }


    }

    &:hover {
        .social__content {
            display: flex;
        }
    }
}

.menu-list {
    display: flex;
    align-items: center;
    gap: 52px;

    @media screen and (max-width: 1014px) {
        gap: 30px;
    }

    @media screen and (max-width: 902px) {
        gap: 15px;
    }

    @media screen and (max-width: 830px) {
        gap: 0px;
    }

    @media screen and (max-width: 768px) {
        display: none;
        align-items: flex-start;
        padding-top: 68px;
        // padding-left: 20px;
        padding-bottom: 52px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(36, 38, 39);
        width: 100%;
        flex-direction: column;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        gap: 39px;
        z-index: 10000;
    }
}

.active {
    display: flex;
}
</style>