This plugin is no longer maintained, in consideration that packery doesn't play very nice with Vue. Development of a "native" bin packer will continue here => [vue-binpacker-plugin](https://github.com/t-k-f/vue-binpacker-plugin).

# Vue.js Packery Draggabilly Plugin

Addon to support draggabilly for [Vue.js Packery Plugin](https://github.com/t-k-f/vue-packery-plugin)

### Requirements

[Vue.js Packery Plugin](https://github.com/t-k-f/vue-packery-plugin) must be present in project

### Installing

```
npm install --save vue-packery-draggabilly-plugin
```

then

```
import VueDraggabillyPlugin from 'vue-packery-draggabilly-plugin'

Vue.use(VueDraggabillyPlugin)
```

### Usage

```
<div v-draggabilly v-packery='{itemSelector: ".packery-item", percentPosition: true}'>

    <div v-draggabilly v-packery-item class='packery-item'></div>
    <div v-draggabilly v-packery-item class='packery-item'></div>
    <div v-draggabilly v-packery-item class='packery-item'></div>

</div>
```


#### Options

Pass an object with [Draggabilly options](https://draggabilly.desandro.com/) as an argument to the v-draggabilly directive to change the settings.

Passing along the custom key `disableDraggabilly` with a bool, disables/enables (true/false) the draggabilly instace via the official `draggie.disable()` & `draggie.enable()` methods.
Or the custom key `recalculateOnMove` which updates card position upon drag, good for CSS transformed views.

Example usage:
```
<div v-draggabilly="{
    axis: 'x',
    grid: [ 20, 20 ],
    handle: '.handle',
    containment: true,
    disableDraggabilly: false
}" v-packery-item class='packery-item'></div>
```
