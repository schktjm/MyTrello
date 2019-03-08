<template>
    <div>
        <base-box v-for="(item, idx) in list" :key="idx">
            <p>{{item.text}}</p>
            <p>{{item.place}}</p>
            <p>
                <span v-if="hasDate(item)">{{item.date}}</span>
                <span v-if="hasPlace(item)">@{{item.place}}</span>
            </p>
        </base-box>
    </div>
</template>

<script>
    import BaseBox from './BaseBox';

    export default {
        name: 'ListItem',
        components: {BaseBox},
        props: {
            list: Array
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

<style lang="scss" scoped></style>