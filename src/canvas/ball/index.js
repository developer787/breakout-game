import React, { Component } from 'react'

class ball extends Component {
    move(ballX, ballY, dx, dy, width, height, ballRadius, updatePosition){
        if(ballX + dx > width-ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
    }
    if(ballY + dy > height-ballRadius || ballY + dy < ballRadius) {
        dy = -dy;
    }
    
    ballX += dx;
    ballY += dy;
    updatePosition({
        ballX,
        ballY
    })
    }
    draw(ctx, posX, posY, radius, color) {

        ctx.beginPath()
        ctx.arc(posX, posY, radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }

}
export default ball