# vue-animate-onscroll
A simple Vue 3 directive that animates elements as they scroll into view.

## Installation

```sh
npm install vue-animate-onscroll
```

## Setup
```typescript
import { createApp } from 'vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'

const app = createApp(App)
app.use(VueAnimateOnScroll)
app.mount('#app')
```

## Usage
For demo purposes, let's use [animate.css](https://animate.style/),
a CSS animation library, but using your own custom CSS animations would work the same way.

Import `animate.css` however you like. For example, in your `index.html`:
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
</head>
```

Pass the desired class as a string literal (in single quotes) in your Vue template:
```html
<div v-animate-onscroll="'animate__animated animate__flip'">Animate me once upon scroll</div>
```

### Offset
To trigger the animation with an offset at the top and the bottom, add a `data-animate-onscroll-offset` attribute:
```html
<div v-animate-onscroll="'animate__animated animate__flip'" data-animate-onscroll-offset="100">Animate me with 100px offset</div>
```

### Repeat Modifier
By default the animation triggers once. To repeat it every time the element scrolls into view, use the `repeat` modifier:
```html
<div v-animate-onscroll.repeat="'animate__animated animate__flip'">Animate me forever</div>
```

### In-/Out-Animations
For in and out animations on scroll, use `in` and `out` keys:
```html
<div v-animate-onscroll.repeat="{in: 'animate__animated animate__flipInX', out: 'animate__animated animate__flipOutX'}" data-animate-onscroll-offset="100">Flip in and out</div>
```

### Scroll Direction
Animate only on a specific scroll direction:
```html
<div v-animate-onscroll="{down: 'animate__animated animate__flip'}">Animate once on scroll down</div>
<div v-animate-onscroll="{up: 'animate__animated animate__rotateOut'}">Animate once on scroll up</div>
```

With repeat:
```html
<div v-animate-onscroll.repeat="{down: 'animate__animated animate__flip'}">Animate every scroll down</div>
```

### Multiple animations
Use two different animations for each scroll direction:
```html
<div v-animate-onscroll="{down: 'animate__animated animate__flip', up: 'animate__animated animate__rotateOut'}">Different animations per direction</div>
```
Note: providing both `up` and `down` implicitly enables repeating.

## Development

```sh
npm install
npm run dev    # starts demo page
npm run test   # runs tests
npm run build  # builds library
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">vue-animate-onscroll</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="www.josephharveyangeles.com" property="cc:attributionName" rel="cc:attributionURL">Joseph Harvey Angeles</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/josephharveyangeles/vue-animate-onscroll" rel="dct:source">https://github.com/josephharveyangeles/vue-animate-onscroll</a>.
