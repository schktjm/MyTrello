<template>
    <div class="one-item">
        <p>{{item.text}}</p>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: {
            item: Object
        },
        computed: {},
        methods: {
            hasDate(item) {
                return item.date !== '';
            },
            hasPlace(item) {
                return item.place !== '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .one-item {
        background-color: white;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
        width: 256px;
        margin: 5px;
    }
</style>
