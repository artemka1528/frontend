<template>
    <div v-if="!formValid" class="response">
        <h1 style="color:#000"> Отклик на вакансию</h1>
        <div class="response__content">
            <my-input v-model="vacancy.value" type="text" placeholder="Желаемая вакансия *" class="response__input"
                :error="vacancy.error" :complited="vacancy.complited"></my-input>
            <my-input :error="fio.error" v-model="fio.value" typeInput="text" placeholder="Фамилия, имя и отчество *"
                class="response__input" :complited="fio.complited"></my-input>
            <div class="response__content__container response__content__container-gap">
                <my-input @change="inputTel" :error="tel.error" v-model="tel.value" typeInput="tel"
                    placeholder="Мобильный телефон*" class="response__input" pattern="/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/"
                    :complited="tel.complited"></my-input>
                <my-input :error="mail.error" v-model="mail.value" placeholder="E-mail" class="response__input"
                    :complited="mail.complited"></my-input>
            </div>
            <my-input :error="education.error" v-model="education.value" placeholder="Образование *"
                class="response__input" :complited="education.complited"></my-input>
            <my-input :error="adress.error" v-model="adress.value" placeholder="Адрес места жительства *"
                class="response__input" :complited="adress.complited"></my-input>
            <div class="response__content__container">
                <my-input :error="date.error" v-model="date.value" typeInput="date" placeholder="Дата рождения"
                    class="response__input response__input-date-width"></my-input>
                <!-- Контейнер для кастомного инпута -->
                <div class="file-input-container">
                    <label for="fileInput" class="file-label">{{ fileName }}</label>
                    <input type="file" id="fileInput" @change="onFileChange" ref="fileInput" style="display: none;">
                    <button v-if="file" class="remove-button" @click="clearFile">
                        <!-- <img src="../assets/close.svg" alt=""> -->
                        <svg style="height: 62px; width: 62px;">
                            <use :xlink:href="require('@/assets/delete.svg') + '#delete'"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <textarea placeholder="Комментарий" class="text-area" name="" id="" cols="30" rows="10"></textarea>
            <!-- <my-input typeInput="text" placeholder="Комментарий"></my-input> -->
            <div class="response__footer">
                <div class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" @click="disabled = !disabled; console.log(123123)">
                    <img class="custom-checkbox__img" src="../assets/ok.svg" alt="">
                    <label for="checkbox1">Я принимаю условия передачи информации</label>
                </div>
                <my-button class="response__footer__btn response__footer__btn-width" :disabled="disabled"
                    @click="validateForm">Отправить</my-button>
            </div>
        </div>
    </div>
    <div v-else class="sucess">
        <h2 class="sucess__title">Сообщение успешно отправлено</h2>
        <p class="sucess__text">Наш менеджер свяжется с вами в ближайшее время</p>
    </div>
