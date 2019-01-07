# Vue.js Draggabilly Plugin

A wrapper for the beloved draggabilly(packery) for vue.js

### Installing

```
npm install --save vue-draggabilly-plugin
```

then

```
import VueDraggabillyPlugin from 'vue-packery-plugin'

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
