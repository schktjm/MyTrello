<template>
    <div>
        <draggable v-model="lists" group="list" class="container">
            <list v-for="(list, idx) in lists" :key="idx" :listObj="list" @changeList="lists"></list>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import List from '../components/List';

    export default {
        name: 'Bord',
        components: {draggable, List},
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
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
    }
</style>
