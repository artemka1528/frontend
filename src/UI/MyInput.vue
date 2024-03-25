<template>
    <div class="input">
        <input id="input" class="input__content"
            :class="{ 'input__content-error': error, 'input__content-padding': modelValue }" :value="modelValue"
            @input="updateInput" required="1" :placeholder="placeholder" :type="typeInput">
        <label class="input__label" for="person-phone">{{ placeholder }}</label>
        <div class="input__clear" @click="this.$emit('update:modelValue', '')"
            v-if="modelValue && !complited && typeInput !== 'date'">
            <!-- <img src="../assets/input__clear.svg" alt="jhgjhg"> -->
            <svg>
                <use :xlink:href="require('@/assets/input__clear.svg') + '#input__clear'"></use>
            </svg>
        </div>
        <div :complited="complited" v-if="complited" class="input__complited">
            <img src="../assets/complited.svg" alt="">
        </div>
        <span class="input__error">{{ error }}</span>
    </div>
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
        placeholder: [String],
        typeInput: [String],
        error: [String],
        complited: [Boolean]
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        updateInput(event) {
            if (this.typeInput == 'tel') {

                let phoneNumber = event.target.value.replace(/\D/g, '');


                // Если номер телефона короче 10 символов, не добавляем скобки
                if (phoneNumber.length <= 10) {
                    event.target.value = phoneNumber;
                    return;
                }
                console.log(123);
                console.log(phoneNumber);
                // Добавляем скобки и дефисы к номеру телефона
                if (phoneNumber[0] == '8') {
                    phoneNumber = phoneNumber.slice(1)
                }
                var formattedPhoneNumber = '+ 7 (' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6, 8) + '-' + phoneNumber.substring(8, 10);

                // Обновляем значение в инпуте
                event.target.value = formattedPhoneNumber;
            }


            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style lang="scss">
input[type="file"] {
    border: none;
    border-bottom: 1px solid red;
}

.input__clear {
    position: absolute;
    right: 25px;
    top: 35px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    transform: translateY(-50%)
}

.input__complited {
    position: absolute;
    right: 25px;
    top: 50%;
    width: 12px;
    height: 12px;
    transform: translateY(-50%)
}

.input__error {
    color: rgb(190, 26, 26);
    font-family: Helios;
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
    margin-left: 28px;
}

.input__content {
    padding: 25px 28px;
    box-sizing: border-box;
    border: 1px solid rgb(224, 224, 224);
    outline: 0;
    outline-offset: 0;
    width: 100%;
    height: 70px;
    color: rgb(36, 38, 39);
    font-family: Helios;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;

    &:hover {
        background: rgb(242, 242, 242);
    }

    &::placeholder {
        font-family: Helios;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
    }

    &:focus {
        padding-bottom: 15px;

        &::placeholder {
            transform: translateY(-45px);
        }

        .input__label {
            top: 0;
        }
    }

    &-error {
        border: 1px solid rgb(191, 30, 46);
    }

    &-padding {
        padding-bottom: 15px;
    }

}

input:focus+label,
input:not(:placeholder-shown)+label {
    top: 20px;
    display: block;
    color: rgb(130, 130, 130);
    font-family: Helios;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
}

.input {
    display: inline-block;
    width: auto;
    position: relative;
    color: rgb(36, 38, 39);
    font-family: Helios;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
}

.input__label {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    display: none;
}
</style>