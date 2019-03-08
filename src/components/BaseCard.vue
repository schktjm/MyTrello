<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">
                <slot name="default"></slot>
            </div>
            <div class="card-header-icon">
                <slot name="icon"></slot>
            </div>
        </div>
        <div class="card-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseCard'
    }
</script>

<style lang="scss" scoped></style>