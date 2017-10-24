var canvas = CFC.NewCanvas ("artwork");

var gridColor = "black";
var gridWidth = 710;

canvas.fillRectangle("red", 0, 200, 710, 500);
canvas.drawLine(gridColor, gridWidth*1, 0, gridWidth*1, 2000);
canvas.drawLine(gridColor, gridWidth*1.5, 0, gridWidth*1.5, 2000);
canvas.drawLine(gridColor, gridWidth*2, 0, gridWidth*2, 2000);
canvas.drawLine(gridColor, gridWidth*2.5, 0, gridWidth*2.5, 2000);
canvas.drawLine(gridColor, gridWidth*3, 0, gridWidth*3, 2000);
canvas.drawLine(gridColor, gridWidth*3.5, 0, gridWidth*3.5, 2000);

canvas.fillRectangle("blue", 1065, 1000, gridWidth*1.5, 500);

var gridHeight = 200

canvas.drawLine(gridColor, 10, gridHeight*1, 3000, gridHeight*1);
canvas.drawLine(gridColor, 10, gridHeight*3.5, 3000, gridHeight*3.5);
canvas.drawLine(gridColor, 10, gridHeight*5, 3000, gridHeight*5);
canvas.drawLine(gridColor, 10, gridHeight*7.5, 3000, gridHeight*7.5);

canvas.fillEllipse("yellow", gridWidth*3, 450, gridWidth*1, 500);

canvas.fillTriangle( gridColor, 100, 2000, 710, 1000, 710, 2000);

canvas.drawRectangle(gridColor, 0, 0, 3000, 2000);
