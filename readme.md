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
