/* eslint-disable brace-style */

import Vue from 'vue'
import Draggabilly from 'draggabilly'
import {packeryEvents} from 'vue-packery-plugin'

const draggabillyPlugin = () => {}

export default draggabillyPlugin

draggabillyPlugin.install = function (Vue, options)
{
    Vue.directive('draggabilly', {
        inserted (el)
        {
            var draggie = new Draggabilly(el)
            packeryEvents.$emit('draggie', {draggie: draggie, node: el.parentNode})
        }
    })
}
