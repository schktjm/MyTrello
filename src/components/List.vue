<template>
    <draggable v-model="list" group="item" class="one-list">
        <list-item v-for="(item,idx) in list" :key="idx" :item="item"></list-item>
        <div slot="footer">
            <ListItemAddButton @clickAdd="isShowFrom=true" v-show="!isShowFrom"></ListItemAddButton>
            <list-item-add-form v-show="isShowFrom" @clickDel="isShowFrom = false"
                                @submit="addNewItem"></list-item-add-form>
        </div>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable';
    import ListItem from './ListItem';
    import ListItemAddButton from './ListItemAddButton';
    import ListItemAddForm from './ListItemAddForm';

    export default {
        name: 'List',
        components: {ListItem, ListItemAddButton, ListItemAddForm, draggable},
        props: {
            listIdx: Number
        },
        data() {
            return {
                isShowFrom: false
            }
        },
        computed: {
            list: {
                get() {
                    return this.$store.state.lists[this.listIdx].list;
                },
                set(newlist) {
                    this.$store.commit('updateListItem', {list: newlist, idx: this.listIdx})
                }

            }
        },
        methods: {
            addNewItem(val) {
                console.log(val);
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
