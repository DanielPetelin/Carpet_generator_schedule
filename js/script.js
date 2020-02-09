var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var x = 0;
var timer; 

drowSin();

// делаем функцию генератора ковров.
function drowSin() {
    y = Math.sin(x * 2676372653164317536715276155645176341723567153761746175327);
    x = x + 0.05;

    ctx.fillRect(1.5 * x, 200 + 200 * y, 3, 3);
    timer = setTimeout(drowSin, 0.2);
};