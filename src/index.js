/* eslint-disable brace-style */

import Vue from 'vue'
import Draggabilly from 'draggabilly'
import {packeryEvents} from 'vue-packery-plugin'

const draggabillyPlugin = () => {}

export default draggabillyPlugin

draggabillyPlugin.install = function (Vue, options)
{
    Vue.directive('draggabilly', {
        inserted (el, binding)
        {
            el.draggie = new Draggabilly(el, binding.value)
            packeryEvents.$emit('draggie', {draggie: draggie, node: el.parentNode})
        },
        unbind (el)
        {
            el.draggie.destroy()
            el.draggie = null
        }
    })
}
