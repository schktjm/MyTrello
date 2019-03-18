<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from './views/Navbar';

    export default {
        components: {Navbar}
    }
</script>

<style lang="scss">
    #app {
        font-family: "Noto Sans JP", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
