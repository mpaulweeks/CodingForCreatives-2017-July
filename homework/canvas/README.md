# Portfolio

[View the example web page](http://cfc2017.mpaulweeks.com/homework/canvas/example)

## Assignment

Use javascript and the canvas to draw a picture.

Requirements:

Upload the following to `students/<yourname>/canvas/` by 5pm on Sunday, October 29
- `index.html`
- a `js` file for drawing the picture

## How to use CFC.NewCanvas()

Initialize the canvas, and save it to a variable. Pass it the ID of your canvas element.
```
var canvas = CFC.NewCanvas("my-id");
```
You will re-use this `canvas` variable to call the other functions.

### Setting the Color Palette

This will set the color for all future drawing/filling. These start off as "black".
```
canvas.setDrawColor("cssColor");
canvas.setFillColor("cssColor");
```

### Drawing Functions

Use numbers for the rest of the functions (no quotation marks "").

With an ellipse, (x,y) marks the center of the circle.
```
canvas.drawEllipse(x, y, width, height);
canvas.fillEllipse(x, y, width, height);
```

With a rectangle, (x,y) marks the top left corner.
```
canvas.drawRectangle(x, y, width, height);
canvas.fillRectangle(x, y, width, height);
```

These functions take a series of points, described with (x,y).
```
canvas.drawLine(x1, y1, x2, y2);

canvas.drawTriangle(x1, y1, x2, y2, x3, y3);
canvas.fillTriangle(x1, y1, x2, y2, x3, y3);
```
