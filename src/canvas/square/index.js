import React, { Component } from 'react'

class square extends Component {
 
    draw(ctx, width, height, color, cuadroX, cuadroY,cuadroAltura,cuadroAnchura) {

        ctx.beginPath()
        ctx.rect(cuadroX, cuadroY,cuadroAltura,cuadroAnchura);
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }

}
export default square