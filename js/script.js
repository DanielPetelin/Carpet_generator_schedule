var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var x = 0;
var timer; 

// делаем функцию генератора ковров.
document.getElementById('generator').onclick = function drowSin() {
    var speed = document.getElementById('speed').value;
    var code = document.getElementById('codeGeneration').value;
    var sizeX = document.getElementById('sizeX').value;
    var sizeY = document.getElementById('sizeY').value;

    y = Math.sin(x * code);
    x = x + 0.05;

    ctx.fillRect(1.5 * x, 200 + 200 * y, sizeX, sizeY);
    timer = setTimeout(drowSin, speed);
};