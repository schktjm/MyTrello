<template>
    <button type="button" @click="$emit('click')">
        <font-awesome-icon icon="plus"></font-awesome-icon>
        <span style="margin-right: 1em;"></span>
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
        height: 32px;
        margin: 10px 20px;

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
