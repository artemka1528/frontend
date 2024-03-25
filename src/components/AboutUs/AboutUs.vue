<template>
    <container-component>
        <div class="slider" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="slides" :style="{ transform: 'translateX(' + (-currentIndex * slideWidth) + 'px)' }">
                <div v-for="(slide, index) in slides" :key="index" class="slide" ref="slide">
                    <svg :id="'about' + index" class="svg">
                        <use class='test1' :xlink:href="slide.img + '#about'"></use>
                    </svg>

                    <h3 style="margin-top: 40.78px;">{{ slide.title }}</h3>
                    <p class="about__content-subtitle">{{ slide.subtitle }}</p>
                </div>
            </div>
            <div class="slider__dots">
                <div class="slider__dot" v-for="(dot, index) in dots" :key="index"
                    :class="{ 'slider__dot-active': index == dotActiv }"></div>
            </div>
        </div>
    </container-component>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { img: require('@/assets/about_1.svg'), title: 'Развитие', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { img: require('@/assets/about_2.svg'), title: 'Обучение', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { img: require('@/assets/about_3.svg'), title: 'Ответственность', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { img: require('@/assets/about_4.svg'), title: 'Динамика', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { img: require('@/assets/about_5.svg'), title: 'Комфорт', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { img: require('@/assets/about_6.svg'), title: 'Надежность', subtitle: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
            ],
            dots: 3,
            dotActiv: 0,
            isLargeScreen: window.innerWidth > 768, // Определяем размер экрана,
            currentIndex: 0,
            slideWidth: 318,
            touchStartX: null,
            touchMoveX: null
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.slides.length - 2) {
                this.currentIndex++;
                this.currentIndex++;
                this.dotActiv++;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.currentIndex--;
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
};
</script>
<style lang="scss" scoped>
#about0 {
    width: 64px;
    height: 62px;
}

#about1 {
    width: 74px;
    height: 74px;
}

#about2 {
    width: 68px;
    height: 67px;
}

#about3 {
    width: 95px;
    height: 59px;
}

#about4 {
    width: 66px;
    height: 62px;
}

#about5 {
    width: 66px;
    height: 62px;
}

path {
    color: inherit;
    fill: inherit;
}

.slider {
    margin-top: 76px;
    position: relative;
    width: 100%;
    overflow: hidden;

    &__dots {
        display: flex;
        justify-content: center;
        gap: 41.67px;
        margin-top: 50px;

        @media screen and (min-width: 768px) {
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

    @media screen and (max-width: 500px) {
        display: none;
    }
}

.slides {
    display: flex;

    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;

    }

    transition: transform 0.3s ease;
}

.slide {
    flex: 0 0 50%;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    height: 377px;
    max-width: 395.6px;
    border: 1px solid #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 95px;
    svg#about3 {
            fill: none;
            stroke: #000;
        }
    &:hover {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        transition: .3s;
        fill: rgb(233, 134, 42);
        svg#about3 {
            fill: none;
            stroke: rgb(233, 134, 42);
        }

        svg#about3 {
            fill: none;
        }
        .about__content-subtitle {
            opacity: 1;
            height: auto;
            transition: .5s
        }
    }

    @media screen and (max-width: 769px) {
        max-width: 345px;
        height: 345px;
    }
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

.about__content-subtitle {
    opacity: 0;
    width: 100%;
    height: 0;
    text-align: center;
    max-width: 297px;
    margin-top: 23px;
    color: rgb(100, 100, 100);
    font-family: Helios;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: center;
}
</style>