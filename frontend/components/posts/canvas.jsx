import React from "react";

class Canvas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateCanvas(this.props.drawing, 14);
  }

  componentWillReceiveProps(newProps) {
    this.updateCanvas(newProps.drawing, 14);
  }

  updateCanvas(drawing, pixelSize) {

    if (drawing) {
      const ctx = this.refs.canvas.getContext('2d');
      let x, y;

      for (let i = 0; i < drawing.length; i++) {
        x = (i % 50) * pixelSize;
        y = Math.floor(i / 50) * pixelSize;
        ctx.fillStyle = drawing[i];
        ctx.fillRect(x, y, pixelSize, pixelSize)
      }
    }
  }

  render() {

    return (
        <canvas ref="canvas" width={700} height={700}></canvas>
    )
  }
}


export default Canvas;
