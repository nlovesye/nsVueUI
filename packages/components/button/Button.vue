<template>
    <component :is="tagName" :class="cls">
        <slot></slot>
    </component>
</template>

<script>
import { oneOf } from '../../utils/helper'

const prefixCls = 'ns_btn'

export default {
    name: 'Button',
    props: {
        type: {
            validator (val) {
                return oneOf(val, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
            },
            default: 'default'
        }
    },
    computed: {
        tagName () {
            return 'button'
        },
        cls () {
            return [
                `${prefixCls}`,
                `${prefixCls}_${this.type}`
            ]
        }
    }
}
</script>

<style>
</style>
