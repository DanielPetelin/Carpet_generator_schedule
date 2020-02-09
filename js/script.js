var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var x = 0;
var timer; 

drowSin();

function drowSin() {
    y = Math.sin(x);

    if (x >= 400) {
        x = 0
    } else {
        x = x + 0.3;
    };

    ctx.fillRect(5 * x, 100 + 20 * y, 2, 2);
    timer = setTimeout(drowSin, 50);
};