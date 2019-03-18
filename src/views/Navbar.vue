<template>
    <nav class="navbar">
        <font-awesome-icon icon="coffee"></font-awesome-icon>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: black;
        opacity: 0.5;
        width: 100vw;
        height: 50px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        * {
            fill: white;
            width: 32px;
            height: 32px;
        }
    }
</style>
