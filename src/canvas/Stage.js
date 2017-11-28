function drawBall(ctx, x, y) {
        var ballRadius = 10;

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw(ctx, vw, vh) {
        var ballRadius = 10;

var x = vw/2;
var y = vh-30;
var dx = 2;
var dy = -2;
    drawBall(ctx, x, y);
    
    if(x + dx > vw-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > vh-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

export default (ctx, vw, vh, audio, mouse) => {
  // Your artwork starts here...
	
    draw(ctx, vw, vh)
	// And it ends here.
}  