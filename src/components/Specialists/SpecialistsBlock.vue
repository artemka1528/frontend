<template>
    <container-component>
        <div class="qwe">
            Specialists
            <div class="bg bg__left"></div>
            <div class="bg bg__right"></div>
            <div style="position: relative;">
                <h2 style="text-align: center;">Студентам и молодым специалистам</h2>
                <p style="color: rgb(36, 38, 39);
                        font-family: Helios;
                        font-size: 22px;
                        font-weight: 400;
                        line-height: 27px;
                        letter-spacing: 0%;
                        text-align: center;">
                    Учишься или недавно закончил направления
                </p>
                <div class="items">
                    <div class="items__content">
                        <div class="bg_img">
                            <img src="" alt="img">

                        </div>
                        <p>Бухгалтерский учёт</p>
                    </div>
                    <div class="items__content">
                        <div class="bg_img">
                            <img src="" alt="img">

                        </div>
                        <p>Финансовый менеджмент</p>

                    </div>
                    <div class="items__content">
                        <div class="bg_img">
                            <img src="" alt="img">

                        </div>
                        <p>Управление персоналом</p>

                    </div>
                    <div class="items__content">
                        <div class="bg_img">
                            <img src="" alt="img">

                        </div>
                        <p>Социальная психология</p>
                    </div>
                </div>
            </div>
        </div>
    </container-component>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.qwe {
    position: relative;
    padding-top: 86px;
}

.bg_img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #F9F9F9;

    &__left {
        left: 0;
        border-radius: 0px 36px 36px 0px;
    }

    &__right {
        right: 0;
        border-radius: 36px 0 0 36px;
    }
}

.items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 116px;
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;

    &__content {}
}
</style>