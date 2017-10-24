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
    <span id="daysVal"></span>
    <div class="countdown-label">Days</div>
</div>
```

# JS

1) Run the function:
```javascript
simple_countdown(Month Day, Year 00:00:00);
```

## Demo
See the basic functionality [here](http://russellramey.me/examples/simple-countdown).
