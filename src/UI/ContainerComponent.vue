<template>
    <div id="container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'container-component'
}
</script>
<style scoped>
    #container {
        width: 100%;
        max-width: 1193px;
        margin: 0 auto;
        /* padding-left: 15px;
        padding-right: 15px; */
        /* overflow-: hidden; */
        @media screen and (max-width: 768px) {
            max-width: 689px;
        }
    }
</style>