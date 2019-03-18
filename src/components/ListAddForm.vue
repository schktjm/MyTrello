<template>
    <div>
        <input type="text" v-model="title" placeholder="リストのタイトルを入力...">
        <button type="button" class="list-button" @click="addNewList">リストを追加</button>
        <span style="margin-right: 1em;"></span>
        <button type="button" class="del-button" @click="$emit('delForm')">
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
        background-color: #CFD8DC;
        width: 266px;
        margin: 10px 20px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;

        input {
            box-sizing: border-box;
            width: 256px;
            height: 40px;
            padding: 0;
            outline: none;
            border: #5C6BC0 2px solid;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1rem;
        }

        .list-button {
            background-color: #7CB342;
            color: #fff;
            font-weight: bolder;
            font-size: 1rem;
            border: none;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            -webkit-box-shadow: 0 2px 0em #90A4A0;
            -moz-box-shadow: 0 2px 0em #90A4AE;
            box-shadow: 0 2px 0em #90A4AE;
            outline: none;
        }

        .del-button {
            border: 0;
            background: none;
            padding: 0;
            margin: 0;
            line-height: 0;
            outline: 0;
        }
    }
</style>
