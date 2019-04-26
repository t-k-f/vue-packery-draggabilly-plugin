/* eslint-disable brace-style */

import Vue from 'vue'
import Draggabilly from 'draggabilly'
import {packeryEvents} from 'vue-packery-plugin'

const draggabillyPlugin = () => {}

export default draggabillyPlugin

draggabillyPlugin.install = function (Vue, options)
{
    Vue.directive('draggabilly', {
        inserted (el, binding) {
            el.draggie = new Draggabilly(el, binding.value)

            if (binding.value.hasOwnProperty('recalculateOnMove')) {
                el.draggie.on( 'dragMove', function( event, pointer, moveVector ) {
                    if (binding.value.recalculateOnMove) {
                        // Card position
                        el.draggie.setPosition( el.draggie.position.x, el.draggie.position.y );
                        // Drop position
                        el.draggie.position.y = el.draggie.position.y + moveVector.y;
                        el.draggie.position.x = el.draggie.position.x + moveVector.x;
                    }
                });
            }

            packeryEvents.$emit('draggie', {draggie: el.draggie, node: el.parentNode})

            if (binding.value.hasOwnProperty('disableDraggabilly')) {
                if (binding.value.disableDraggabilly) {
                    el.draggie.disable()
                }
                else {
                    el.draggie.enable()
                }
            }
        },
        unbind (el) {
            el.draggie.destroy()
            el.draggie = null
        }
    })
}
