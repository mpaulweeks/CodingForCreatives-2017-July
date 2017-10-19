
var canvas = CFC.NewCanvas("cfc-canvas");

canvas.fillRectangle("yellow", 50, 50, 400, 600);

var darkOutline = "black";
canvas.drawRectangle(darkOutline, 70, 70, 360, 560);
canvas.drawEllipse(darkOutline, 200, 200, 200, 100);
canvas.drawLine(darkOutline, 30, 500, 230, 700);

canvas.drawEllipse("green", 220, 220, 200, 100);

canvas.fillTriangle("blue", 200, 600, 350, 400, 400, 600);
