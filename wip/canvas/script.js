
var canvas = CFC.NewCanvas();

canvas.setFillColor("yellow");
canvas.fillRectangle(50, 50, 400, 600);

canvas.setDrawColor("black");
canvas.drawRectangle(70, 70, 360, 560);
canvas.drawEllipse(200, 200, 100, 50);
canvas.drawLine(30, 500, 230, 700);

canvas.setDrawColor("green");
canvas.drawEllipse(220, 220, 100, 50);

canvas.setFillColor("blue");
canvas.fillTriangle(200, 600, 350, 400, 400, 600);
