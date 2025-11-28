# POC Web component

In order to provide a web component example, it was created a component named warning banner.
This component includes: HTML + CSS + JS + External API data.

## Integration
To integrate this web component add to your HTML head:

```
<link rel="stylesheet" href="https://doutorfinancas.github.io/df-ui/main.css">
<script type="module" src="https://soniasilvadf.github.io/web-component-v2/banner.js"></script>

```
and place a component on the HTML body
```
<warning-banner></warning-banner>
```

You can set the following properties:
- title
- url
- message
- type

```
<warning-banner title="Features in maintenance:"></warning-banner>
```

And also some CSS properties:
- width
- position (absolute, relative, fixed, ...)
- top (10px, 0px, 5vh, ...)
- left
- right
- zIndex


```
<warning-banner class="col" position="absolute" zIndex="100" ></warning-banner>
```

### Icons
We are using the icons provided bty the DF-UI font!


### Angular support
If you want to integrate in your angular component: you can!
Import CSS and JS:
Option 1: in the index.html as mentioned above
Option 2: in the main
```
import 'https://soniasilvadf.github.io/web-component-v2/banner.js';
```
and in angular.json or other, import CSS
```
https://doutorfinancas.github.io/df-ui/main.css
```



You should add the element to the template, as described above, and then add on your component the schemas:

```
@Component({
    .....
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```

## API data
The banner calls an external API to add data, , and you can override it by adding the url property.