/**
 * Created by lenovo on 2016/5/23.
 */

var CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200,
    myCanvas,
    context;

window.onload = function () {
    createCanvas();
    // drawRect();
    drawImage();
};
function createCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" width = \"" + CANVAS_WIDTH + "\" height=\"" + CANVAS_HEIGHT + "\">";
    myCanvas = document.getElementById("mycanvas");
    context = myCanvas.getContext("2d");
}

function drawRect() {
    context.fillStyle = "#FF0000";
    context.fillRect(0, 0, 200, 200);
}

function drawImage() {
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
    };
    img.src = "../images/1.jpg";
}