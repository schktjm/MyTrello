<template>
    <div class="one-item">
        <p>{{item.text}}</p>
        <p>{{item.place}}</p>
        <p>
            <span v-if="hasDate(item)">{{item.date}}</span>
            <span v-if="hasPlace(item)">@{{item.place}}</span>
        </p>
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
        border: black 1px solid;
        height: 128px;
        width: 256px;
        margin: 5px;
    }
</style>
