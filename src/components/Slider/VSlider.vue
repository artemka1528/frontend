<template lang="">
    <div class="slider"  @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="slider__container">
            <div class="slider__arrow slider__arrow-prev" @click="prevSlide">
                <svg style="width:6; height:10">
                        <use xlink:href="../../assets/slider-arrow-left.svg#slider-arrow-left"></use>
                    </svg>
            </div>
            <div class="slider__arrow slider__arrow-next" @click="nextSlide">
                <svg style="width:6; height:10">
                        <use xlink:href="../../assets/slider-arrow-right.svg#slider-arrow-right"></use>
                    </svg>
                </div>
            <container-component style="overflow:hidden;">
                <div class="slider__content"  :style="{ transform: 'translateX(' + (-currentIndex * slideWidth) + 'px)' }">
                    <div class="slide" v-for="slide in slides" :key="slide.id" ref="slide">
                        <div class="slide__content">
                            <div class="slide__content__left">
                                    <div class="slide__content__left-title">{{slide.title}}</div>
                                    <div class="slide__content__left-subtitle">{{slide.subtitle}}</div>
                                    <div class="slide__content__left-text">{{slide.text}}</div>
                            </div>
                            <div class="slide__content__right">
                                <img src="../../assets/slider_img.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider__dots">
                <div class="slider__dot" v-for="(dot, index) in dots" :key="index"
                    :class="{ 'slider__dot-active': index == dotActiv }"></div>
            </div>
            </container-component>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                { id: 0, img: '', title: 'Евдокимова Майя', subtitle: 'Генеральный директор', text: 'Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.' },
                { id: 1, img: '', title: 'Евдокимова Майя', subtitle: 'Генеральный директор1', text: 'Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.' },
                { id: 2, img: '', title: 'Евдокимова Майя', subtitle: 'Генеральный директор2', text: 'Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.' }
            ],
            currentIndex: 0,
            touchStartX: null,
            slideWidth: 0,
            touchMoveX: null,
            dotActiv: 0,
            dots: 3,
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
                this.slideWidth = this.$refs.slide[0].offsetWidth;
                this.dotActiv++;
            }

        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.slideWidth = this.$refs.slide[0].offsetWidth;
                this.dotActiv--;
            }

        },
        handleResize() {
            this.isLargeScreen = window.innerWidth > 768;
        },
        onTouchStart(event) {
            if (window.innerWidth > 768) {
                return
            }
            this.touchStartX = event.touches[0].clientX;
        },
        onTouchMove(event) {
            if (!this.touchStartX) return;
            this.touchMoveX = event.touches[0].clientX;
        },
        onTouchEnd() {
            if (!this.touchMoveX) return;
            const deltaX = this.touchMoveX - this.touchStartX;
            this.slideWidth = this.$refs.slide[0].offsetWidth
            if (deltaX > 50) {
                this.prevSlide();
            } else if (deltaX < -50) {
                this.nextSlide();
            }
            this.touchStartX = null;
            this.touchMoveX = null;
        }

    }
}
</script>
<style lang="scss">
.slider {
    position: relative;
    margin-top: 70px;

    &__container {
        width: 100%;
        max-width: 1480px;
        margin: 0 auto;
        background: rgb(247, 247, 247);
        position: relative;
    }

    &__content {
        display: flex;
        flex-wrap: nowrap;
        // overflow: hidden;
        width: 100%;
        transition: transform 0.3s ease;
    }

    &__arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        /* Gray 5 */
        border: 1px solid rgb(224, 224, 224);
        width: 52px;
        height: 94px;
        position: absolute;
        top: 50%;
        z-index: 500;
        transform: translateY(-50%);
        cursor: pointer;

        @media screen and (max-width: 500px) {
            display: none;
        }

        &:hover {
            background-color: #fff;
        }

        &-prev {
            left: 40px;

        }

        &-next {
            right: 40px;


        }
    }
}
.slider {


    &__dots {
        display: flex;
        justify-content: center;
        gap: 41.67px;
        margin-top: 34px;

        @media screen and (min-width: 500px) {
            display: none;
        }
    }

    &__dot {
        width: 10px;
        height: 10px;
        background: rgb(224, 224, 224);
        border-radius: 100%;

        &-active {
            background: rgb(233, 134, 42);
        }
    }
}
.slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 100%;

    &__content {
        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
        }

        display: flex;
        justify-content: space-between;
        width: 100%;

        &__left {
            padding-bottom: 80px;
            padding-top: 117px;
            width: 100%;
            max-width: 630px;

            @media screen and (max-width: 768px) {
                text-align: center;
                
            }
            @media screen and (max-width: 500px) {
                padding-bottom: 0;
                
            }

            &-title {
                color: rgb(36, 38, 39);
                font-family: Helios;
                font-size: 36px;
                font-weight: 400;
                line-height: 28px;
                letter-spacing: 0%;

                @media screen and (max-width: 768px) {
                    font-size: 28px;
                }
            }

            &-subtitle {
                margin-top: 20px;
                color: rgb(130, 130, 130);
                font-family: Helios;
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                letter-spacing: 0%;

                @media screen and (max-width: 768px) {
                    font-size: 16px;
                }
            }

            &-text {
                color: rgb(36, 38, 39);
                font-family: Helios;
                font-size: 18px;
                font-weight: 400;
                line-height: 32px;
                letter-spacing: 0%;
                max-width: 630px;
                width: 100%;
                margin-top: 40px;

                @media screen and (max-width: 768px) {
                    font-size: 18px;
                }
            }
        }

        &__right {
            display: flex;
            align-items: flex-end;

            @media screen and (min-width: 768px) {
                margin-right: -60px;

            }

            @media screen and (max-width: 768px) {
                display: flex;
                align-items: flex-end;
                justify-content: center;

            }
        }
    }
}
</style>