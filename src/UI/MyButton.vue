<template lang="">
    <button class="button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style lang="scss" scoped>
.button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(233, 134, 42);
    color: rgb(255, 255, 255);
    // font-family: HeliosCond;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0%;
    border: none;
    &:disabled {
        /* Gray */
background: rgb(195, 200, 200);
    }
}
</style>