<template>
    <div>
        <textarea v-model="message" name="input-form" placeholder="このカードにタイトルを入力..."></textarea>
        <button type="button" @click="sbmMessage">カードを追加</button>
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
                this.$emit('submit', this.message);
                this.message = '';
                this.$emit('clickDel');
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        textarea {
            width: 256px;
            padding: 0;
            margin: 5px;

        }

        .del-button {
            border: 0;
            background: none;
            padding: 0;
            margin: 0;
            line-height: 0;
        }
    }
</style>
