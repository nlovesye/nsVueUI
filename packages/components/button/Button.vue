<template>
    <component :is="tagName" :class="cls">
        <slot></slot>
    </component>
</template>

<script>
const prefixCls = 'ns_btn'

export default {
    name: 'Button',
    computed: {
        tagName () {
            return 'button'
        },
        cls () {
            return [
                `${prefixCls}`
            ]
        }
    }
}
</script>

<style>
</style>
