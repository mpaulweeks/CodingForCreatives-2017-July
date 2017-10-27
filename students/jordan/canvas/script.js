
var canvas = CFC.NewCanvas("jordart");
var lightColor = "#D8D8D8";
var shade = "#A3A2A2";
var dark = "#767676";
// legs of camera flash
canvas.fillTriangle(shade, 550, 235, 600, 135, 650, 235);
canvas.fillTriangle(shade, 450, 235, 500, 135, 550, 235);
canvas.fillTriangle(lightColor, 555, 235, 600, 135, 645, 235);
canvas.fillTriangle(lightColor, 455, 235, 500, 135, 545, 235);

// empty white space under camera flash
canvas.fillTriangle("lightblue", 520, 245, 570, 115, 620, 245);
canvas.fillTriangle("lightblue", 480, 245, 530, 115, 580, 245);

// capture photo button
canvas.fillRectangle(shade, 255, 210, 130, 30);
canvas.fillRectangle(lightColor, 250, 205, 130, 30);

// camera flash structure
canvas.fillRectangle(shade, 490, 120, 125, 65);
canvas.fillRectangle(lightColor, 490, 120, 120, 60);
// camera flash fill
canvas.fillRectangle("#84C0B7", 495, 130, 105, 35);
canvas.fillRectangle("#B9E2CD", 500, 135, 100, 30);
// camera base structure
canvas.fillRectangle(lightColor, 250, 250, 600, 300);
// camera thick stripe
canvas.fillRectangle("#0B3B39", 250, 300, 600, 200);
// camera base structure edge shadows
canvas.fillRectangle(shade, 250, 250, 20, 300);
canvas.fillRectangle(shade, 820, 250, 30, 300);
canvas.fillRectangle(dark, 250, 250, 10, 300);
canvas.fillRectangle(dark, 835, 250, 15, 300);
// camera thick stripe edge shadows
canvas.fillRectangle("#061515", 250, 300, 10, 200);
canvas.fillRectangle("#061515", 830, 300, 20, 200);
canvas.fillRectangle("#051E1D", 260, 300, 10, 200);
canvas.fillRectangle("#051E1D", 820, 300, 20, 200);
// lens layers
canvas.fillEllipse(lightColor, 550, 400, 280, 280);

canvas.fillEllipse("#424242", 550, 400, 250, 250);

canvas.fillEllipse("#0489B1", 550, 400, 220, 220);

canvas.fillEllipse("#0B3861", 550, 400, 205, 205);

canvas.fillEllipse("#0B4C5F", 550, 400, 115, 115);

canvas.fillEllipse("#0A1B2A", 550, 400, 80, 80);

//red circle button
canvas.fillEllipse(lightColor, 350, 300, 35, 35);
canvas.fillEllipse("#B81506", 350, 300, 25, 25);

// glare circles
canvas.fillEllipse("#B6C7C4", 475, 360, 50, 50);
canvas.fillEllipse("#B6C7C4", 520, 400, 25, 25);
// shoot fxn
canvas.fillRectangle(lightColor, 270, 190, 90, 40);
