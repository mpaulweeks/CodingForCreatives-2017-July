CFC = window;
CFC.Canvas = {};

CFC.NewCanvas = function(canvasId){
  if (CFC.Canvas[canvasId] === undefined){
    document.getElementById("cfc-canvas-warning").remove();
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    var drawEllipse = function(x, y, width, height){
      ctx.beginPath();
      ctx.ellipse(x, y, Math.floor(width/2), Math.floor(height/2), 0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    var fillEllipse = function(x, y, width, height){
      ctx.beginPath();
      ctx.ellipse(x, y, Math.floor(width/2), Math.floor(height/2), 0, 0, 2 * Math.PI);
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

    CFC.Canvas[canvasId] = {
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
  return CFC.Canvas[canvasId];
}

document.body.innerHTML += `
  <div id="cfc-canvas-warning">
    Initialize your canvas with the following code:
    <pre>var canvas = CFC.NewCanvas("your canvas id");</pre>
  </div>
`;
