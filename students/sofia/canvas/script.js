// starting a line in JS with two slashes makes it a comment
// comments are ignored by the browser
// they are useful for documenting your code

var canvas = CFC.NewCanvas ("artwork");

var gridColor = "blue";
var gridWidth = 100;

var originX = 500;
var originY = 600;

var hatX = 500;
var hatY = 70;

canvas.fillEllipse("yellow", 500, 280, 300, 300);
canvas.drawRectangle("black", 420, 200, 50, 50);
canvas.drawRectangle("black", 520, 200, 50, 50);
canvas.drawLine("black", 400, 350, 600, 350);
canvas.drawTriangle("black", 500, 270, 480, 310, 520, 310)
canvas.fillTriangle("black", 500, 50, 460, 135, 540, 135)
canvas.drawLine("black", hatX, hatY, 500, 10);
canvas.drawLine("black", hatX, hatY, 470, 10);
canvas.drawLine("black", hatX, hatY, 530, 10);
canvas.drawLine("black", hatX, hatY, 550, 10);
canvas.drawLine("black", hatX, hatY, 450, 10);
canvas.drawLine("black", hatX, hatY, 520, 10);
canvas.drawLine("black", hatX, hatY, 480, 10);
canvas.drawLine("black", hatX, hatY, 490, 10);
canvas.drawLine("black", hatX, hatY, 510, 10);
canvas.drawEllipse("black", 500, 280, 300, 300);
