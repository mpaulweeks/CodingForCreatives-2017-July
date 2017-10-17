CFC = window;
CFC.Canvas = {};

CFC.NewCanvas = function(){
  if (CFC.Canvas.elm === undefined){
    document.getElementById("cfc-canvas-warning").remove();
    document.body.innerHTML += '<canvas id="cfc-canvas">';
    var canvas = document.getElementById("cfc-canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    var ctx = canvas.getContext('2d');

    var drawEllipse = function(x, y, radiusX, radiusY){
      ctx.beginPath();
      ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    var fillEllipse = function(x, y, radiusX, radiusY){
      ctx.beginPath();
      ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
      ctx.fill();
    }

    var drawRectangle = function(x, y, width, height){
      ctx.strokeRect(x, y, width, height);
    }
    var fillRectangle = function(x, y, width, height){
      ctx.fillRect(x, y, width, height);
    }

    var drawTriangle = function(x1, y1, x2, y2, x3, y3){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.stroke();
    }
    var fillTriangle = function(x1, y1, x2, y2, x3, y3){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.fill();
    }

    var drawLine = function(x1, y1, x2, y2){
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    var setDrawColor = function(colorStr){
      ctx.strokeStyle = colorStr;
    }
    var setFillColor = function(colorStr){
      ctx.fillStyle = colorStr;
    }

    CFC.Canvas = {
      drawEllipse,
      drawLine,
      drawRectangle,
      drawTriangle,
      fillEllipse,
      fillRectangle,
      fillTriangle,
      setDrawColor,
      setFillColor,
    }
  }
  return CFC.Canvas;
}

document.body.innerHTML += `
  <div id="cfc-canvas-warning">
    Initialize your canvas with the following code:
    <pre>var canvas = CFC.NewCanvas();</pre>
  </div>
`;
