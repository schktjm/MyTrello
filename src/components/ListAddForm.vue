<template>
    <div>
        <input type="text" v-model="title" placeholder="リストのタイトルを入力...">
        <button type="button" @click="addNewList">リストを追加</button>
        <span style="margin-right: 1em;"></span>
        <button type="button" @click="$emit('delForm')">
            <font-awesome-icon icon="times"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ListAddButton',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addNewList() {
                this.$emit('addList', this.title);
                this.title = '';
                this.$emit('delForm');
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        box-sizing: border-box;
        background-color: black;
        opacity: 0.5;
        color: white;
        width: 266px;
        padding: 10px 0;
        margin: 10px 20px;

        input {
            box-sizing: border-box;
            width: 256px;
            height: 40px;
            padding: 0;
            outline: none;
            border: blue 3px solid;
        }
    }
</style>
