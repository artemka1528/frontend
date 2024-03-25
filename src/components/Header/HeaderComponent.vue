<template>
    <container-component class="header-content">
        <HeaderLogo />
        <MenuList />
    </container-component>
    
</template>
<script>

import HeaderLogo from './HeaderLogo.vue';
import MenuList from './MenuList.vue';
export default {
    name: 'HeaderComponent',
    components: {
        HeaderLogo,
        MenuList,
    }
}
</script>
<style scoped>
    .header-content {
        display: flex;
        justify-content: space-between;
        padding-top: 46px;
        padding-bottom: 23px;
    }
</style>