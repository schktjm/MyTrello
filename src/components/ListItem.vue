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
        border-radius: 5px;
        box-shadow: 0 2px 1px #90A4AE;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 2em;
        width: 256px;
        margin: 10px;

        &:hover {
            background-color: #ECEFF1;
        }

        p {
            padding-left: 1em;
        }
    }
</style>
