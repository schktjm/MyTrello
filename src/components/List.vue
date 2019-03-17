<template>
    <draggable v-model="list" group="list" class="one-list">
        <list-item v-for="(item,idx) in list" :key="idx" :item="item"></list-item>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable';
    import ListItem from './ListItem';

    export default {
        name: 'List',
        components: {ListItem, draggable},
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

<style lang="scss" scoped>
    .one-list {
        border: red 1px solid;
        width: 266px;
        margin: 10px 20px;
    }
</style>
