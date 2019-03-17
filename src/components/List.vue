<template>
    <draggable v-model="listObj.list" group="item" class="one-list" :clone="sendData">
        <list-item v-for="(item,idx) in listObj.list" :key="idx" :item="item"></list-item>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable';
    import ListItem from './ListItem';

    export default {
        name: 'List',
        components: {ListItem, draggable},
        props: {
            listObj: {
                name: String,
                list: Array
            }
        },
        data() {
            return {
                newlistObj: this.listObj
            }
        },
        computed: {
            // list: {
            //     get() {
            //         return this.$store.state.list;
            //     },
            //     set(newlist) {
            //         this.$store.commit('updateList', {list: newlist})
            //     }
            //
            // }
        },
        methods: {
            sendData(newlist) {
                return newlist;
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
