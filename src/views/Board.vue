<template>
    <div class="container">
        <div>
            <draggable v-model="lists" group="list" class="container">
                <list v-for="(list, idx) in lists" :key="idx" :listObj="list"></list>
            </draggable>
        </div>
        <div>
            <list-add-button v-show="!isShowForm" @click="isShowForm = true"></list-add-button>
            <list-add-form v-show="isShowForm" @addList="addNewList" @delForm="isShowForm=false"></list-add-form>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import List from '../components/List';
    import ListAddButton from '../components/ListAddButton';
    import ListAddForm from '../components/ListAddForm';

    export default {
        name: 'Bord',
        components: {draggable, List, ListAddButton, ListAddForm},
        data() {
            return {
                isShowForm: false
            }
        },
        computed: {
            lists: {
                get() {
                    return this.$store.state.lists;
                },
                set(newlists) {
                    console.log(newlists);
                    this.$store.commit('updateLists', {lists: newlists});
                }
            }
        },
        methods: {
            addNewList(val) {
                console.log(val);
                this.$store.commit('addNewList', {title: val});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
    }
</style>
