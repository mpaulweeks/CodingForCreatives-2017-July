
var drawPicture = function(id, backgroundColor, primaryColor, secondaryColor){
  var canvas = CFC.NewCanvas(id);

  canvas.fillRectangle(backgroundColor, 10, 10, 200, 300);

  var darkOutline = primaryColor;
  canvas.drawRectangle(darkOutline, 20, 20, 180, 280);
  canvas.drawEllipse(darkOutline, 100, 100, 100, 50);
  canvas.drawLine(darkOutline, 0, 500, 230, 700);

  canvas.drawEllipse(secondaryColor, 110, 110, 100, 50);

  canvas.fillTriangle(secondaryColor, 100, 300, 170, 200, 200, 300);
}

drawPicture('c1', 'yellow', 'black', 'blue');
drawPicture('c2', 'red', 'white', 'yellow');
drawPicture('c3', 'blue', 'yellow', 'red');
