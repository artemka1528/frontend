<template lang="">
        <a  v-for="item in items" :key="item.id"  href="">{{item.text}}</a>
</template>
<script>
export default {
    name: 'menu-item',
    props: {
        items: {
            type: Array
        }
    }
}
</script>
<style scoped lang="scss">
a {
    color: rgb(36, 38, 39);
    font-family: Helios;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 0 7px 0 7px;
    @media screen and (max-width: 768px) { 
        color: #fff;
    }

    &:hover {
        &:after {
            display: block;
            position: absolute;
            content: '';
            top: 46px;
            /* Rectangle 28 */
            width: 100%;
            height: 2px;
            background: rgb(233, 134, 42);
        }
    }
}
</style>