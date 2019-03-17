<template>
    <base-tile class="is-child">
        <base-box>
            <p>{{item.text}}</p>
            <p>{{item.place}}</p>
            <p>
                <span v-if="hasDate(item)">{{item.date}}</span>
                <span v-if="hasPlace(item)">@{{item.place}}</span>
            </p>
        </base-box>
    </base-tile>
</template>

<script>
    import BaseBox from './BaseBox';
    import BaseTile from './BaseTile';

    export default {
        name: 'ListItem',
        components: {BaseBox, BaseTile},
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

<style lang="scss" scoped></style>