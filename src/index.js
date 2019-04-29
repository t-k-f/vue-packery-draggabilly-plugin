/* eslint-disable brace-style */

import Vue from 'vue'
import Draggabilly from 'draggabilly'
import {packeryEvents} from 'vue-packery-plugin'

const draggabillyPlugin = () => {}

export default draggabillyPlugin

function handlerFactory(el) {
    return ( event, pointer, moveVector ) => {
        el.draggie.setPosition( el.draggie.position.x, el.draggie.position.y );
    };
}

draggabillyPlugin.install = function (Vue, options)
{
    Vue.directive('draggabilly', {
        inserted (el, binding) {
            el.draggie = el.draggie || new Draggabilly(el, binding.value)

            packeryEvents.$emit('draggie', {draggie: el.draggie, node: el.parentNode})

            if (binding.value.disableDraggabilly) {
                el.draggie.disable()
            }
            else {
                el.draggie.enable()
            }
        },
        update (el, { value }) {
            if(el.handlerFunc){
                el.draggie.off( 'dragMove', el.handlerFunc);
            }
            if (value.recalculateOnMove){
                el.handlerFunc = handlerFactory(el);
                el.draggie.on( 'dragMove', el.handlerFunc);
            }
        },
        unbind (el) {
            el.draggie.destroy()
            el.draggie = null
        }
    })
}
