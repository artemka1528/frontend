<template lang="">
    <container-component>
        <h3 style="text-align: center">Общий центр обслуживания в г. Иваново оказывает услуги энергетическому
холдингу Группе компаний в области:</h3>
        <div class="block">
            <div class="block__content">
                <div class="block__content-img">
                    <img src="../../assets/111.svg" />
                </div>
                <h4 class="block__content-title">Учета и отчетности</h4>
                <div class="block__content-btn">
                    <button>Поздробнее</button>
                </div>
            </div>
            <div class="block__content">
                <div class="block__content-img">
                    <img src="../../assets/112.svg" />
                </div>
                <h4 class="block__content-title">Учета и отчетности</h4>
                <div class="block__content-btn">
                    <button>Поздробнее</button>
                </div>
            </div>
            <div class="block__content">
                <div class="block__content-img">
                    <img src="../../assets/113.svg" />
                </div>
                <h4 class="block__content-title">Учета и отчетности</h4>
                <div class="block__content-btn">
                    <button>Поздробнее</button>
                </div>
            </div>
        </div>
    </container-component>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

.block {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    @media screen and (max-width: 500px) {
        display: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 350px;
        padding: 44px 59px;
        cursor: pointer;
        transition: .5s;
        &:hover {
            box-shadow: 0px 14px 24px 0px rgba(15, 18, 20, 0.1);
            .block__content-img {
                box-sizing: border-box;
                border: 1px solid rgb(249, 249, 249);
                /* Orange */
                background: rgb(233, 134, 42);
            }
        }

        &-img {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                fill: red
            }
            
        }

        &-title {
            color: rgb(0, 0, 0);
            font-family: Helios;
            font-size: 20px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0%;
            text-align: center;
            margin-top: 44px;
        }

        &-btn {
            margin-top: 51px;
        }
    }
}
</style>



