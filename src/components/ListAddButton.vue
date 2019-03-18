<template>
    <button type="button" @click="$emit('click')">
        <font-awesome-icon icon="plus"></font-awesome-icon>
        <span style="margin-right: 0.5em;"></span>
        <a>もう一つリストを追加</a>
    </button>
</template>

<script>
    export default {
        name: 'ListAddButton'
    }
</script>

<style lang="scss" scoped>
    button {
        color: white;
        background-color: black;
        opacity: 0.3;
        width: 266px;
        margin: 10px 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-size: 1rem;
        height: 3rem;
        text-align: start;

        &:hover {
            opacity: 0.6;

            a {
                text-decoration: underline;
            }
        }

        &:focus {
            outline: none;
        }

        a {
            text-decoration: none;
        }
    }
</style>
