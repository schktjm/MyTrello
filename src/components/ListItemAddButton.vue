<template>
    <button type="button" class="one-button" @click="$emit('clickAdd')">
        <font-awesome-icon icon="plus"></font-awesome-icon>
        <a>&nbsp;&nbsp; さらにカードを追加</a>
    </button>
</template>

<script>
    export default {
        name: 'ListItemAddButton',
        props: {},
        data() {
            return {
                isShowFrom: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        border: black 1px dashed;
        width: 256px;
        margin: 5px;

        &:hover {
            background-color: #ECEFF1;

            a {
                text-decoration: underline;
            }
        }

        &:focus {
            outline: none;
            background-color: lightgrey;
        }

        a {
            text-decoration: none;
        }

    }

</style>
