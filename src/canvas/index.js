import React from 'react'
import { connect } from 'react-redux'
import Stage from './Stage'
import { CANVAS_INIT } from '../store/actions'
import DPI from 'canvas-dpi-scaler'

const mapDispatch = (dispatch) => {
	return {
		canvasInit: (props)=>dispatch(CANVAS_INIT(props))
	}
}

class canvas extends React.Component {
	componentDidMount() {
		this.initCanvas()
	}
	shouldComponentUpdate() {
        return false
    }
	initCanvas() {
		const { canvasInit } = this.props
		const ctx = this.refs.canvas.getContext('2d')
		const canvas = this.refs.canvas
		const width = window.innerWidth
		const height = window.innerHeight
		const ratio = DPI(canvas, ctx, width, height)
		console.log(ratio)
		if (ratio === 1) {
			canvas.width = width
			canvas.height = height
		}
		canvasInit({
			canvas,
			ctx,
			width,
			height
		})
	}
	render() {
		return (
			<canvas ref="canvas">
			  <Stage />
			</canvas>
		)
	}
}

const Canvas = connect(
null, mapDispatch)(canvas)

export default Canvas