var canvas=CFC.NewCanvas("blorpdrawer");

var cb = "black";
var cw = "white";
var eyecolor = "#95bcf9";
var nNm = "#881200";

var lEyeXmiddle = "150";
var rEyeXmiddle = "250";
var EyeYmiddle = "150";

var EyeW = "90";
var EyeBW = "50";
var EyeCW = "70";

var sqStart = "50";
var sqEnd = "300";

canvas.fillRectangle("#fff2bc", sqStart, sqStart, sqEnd, sqEnd);
canvas.drawRectangle(cb, sqStart, sqStart, sqEnd, sqEnd);
canvas.fillEllipse(cw, lEyeXmiddle, EyeYmiddle, EyeW, EyeW);
canvas.fillEllipse(cw, rEyeXmiddle, EyeYmiddle, EyeW, EyeW);
canvas.drawEllipse(cb, lEyeXmiddle, EyeYmiddle, EyeW, EyeW);
canvas.drawEllipse(cb, rEyeXmiddle, EyeYmiddle, EyeW, EyeW);
canvas.fillEllipse(eyecolor, rEyeXmiddle, EyeYmiddle, EyeCW, EyeCW);
canvas.fillEllipse(eyecolor, lEyeXmiddle, EyeYmiddle, EyeCW, EyeCW);
canvas.fillEllipse(cb, lEyeXmiddle, EyeYmiddle, EyeBW, EyeBW);
canvas.fillEllipse(cb, rEyeXmiddle, EyeYmiddle, EyeBW, EyeBW);
canvas.drawTriangle(nNm, 200, 200, 260, 220, 200, 220);
canvas.fillTriangle(nNm, 100, 250, 300, 250, 150, 260);
canvas.drawLine(cb, 110, 110, 180, 100);
canvas.drawLine(cb, 220, 100, 290, 110);
