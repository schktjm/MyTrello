<template>
    <div>
        <textarea name="text-area" v-model="message" placeholder="このカードにタイトルを入力..."></textarea>
        <button type="button" class="sbm-button" @click="sbmMessage">カードを追加</button>
        <span style="margin-right: 1em;"></span>
        <button class="del-button" type="button" @click="$emit('clickDel')">
            <font-awesome-icon icon="times"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ListItemAddForm',
        data() {
            return {
                message: ''
            }
        },
        methods: {
            sbmMessage() {
                if (this.message !== '') {
                    this.$emit('submit', this.message);
                    this.message = '';
                    this.$emit('clickDel');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px;

        textarea {
            height: 5em;
            width: 256px;
            font-size: 1rem;
            box-sizing: border-box;
            border: none;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            box-shadow: 0 2px 1px #90A4AE;
            padding: 0.5em 0 0 0.5em;
            resize: none;
            margin-bottom: 10px;
        }

        .sbm-button {
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
