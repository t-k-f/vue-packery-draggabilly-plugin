/* eslint-disable brace-style */

import Vue from 'vue'
import Draggabilly from 'draggabilly'
import { packeryEvents } from 'vue-packery-plugin'

const draggabillyPlugin = () => {}

export default draggabillyPlugin

function recalcFactory(el) {
    return ( event, pointer, moveVector ) => {
        el.draggie.setPosition( el.draggie.position.x, el.draggie.position.y );
    };
}

draggabillyPlugin.install = function (Vue, options)
{
    Vue.directive('draggabilly', {
        inserted (el, binding) {
            const options = binding.value || {}
            el.draggie = el.draggie || new Draggabilly(el, options)

            packeryEvents.$emit('draggie', {draggie: el.draggie, node: el.parentNode})

            if (options.disableDraggabilly) {
                el.draggie.disable()
            }
            else {
                el.draggie.enable()
            }
        },
        update (el, binding) {
            const options = binding.value || {}
            if(el.recalcFunc){
                el.draggie.off( 'dragMove', el.recalcFunc);
            }
            if (options.recalculateOnMove){
                el.recalcFunc = recalcFactory(el);
                el.draggie.on( 'dragMove', el.recalcFunc);
            }
        },
        unbind (el) {
            el.draggie.destroy()
            el.draggie = null
        }
    })
}
