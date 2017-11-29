import React, { Component } from 'react'

class ball extends Component {
    draw(ctx, posX, posY, radius, color) {
        console.log("<-ooOOoo->")
        ctx.beginPath()
        ctx.arc(posX, posY, radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }

}
export default ball