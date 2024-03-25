<template>
    <div @click="$emit('toogleBurger')" class="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
export default {
    name: 'burger-component'
}
</script>
<style lang="scss">
.burger {
    display: none;
    position: relative;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    span {
        display: block;
        width: 28px;
        height: 2px;
        background: black;
    }
}
</style>