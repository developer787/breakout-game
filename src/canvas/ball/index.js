import React, { Component } from 'react'

class ball extends Component {
    move(posX, posY, dx, dy, width, height, ballRadius) {
        console.log("<-ooo->")
        if (posX + dx > width - ballRadius || posX + dx < ballRadius) {
            dx = -dx;
        }
        if (posY + dy > height - ballRadius || posY + dy < ballRadius) {
            dy = -dy;
        }

        posX += dx;
        
        posY += dy;
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