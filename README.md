## Overview

Simple countdown timer, mainly used for an event or countdown to day done in plain javascript with no dependencies.


## Markup

1) Create a container:
```html
<div id="countdown">
	-- content will go here --
</div>
```

2) Create a container for each digit (example: days). Create one for each digit, days, hours, minutes, seconds:
```html
<div id="days">
    <span id="daysTxt"></span>
    <div class="smalltext">Days</div>
</div>
```

# JS

1) Set the target date for countdown:
```javascript
var deadline = new Date("January 1, 2017");
```

2) Run the function:
```javascript
simple_countdown();
```

## Demo
See the basic functionality [here](http://russellramey.me/examples/simple-countdown).