
var drawPicture = function(id, backgroundColor, primaryColor, secondaryColor){
  var canvas = CFC.NewCanvas(id);

  canvas.fillRectangle(backgroundColor, 0, 0, 200, 300);

  canvas.fillTriangle(secondaryColor, 70, 280, 150, 200, 180, 280);

  var darkOutline = primaryColor;
  canvas.drawRectangle(darkOutline, 10, 10, 180, 280);
  canvas.drawEllipse(darkOutline, 80, 100, 100, 50);
  canvas.drawLine(darkOutline, 0, 200, 100, 300);

  canvas.drawEllipse(secondaryColor, 100, 110, 100, 50);
}

drawPicture('c1', 'yellow', 'black', 'green');
drawPicture('c2', 'red', 'blue', 'white');
drawPicture('c3', 'blue', 'yellow', 'red');
