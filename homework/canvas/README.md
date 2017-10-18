# Portfolio

[View the example web page](http://cfc2017.mpaulweeks.com/homework/canvas/example)

## Assignment

Use javascript and the canvas to draw a picture.

Requirements:

Upload the following to `students/<yourname>/canvas/` by 5pm on Sunday, October 29
- `index.html`
- a `js` file for drawing the picture

## How to Draw
```
// this will set the color for all future drawing/filling
// these start off as "black"
.setDrawColor(cssColor);
.setFillColor(cssColor);

// with an ellipse, (x,y) marks the center of the circle
.drawEllipse(x, y, width, height);
.fillEllipse(x, y, width, height);

// with a rectangle, (x,y) marks the top left corner
.drawRectangle(x, y, width, height);
.fillRectangle(x, y, width, height);

.drawLine(x1, y1, x2, y2);

.drawTriangle(x1, y1, x2, y2, x3, y3);
.fillTriangle(x1, y1, x2, y2, x3, y3);
```
