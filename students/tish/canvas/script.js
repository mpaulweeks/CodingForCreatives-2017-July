var canvas = CFC.NewCanvas("artwork");

var ellipseWidth = 350;
var ellipseHeight = 350;

canvas.drawEllipse("#ffe6ff", 500, 350, ellipseWidth*4, ellipseHeight*4);
canvas.fillEllipse("#ffe6ff", 500, 350, ellipseWidth*4, ellipseHeight*4);

canvas.drawEllipse("pink", 500, 350, ellipseWidth*3, ellipseHeight*3);
canvas.fillEllipse("pink", 500, 350, ellipseWidth*3, ellipseHeight*3);

canvas.drawEllipse("lightblue", 500, 350, ellipseWidth*2, ellipseHeight*2);
canvas.fillEllipse("lightblue", 500, 350, ellipseWidth*2, ellipseHeight*2);


canvas.drawEllipse("blue", 500, 350, ellipseWidth*1, ellipseHeight*1);
canvas.fillEllipse("blue", 500, 350, ellipseWidth*1, ellipseHeight*1);

var gridColor = "black";
var gridWidth = 100;
var gridHeight = 700


canvas.drawLine(gridColor, gridWidth*1, 0, gridWidth*1, gridHeight);
canvas.drawLine(gridColor, gridWidth*2, 0, gridWidth*2, gridHeight);
canvas.drawLine(gridColor, gridWidth*3, 0, gridWidth*3, gridHeight);
canvas.drawLine(gridColor, gridWidth*4, 0, gridWidth*4, gridHeight);
canvas.drawLine(gridColor, gridWidth*5, 0, gridWidth*5, gridHeight);
canvas.drawLine(gridColor, gridWidth*6, 0, gridWidth*6, gridHeight);
canvas.drawLine(gridColor, gridWidth*7, 0, gridWidth*7, gridHeight);
canvas.drawLine(gridColor, gridWidth*8, 0, gridWidth*8, gridHeight);
canvas.drawLine(gridColor, gridWidth*9 , 0, gridWidth*9, gridHeight);
canvas.drawLine(gridColor, gridWidth*10, 0, gridWidth*10, gridHeight);

var gridColor = "black";
var gridHeight = 1000

canvas.drawLine(gridColor, 0, gridWidth*1, gridHeight, gridWidth*1);
canvas.drawLine(gridColor, 0, gridWidth*2, gridHeight, gridWidth*2);
canvas.drawLine(gridColor, 0, gridWidth*3, gridHeight, gridWidth*3);
canvas.drawLine(gridColor, 0, gridWidth*4, gridHeight, gridWidth*4);
canvas.drawLine(gridColor, 0, gridWidth*5, gridHeight, gridWidth*5);
canvas.drawLine(gridColor, 0, gridWidth*6, gridHeight, gridWidth*6);
canvas.drawLine(gridColor, 0, gridWidth*7, gridHeight, gridWidth*7);

canvas.drawRectangle ("white", 100, 200, 100, 1000)
canvas.fillRectangle ("white", 100, 200, 100, 1000)

canvas.drawTriangle("white", 400, 200, 300, 300, 400, 400, 400);
canvas.fillTriangle("white", 400, 200, 300, 300, 400, 400, 400);
