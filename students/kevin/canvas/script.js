
// starting a line in JS with two slashes makes it a comment
// comments are ignored by the browser
// they are useful for documenting your code

var canvas=CFC.NewCanvas("artwork");

var gridColor="blue";
var gridWidth=100;

canvas.drawLine(gridColor, gridWidth*1,0,gridWidth*1,700);
canvas.drawLine(gridColor, gridWidth*2,0,gridWidth*2,700);


canvas.drawEllipse ("red", 500, 400, 100, 600);
canvas.fillEllipse ("pink", 500, 400, 100, 600);

canvas.drawEllipse ("red", 300, 400, 100, 600);
canvas.fillEllipse ("pink", 300, 400, 100, 600);
canvas.drawRectangle("green",350, 200, 100, 200);
canvas.fillRectangle("darkgreen", 350, 200, 100, 200);


canvas.fillTriangle("yellow", 250,50,250,600,50,20);
canvas.fillTriangle("yellow", 550,50,550,600,750,20);

canvas.drawEllipse("green",300, 200, 100, 200);
canvas.drawEllipse("green",500, 200, 100, 200);

canvas.fillEllipse("blue",300, 250, 100, 150);
canvas.fillEllipse("blue",500, 250, 100, 150);
canvas.fillEllipse("pink",400, 350, 100, 150);
canvas.fillEllipse("red",400, 550, 100, 150);

canvas.fillEllipse("pink",400, 350, 100, 150);
canvas.fillEllipse("red",400, 550, 100, 150);
