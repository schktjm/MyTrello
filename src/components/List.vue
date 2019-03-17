<template>
    <base-tile class="is-parent is-4">
        <draggable v-model="list" group="list">
            <list-item v-for="(item,idx) in list" :key="idx" :item="item"></list-item>
        </draggable>
    </base-tile>
</template>

<script>
    import BaseTile from './BaseTile';
    import draggable from 'vuedraggable';
    import ListItem from './ListItem';

    export default {
        name: 'List',
        components: {BaseTile, ListItem, draggable},
        computed: {
            list: {
                get() {
                    return this.$store.state.list;
                },
                set(newlist) {
                    this.$store.commit('updateList', {list: newlist})
                }

            }
        }
    }
</script>

<style lang="scss" scoped></style>