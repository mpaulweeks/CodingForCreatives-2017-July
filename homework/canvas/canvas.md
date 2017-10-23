# How to use CFC.NewCanvas()

Initialize the canvas, and save it to a variable. Pass it the ID of your canvas element.
```javascript
var canvas = CFC.NewCanvas("my-id");
```
You will re-use this `canvas` variable to call the other functions.

### Drawing Functions

Use a string for the cssColor wrapped in quotes, like `"black"` or `"#808080"`.

Use numbers for the rest of the parameters (no quotation marks).

With an ellipse, (x,y) marks the center of the circle.
```javascript
canvas.drawEllipse("cssColor", x, y, width, height);
canvas.fillEllipse("cssColor", x, y, width, height);
```

With a rectangle, (x,y) marks the top left corner.
```javascript
canvas.drawRectangle("cssColor", x, y, width, height);
canvas.fillRectangle("cssColor", x, y, width, height);
```

These functions take a series of points, described with (x,y).
```javascript
canvas.drawLine("cssColor", x1, y1, x2, y2);

canvas.drawTriangle("cssColor", x1, y1, x2, y2, x3, y3);
canvas.fillTriangle("cssColor", x1, y1, x2, y2, x3, y3);
```
