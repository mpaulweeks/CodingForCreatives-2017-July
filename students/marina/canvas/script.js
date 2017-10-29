// starting a line in JS with two slashes makes it a comment
// comments are ignored by the browser
// they are useful for documenting your code

// do the 4 things: ellipse, retangle, triangle and line


var canvas = CFC.NewCanvas("artwork");

canvas.fillRectangle("#fffce3", 0, 0, 800, 550);

var gridColor = "#feecd2";
var gridX = 25;
var gridY = 25;
canvas.drawLine(gridColor, gridX*1, 0, gridX*1, 550);
canvas.drawLine(gridColor, gridX*2, 0, gridX*2, 550);
canvas.drawLine(gridColor, gridX*3, 0, gridX*3, 550);
canvas.drawLine(gridColor, gridX*4, 0, gridX*4, 550);
canvas.drawLine(gridColor, gridX*5, 0, gridX*5, 550);
canvas.drawLine(gridColor, gridX*6, 0, gridX*6, 550);
canvas.drawLine(gridColor, gridX*7, 0, gridX*7, 550);
canvas.drawLine(gridColor, gridX*8, 0, gridX*8, 550);
canvas.drawLine(gridColor, gridX*9, 0, gridX*9, 550);
canvas.drawLine(gridColor, gridX*10, 0, gridX*10, 550);
canvas.drawLine(gridColor, gridX*11, 0, gridX*11, 550);
canvas.drawLine(gridColor, gridX*12, 0, gridX*12, 550);
canvas.drawLine(gridColor, gridX*13, 0, gridX*13, 550);
canvas.drawLine(gridColor, gridX*14, 0, gridX*14, 550);
canvas.drawLine(gridColor, gridX*15, 0, gridX*15, 550);
canvas.drawLine(gridColor, gridX*16, 0, gridX*16, 550);
canvas.drawLine(gridColor, gridX*17, 0, gridX*17, 550);
canvas.drawLine(gridColor, gridX*18, 0, gridX*18, 550);
canvas.drawLine(gridColor, gridX*19, 0, gridX*19, 550);
canvas.drawLine(gridColor, gridX*20, 0, gridX*20, 550);
canvas.drawLine(gridColor, gridX*21, 0, gridX*21, 550);
canvas.drawLine(gridColor, gridX*22, 0, gridX*22, 550);
canvas.drawLine(gridColor, gridX*23, 0, gridX*23, 550);
canvas.drawLine(gridColor, gridX*24, 0, gridX*24, 550);
canvas.drawLine(gridColor, gridX*25, 0, gridX*25, 550);
canvas.drawLine(gridColor, gridX*26, 0, gridX*26, 550);
canvas.drawLine(gridColor, gridX*27, 0, gridX*27, 550);
canvas.drawLine(gridColor, gridX*28, 0, gridX*28, 550);
canvas.drawLine(gridColor, gridX*29, 0, gridX*29, 550);
canvas.drawLine(gridColor, gridX*30, 0, gridX*30, 550);
canvas.drawLine(gridColor, gridX*31, 0, gridX*31, 550);

canvas.drawLine(gridColor, 0, gridY*1, 800, gridY*1);
canvas.drawLine(gridColor, 0, gridY*2, 800, gridY*2);
canvas.drawLine(gridColor, 0, gridY*3, 800, gridY*3);
canvas.drawLine(gridColor, 0, gridY*4, 800, gridY*4);
canvas.drawLine(gridColor, 0, gridY*5, 800, gridY*5);
canvas.drawLine(gridColor, 0, gridY*6, 800, gridY*6);
canvas.drawLine(gridColor, 0, gridY*7, 800, gridY*7);
canvas.drawLine(gridColor, 0, gridY*8, 800, gridY*8);
canvas.drawLine(gridColor, 0, gridY*9, 800, gridY*9);
canvas.drawLine(gridColor, 0, gridY*11, 800, gridY*11);
canvas.drawLine(gridColor, 0, gridY*12, 800, gridY*12);
canvas.drawLine(gridColor, 0, gridY*13, 800, gridY*13);
canvas.drawLine(gridColor, 0, gridY*14, 800, gridY*14);
canvas.drawLine(gridColor, 0, gridY*15, 800, gridY*15);

canvas.fillTriangle("#f89573", 655, 55, 645, 80, 665, 80);
canvas.fillTriangle("#f89573", 655, 105, 645, 80, 665, 80);
canvas.fillTriangle("#f89573", 655, 68, 655, 92, 630, 80);
canvas.fillTriangle("#f89573", 655, 68, 680, 80, 655, 92);

canvas.fillEllipse("#fee8ca", 400, 375, 565, 565);
canvas.fillEllipse("#fdd5b4", 400, 375, 495, 495);
canvas.fillEllipse("#fcc4a0", 400, 375, 425, 425);
canvas.fillEllipse("#f89573", 400, 375, 355, 355);

canvas.fillRectangle("white", 0, 400, 800, 150);

canvas.fillRectangle("#111e49", 0, 530, 800, 20);
canvas.fillRectangle("#111e49", 0, 500, 800, 20);
canvas.fillRectangle("#111e49", 0, 470, 800, 20);
canvas.fillRectangle("#111e49", 0, 440, 800, 20);

canvas.fillRectangle("#009bec", 0, 400, 800, 40);



// canvas.drawEllipse("purple", 500, 500, 200, 200);
// canvas.fillEllipse("pink", 500, 500, 200, 200);

//var gridColor = "red";
//var gridWidth = 100;

//canvas.drawLine(gridColor, gridWidth*1, 0, gridWidth*1, 700);
//canvas.drawLine(gridColor, gridWidth*2, 0, gridWidth*2, 700);

//var greenStuff = "green";
//canvas.drawLine(greenStuff, gridWidth*4, 0, gridWidth*4, 700);
//canvas.drawLine(greenStuff, gridWidth*5, 0, gridWidth*5, 700);
//canvas.drawLine(greenStuff, gridWidth*6, 0, gridWidth*6, 700);

//canvas.drawLine("blue", 0, 100, 1000, 100);

//canvas.drawTriangle("black", 150, 150, 250, 150, 250, 250);


//canvas.drawTriangle("black", 300, 300, 150, 300, 150, 500);


//canvas.fillRectangle("red", 50, 650, 500, 50);
