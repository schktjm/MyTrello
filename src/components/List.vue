<template>
    <draggable v-model="list" group="item" class="one-list" draggable=".item">
        <list-item v-for="(item,idx) in list" :key="idx" :item="item" class="item"></list-item>

        <div slot="header" class="title"><p>{{title}}</p></div>
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
            title() {
                return this.$store.state.lists[this.listIdx].name
            },
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
                this.list = [...this.list, {text: val}];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .one-list {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background-color: #CFD8DC;
        width: 276px;
        margin: 10px 20px;
        overflow: scroll;
        max-height: 100%;

        .title {
            text-align: left;
            margin-left: 1em;

            p {
                font-weight: bold;
            }
        }
    }
</style>
