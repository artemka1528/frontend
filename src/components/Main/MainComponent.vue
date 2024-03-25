<template>
    <div style="margin-top: 36.5px;">
        <div class="main">
            <container-component style="height: 100%;">
                <div class="main__content">
                    <div class="main__content__left">
                        <h1 class="main__title">Энергия твоего роста! – заряжаем твою карьеру</h1>
                        <my-button class="button-width button-top" @click="istoogleModal = true">Cтать частью
                            команды</my-button>
                    </div>
                    <img src="../../assets//pipl.png" alt="">
                </div>

                <my-modal :toogleModal="istoogleModal" @close="istoogleModal = false">
                    <ResponseVacancy />
                </my-modal>
            </container-component>

        </div>
    </div>
</template>
<script>
import ResponseVacancy from '@/UI/ResponseVacancy.vue';
export default {
    components: { ResponseVacancy },
    data() {
        return {
            istoogleModal: false
        }
    },
}
</script>
<style lang="scss">
.main {
    background-image: url('../../assets/bg-main.png'), url('../../assets/main.png');
    background-size: 65.7% 449px;

    @media screen and (max-width: 1880px) {
        background-size: 65.7% 449px;
    }

    @media screen and (max-width: 768px) {
        background-size: 525px 600px;
    }

    @media screen and (max-width: 562px) {
        height: auto;
    }

    width: 100%;
    height: 448px;
    background-repeat: no-repeat no-repeat;
    background-position: center left,
    right,
    center;

    &__content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;

        @media screen and (max-width: 562px) {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }

        &__left {
            @media screen and (max-width: 562px) {
                h1 {
                    padding-top: 24px;
                }

                position: relative;
                z-index: 2;
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                align-items: center;
                height: 100%;
            }
        }

        img {
            // height: 100%;
            width: auto;
            max-width: 678px;
            margin-right: 118px;
            margin-top: 17px;
            height: 430px;

            // margin-right: -50px;
            @media screen and (max-width: 952px) {
                margin-right: 70px;
            }

            @media screen and (max-width: 768px) {
                margin-right: 0px;
                height: 334px;
                margin-top: 113px;
            }

            @media screen and (max-width: 1400px) {
                max-width: 400px;
            }

            @media screen and (max-width: 562px) {
                position: absolute;
                bottom: 0;
                max-width: 202px;
                z-index: 1;
                height: 230px;
            }

        }
    }

    &__title {
        padding-top: 116px;
        padding-left: 4px;
        width: 100%;
        max-width: 592px;

        @media screen and (max-width: 562px) {
            margin-top: 24px;
        }
    }
}

.button-width {
    width: 100%;
    max-width: 254px;
    height: 64px;
}

.button-top {
    margin-top: 62px;
    margin-left: 6px;

    @media screen and (max-width: 562px) {
        margin-top: 148px;
    }
}
</style>