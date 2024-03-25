<template>
    <div style="background: rgb(242, 242, 242);">
        <container-component>
            <h2 style="text-align: center;">Наши ценности</h2>
            <div class="blocks">
                <div v-for="value in values" :key="value.id" class="blocks__content">
                    <svg class="icon-about">
                        <use xlink:href="#icon-mail"></use>
                    </svg>
                    <h3>{{ value.title }}</h3>
                    <p>{{ value.text }}</p>
                </div>
            </div>
            <SvgSprite />
        </container-component>
    </div>

</template>
<script>
import SvgSprite from '@/UI/SvgSprite.vue';
export default {
    components: { SvgSprite },
    data() {
        return {
            values: [
                { id: 0, title: 'Человеческий капитал', text: 'Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия. ' },
                { id: 1, title: 'Предоставление услуг высочайшего качества', text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.' },
                { id: 2, title: 'Стремление к совершенству', text: 'Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия. ' },
            ]
        }
    }
}
</script>
<style lang="scss">
.blocks {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-top: 58px;
    overflow-x: scroll;
    scrollbar-width: none;

    &__content {
        width: 100%;
        max-width: 376px;
        /* White */
        background: rgb(255, 255, 255);
        padding-top: 56px;
        height: 413px;
        padding-left: 50px;

        p {
            width: 100%;
            max-width: 276px;
            margin-top: 30px;
        }
    }
}
</style>