</template>
<script>
import validator from 'validator';
export default {
    data() {
        return {
            disabled: true,
            formValid: false,
            file: null,
            fileName: 'Загрузить резюме',
            vacancy: {
                value: '',
                error: '',
                requried: true,
                complited: false
            },
            fio: {
                value: '',
                error: '',
                requried: true,
                complited: false
            },
            tel: {
                value: '',
                error: '',
                requried: true,
                complited: false
            },
            mail: {
                value: '',
                error: '',
                requried: false,
                complited: false
            },
            education: {
                value: '',
                error: '',
                requried: true,
                complited: false
            },
            adress: {
                value: '',
                error: '',
                requried: true,
                complited: false
            },
            date: {
                value: '2018-07-22',
                error: '',
                requried: false,
                complited: false
            },
            valueFile: 'Загрузить резюме'
        }
    },
    methods: {
        inputTel(event) {
            console.log(event);
        },
        onFileChange(event) {
            // Обработка выбора файла
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                this.file = selectedFile;
                this.fileName = selectedFile.name;
            }
        },
        clearFile() {
            // Очистка выбранного файла
            this.file = null;
            this.fileName = 'Загразить резюме'; // Очистка названия файла
            this.$refs.fileInput.value = ''; // Очистка значения поля ввода файла
        },
        isValidEmail() {
            console.log(validator.isEmail('puzyrev_artem@bk.ru'));
        },
        isValidLength() {

        },
        isValidFIO(value) {
            const regExp = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/

            if (regExp.test(value)) {
                return true
            }
            else {
                return false
            }
            // this.mail.error = 'Введите корректные Данные'
        },
        isValidAddress(address) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /[\s]*[г\.]*\s*[А-Яа-я\-]{2,}[\,\s]*[ул|пер|пр|б-р]*\.\s*[А-Яа-я\-]{2,}[\,\s]*[д\.]*\s*\d{1,3}[\\\d{1,3}]*[\,\s\-]*[кв\.]*\s*\d{1,3}\s*/gmi;

            if (regExp.test(address)) {
                return true
            }
            else {
                return false
            }
        },
        validateForm() {
            console.log(this.vacancy.value);
            if (this.vacancy.value) {
                this.vacancy.error = ''
                this.vacancy.complited = true

            } else {
                this.vacancy.complited = false
                this.vacancy.error = 'Заполните поле'
                return
            }
            if (this.education.value) {
                this.education.error = ''
                this.education.complited = true
            } else {
                this.vacancy.complited = false
                this.education.error = 'Заполните поле'
                return
            }

            if (!validator.isEmail(this.mail.value)) {
                this.mail.complited = false
                this.mail.error = 'Введите корректный адрес'
                return
            } else {
                this.mail.error = ''
                this.mail.complited = true
            }

            if (!this.isValidFIO(this.fio.value)) {
                this.fio.complited = false
                this.fio.error = 'Введите корректные данные'
                return
            } else {
                this.fio.error = ''
                this.fio.complited = true
            }
            if (!this.isValidAddress(this.adress.value)) {
                this.adress.error = 'Введите адрес (Например: ул. Благова, 25, Иваново,)'
                this.adress.complited = false
                return
            } else {
                this.adress.error = ''
                this.adress.complited = true
            }
            this.formValid = true;
        }
    }
}
</script>
<style lang="scss" scoped>
.sucess {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {}

    &__text {
        margin-top: 46px;
    }
}

.date-input-container {
    position: relative;
}

.response__input-date-width {
    @media screen and (min-width: 564px) {
        width: 266px;

    }
}

.response__content__container {
    gap: 32px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    max-width: 600px;

    @media screen and (max-width: 564px) {
        flex-direction: column;
    }
}

.date-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    /* Расположение иконки внутри контейнера */
    transform: translateY(-50%);
    cursor: pointer;
}

/* Скрытие стандартного элемента input */
input[type="date"] {
    display: none;
}

.response__content__container-gap {
    gap: 5px;
}

.text-area {
    width: 100%;
    height: 153px;
}

.file-input-container {
    display: flex;
    justify-content: center;
    position: relative;
    min-width: 262px;
    width: 100%;
    height: 44px;
    border: none;
    border-bottom: 1px solid rgb(36, 38, 39);

    label {
        border: none;
    }
}



.file-label {
    display: inline-block;
    padding-left: 6px;
    padding-top: 1px;
    border: 1px solid #ccc;
    cursor: pointer;
    color: rgb(24, 124, 211);
    font-family: Helios;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
}

.remove-button {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding: 5px 10px;
    border: none;
    background: none;
    cursor: pointer;
}

.response {
    margin-left: 180px;
    margin-top: 100px;
    width: 100%;
    max-width: 712px;

    @media screen and (max-width: 1285px) {
        margin-left: 0;
        padding: 0 20px;
    }

    &__input {
        width: 100%;
    }

    &__content {
        gap: 32px;
        margin-top: 61px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__footer {
        box-sizing: border-box;
        border: 1px solid rgb(242, 242, 242);
        border-radius: 2px;
        width: 100%;
        padding: 38px 34px 38px 27px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__btn {
            width: 100%;
            max-width: 210px;
            height: 64px;

            &-width {
                @media screen and (max-width: 564px) {
                    max-width: 100%;
                    margin-top: 38px;

                }

            }
        }

        @media screen and (max-width: 564px) {
            flex-direction: column;
            padding: 0;
            border: none;

        }
    }
}

/* Стилизация чекбокса */
.custom-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.custom-checkbox input[type="checkbox"] {
    /* Скрытие стандартного чекбокса */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    border: 1px solid #E9862A;
    border-radius: 3px;
    cursor: pointer;
}

.custom-checkbox input[type="checkbox"]:checked {
    background-color: #E9862A;
    /* Цвет фона при выбранном чекбоксе */
}

/* Стилизация метки */
.custom-checkbox label {
    display: inline-block;
    font-size: 13px;
    color: #000;
    margin-left: 20px;
}

.custom-checkbox__img {
    pointer-events: none;
    position: absolute;
    left: 12px;
    transform: translateX(-6px);
}
</style>