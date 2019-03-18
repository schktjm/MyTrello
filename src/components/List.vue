<template>
    <div class="one-list">
        <list-item v-for="(item,idx) in listObj.list" :key="idx" :item="item"></list-item>
        <ListItemAddButton @clickAdd="isShowFrom=true" v-show="!isShowFrom"></ListItemAddButton>
        <list-item-add-form v-show="isShowFrom" @clickDel="isShowFrom = false"
                            @submit="addNewItem"></list-item-add-form>
    </div>
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
            listObj: {
                name: String,
                list: Array
            }
        },
        data() {
            return {
                newlistObj: this.listObj,
                isShowFrom: false
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
            log(val) {
                console.log(val);
            },
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
